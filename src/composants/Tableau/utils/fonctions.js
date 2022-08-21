import {ORDER} from './constantes'

/**
 * Fonction permettant trier un tableau en fonction d'un comparateur
 * This method is created for cross-browser compatibility, if you don't
 * need to support IE11, you can use Array.prototype.sort() directly
 * @param array
 * @param comparator
 * @returns {*}
 */
export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

/**
 * Fonction permettant de calculer le comparateur
 * @param order
 * @param orderBy
 * @returns {{(*, *): number, (*, *): number}}
 */
export function getComparator(order, orderBy) {
  return order === ORDER.DESC
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

/**
 * Fonction permettant de calculer l'ordre d'un élément en fonction d'un paramètre
 * @param a
 * @param b
 * @param orderBy
 * @returns {number}
 */
export function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

/**
 * Foncton permettant de filter les valeurs d'une ligne en fonction des colonnes
 * @param cell
 * @param headCells
 * @returns {{[p: string]: *}}
 */
export const filterCellByHeadCells = (cell, headCells) =>
  Object.keys(cell)
    .filter(key => headCells.some(c => c.id === key))
    .reduce((cur, key) => {
      return Object.assign(cur, {[key]: cell[key]})
    }, {})

/**
 * Fonction permettant d'aligner des cases d'une lignes en fonction de l'alignement de la colonne
 * @param key
 * @param headCells
 */
export const findAlignByHeadCell = (key, headCells) =>
  headCells.find(h => h.id === key).align
