import React from 'react'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Checkbox from '@mui/material/Checkbox'
import {AfficherComposant} from '../Affichage/AfficherComposant'
import {filterCellByHeadCells, findAlignByHeadCell, getComparator, stableSort,} from './utils/fonctions'

/**
 * Composant permettant d'afficher le corps d'un tableau de données
 * @param headCells
 * @param rows
 * @param order
 * @param orderBy
 * @param page
 * @param rowsPerPage
 * @param handleClick
 * @param emptyRows
 * @param isSelected
 * @returns {JSX.Element}
 * @constructor
 */
export const EnhancedTableBody = ({
  headCells,
  rows,
  order,
  orderBy,
  page,
  rowsPerPage,
  handleClick,
  emptyRows,
  isSelected,
}) => (
  <TableBody>
    {stableSort(rows, getComparator(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row, index) => {
        const isItemSelected = isSelected(row.id)
        return (
          <TableRow
            key={index}
            hover
            onClick={event => handleClick(event, row.id)}
            role={'checkbox'}
            aria-checked={isItemSelected}
            tabIndex={-1}
            selected={isItemSelected}
          >
            <TableCell padding={'checkbox'}>
              <Checkbox color={'primary'} checked={isItemSelected} />
            </TableCell>
            {Object.keys(filterCellByHeadCells(row, headCells)).map(
              key =>
                key !== 'id' && (
                  <TableCell
                    key={key}
                    align={findAlignByHeadCell(key, headCells) || 'left'}
                  >
                    {row[key]}
                  </TableCell>
                ),
            )}
          </TableRow>
        )
      })}
    <AfficherComposant condition={emptyRows > 0}>
      <TableRow
        style={{
          height: 53 * emptyRows,
        }}
      >
        <TableCell colSpan={6} />
      </TableRow>
    </AfficherComposant>
  </TableBody>
)
