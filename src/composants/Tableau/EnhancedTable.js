import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Paper from '@mui/material/Paper'
import {EnhancedTableToolbar} from './EnhancedTableToolbar'
import {EnhancedTableHead} from './EnhancedTableHead'
import {EnhancedTableBody} from './EnhancedTableBody'
import {Alert} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {ORDER} from './utils/constantes'

/**
 * Composant permettant d'afficher et de manipuler des données dans un tableau
 * @param titre
 * @param headCells
 * @param rows
 * @param setRecherche
 * @param handleModifier
 * @param handleNouveau
 * @param handleFilter
 * @param handleDelete
 * @param pagination
 * @returns {JSX.Element}
 * @constructor
 */
export default function EnhancedTable({
  titre,
  headCells = [],
  rows = [],
  setRecherche,
  handleModifier,
  handleNouveau,
  handleFilter,
  handleDelete,
  pagination = [5, 10, 25],
}) {
  // ====== PARAMETRAGE ====== //

  /** Hook permettant la traduction des éléments */
  const {t} = useTranslation()

  // ====== VARIABLES ====== //

  /** Définit l'ordre de tri */
  const [order, setOrder] = useState(ORDER.ASC)

  /** Définit la colonne sur laquelle le tableau sera trié */
  const [orderBy, setOrderBy] = useState('')

  /** Définit la liste des lignes sélectionnées */
  const [selected, setSelected] = useState([])

  /** Définit la page affichée */
  const [page, setPage] = useState(0)

  /** Définit le nombre de lignes affichées par page */
  const [rowsPerPage, setRowsPerPage] = useState(pagination[0])

  /** Booléen permettant de savoir si le tableau possède des lignes */
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  // ====== METHODES ====== //

  /** Fonction permettant de savoir si un élement est sélectionné */
  const isSelected = id => selected.indexOf(id) !== -1

  /**
   * Méthode permettant de trier par une colonne du tableau
   * @param event
   * @param property
   */
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === ORDER.ASC
    setOrder(isAsc ? ORDER.DESC : ORDER.ASC)
    setOrderBy(property)
  }

  /**
   * Méthode permettant de sélectionner l'ensemble des lignes du tableau
   * @param event
   */
  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.id)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  /**
   * Méthode permettant de sélectionner une ligne dans le tableau
   * @param event
   * @param id
   */
  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected = []
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }
    setSelected(newSelected)
  }

  /**
   * Méthode permettant de changer la page affichée
   * @param event
   * @param newPage
   */
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  /**
   * Méthode permettant de changer le nombre de ligne affiché par page
   * @param event
   */
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value)
    setPage(0)
  }

  // ====== USE EFFECT ====== //

  /** Permet d'actualiser le nombre de lignes sélectionnées lorsque que le nombre de lignes totales change*/
  useEffect(() => {
    setSelected(prevState => prevState.filter(s => rows.some(r => r?.id === s)))
  }, [rows])

  // ====== AFFICHAGE ====== //

  return (
    <Box sx={{width: '100%'}}>
      <Paper sx={{width: '100%', mb: 2}}>
        <EnhancedTableToolbar
          titre={titre}
          selected={selected}
          setRecherche={setRecherche}
          handleFilter={handleFilter}
          handleModifier={handleModifier}
          handleNouveau={handleNouveau}
          handleDelete={handleDelete}
        />
        {rows.length > 0 ? (
          <React.Fragment>
            <TableContainer>
              <Table sx={{minWidth: 750}} aria-labelledby="tableTitle">
                <EnhancedTableHead
                  headCells={headCells}
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <EnhancedTableBody
                  headCells={headCells}
                  emptyRows={emptyRows}
                  order={order}
                  orderBy={orderBy}
                  page={page}
                  rows={rows}
                  handleClick={handleClick}
                  rowsPerPage={rowsPerPage}
                  isSelected={isSelected}
                />
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={pagination}
              labelRowsPerPage={t('table.ligne_par_page')}
              labelDisplayedRows={({from, to, count}) =>
                `${from}-${to === -1 ? count : to} ${t('table.sur')} ${count}`
              }
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </React.Fragment>
        ) : (
          <Alert align={'center'} severity={'warning'}>
            {t('table.aucune_donnees')}
          </Alert>
        )}
      </Paper>
    </Box>
  )
}
