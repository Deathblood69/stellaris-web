import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Checkbox from '@mui/material/Checkbox'
import TableSortLabel from '@mui/material/TableSortLabel'
import React from 'react'
import {useTranslation} from 'react-i18next'

/**
 * Composant permettant d'afficher l'entête d'un tableau de données
 * @param headCells
 * @param onSelectAllClick
 * @param order
 * @param orderBy
 * @param numSelected
 * @param rowCount
 * @param onRequestSort
 * @returns {JSX.Element}
 * @constructor
 */
export const EnhancedTableHead = ({
  headCells,
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
}) => {
  // ====== PARAMETRAGE ====== //

  /** Hook permettant la traduction des éléments */
  const {t} = useTranslation()

  // ====== METHODES ====== //

  /**
   * Méthode permettant d'effectuer un tri sur les colonnes
   * @param property
   * @returns {(function(*): void)|*}
   */
  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }

  // ====== AFFICHAGE ====== //

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.align || 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {t(headCell.label)}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
