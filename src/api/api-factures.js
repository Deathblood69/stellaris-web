import getFactures from "../data/factures.json";

/** Object JS permettant de manipuler le JSON */
let factures = [...getFactures]

/**
 * Fonction permettant de récupérer l'ensemble des factures
 * @returns {*[]}
 */
export function getAllFactures() {
  return factures
}

/**
 * Fonction permettant de récupérer une facture selon l'année
 * @param annee Année de la facture
 * @returns {{}}
 */
export function getFactureByAnnee(annee) {
  return factures.find(invoice => invoice.number === annee)
}

/**
 * Méthode permettant de supprimer une facture selon l'année
 * @param annee Année de la facture
 */
export function deleteFactureByAnnee(annee) {
  factures = factures.filter(invoice => invoice.number !== annee)
}
