export const normaliseString = (string = '') =>
  string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ /g, '-')
    .toLowerCase()
