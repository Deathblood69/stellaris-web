import {IMAGES} from '../../images/images'
import {CONSTANTES} from '../../constantes/constantes'

export const ORGANISATION_NATIONS_UNIES = {
  nom: 'Organisation des Nations Unies',
  gouvernement: CONSTANTES.gouvernements.democratique,
  drapeau: IMAGES.drapeau.ai_01,
  salle: CONSTANTES.salles.constructeurs_federations,
  planete: CONSTANTES.planetes.continental,
  espece: IMAGES.espece.human,
  vaisseau: IMAGES.vaisseau.mamillien,
  ethiques: [
    CONSTANTES.ethiques.fanatiquement_egalitariste,
    CONSTANTES.ethiques.xenophile,
  ],
  origine: CONSTANTES.origine.origin_unification_durable,
}
