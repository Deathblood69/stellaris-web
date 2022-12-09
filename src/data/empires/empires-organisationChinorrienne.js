import {IMAGES} from '../../images/images'
import {CONSTANTES} from '../../constantes/constantes'

export const ORGANISATION_CHINORRIENNE = {
  nom: 'Organisation Chinorrienne',
  gouvernement: CONSTANTES.gouvernements.corporation,
  drapeau: IMAGES.drapeaux.flag_ornate_4,
  salle: CONSTANTES.salles.capitalistes_impitoyables,
  planete: CONSTANTES.planetes.aride,
  espece: IMAGES.especes.human,
  vaisseau: IMAGES.vaisseaux.mammillian,
  ethiques: [
    CONSTANTES.ethiques.fanatiquement_materialiste,
    CONSTANTES.ethiques.militariste,
  ],
  civismes: [
    CONSTANTES.civisme.private_prospectors,
    CONSTANTES.civisme.ruthless_competition
  ],
  traits: [
    CONSTANTES.traits.industrious,
    CONSTANTES.traits.intelligent,
    CONSTANTES.traits.solitary,
    CONSTANTES.traits.wasteful,
  ],
  origine: CONSTANTES.origine.origin_unification_durable,
}
