/**
 * Structure de l'objet individu
 * @type {{nom: StringConstructor, prenom: StringConstructor, date_naissance: StringConstructor}}
 */
const individu = {
  nom: String,
  prenom: String,
  date_naissance: String,
}

/**
 * Liste des structures des objets utilisés dans l'application
 * @type {{individu: {nom: StringConstructor, prenom: StringConstructor, date_naissance: StringConstructor}}}
 */
export const STRUCTURE = {
  individu: individu,
}
