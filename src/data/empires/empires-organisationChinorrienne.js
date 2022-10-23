import {IMAGES} from '../../images/images'
import {CONSTANTES} from '../../constantes/constantes'

export const ORGANISATION_CHINORRIENNE = {
  nom: 'Organisation Chinorrienne',
  gouvernement: CONSTANTES.gouvernements.corporation,
  drapeau: IMAGES.drapeau.ai_01,
  salle: CONSTANTES.salles.capitalistes_impitoyables,
  planete: CONSTANTES.planetes.aride,
  espece: IMAGES.espece.human,
  vaisseau: IMAGES.vaisseau.mamillien,
  ethiques: [
    CONSTANTES.ethiques.fanatiquement_materialiste,
    CONSTANTES.ethiques.militariste,
  ],
  origine: CONSTANTES.origine.origin_unification_durable,
}
