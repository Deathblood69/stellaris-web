import {IMAGES} from '../../images/images'
import {CONSTANTES} from '../../constantes/constantes'

export const SYNDICAT_HAZBUZIEN = {
  nom: 'Syndicat Hazbuzien',
  gouvernement: CONSTANTES.gouvernements.corporation,
  drapeau: IMAGES.drapeau.ai_01,
  salle: CONSTANTES.salles.capitalistes_impitoyables,
  planete: CONSTANTES.planetes.savanne,
  espece: IMAGES.espece.human,
  vaisseau: IMAGES.vaisseau.mamillien,
  ethiques: [
    CONSTANTES.ethiques.fanatiquement_militariste,
    CONSTANTES.ethiques.spiritualiste,
  ],
  origine: CONSTANTES.origine.origin_unification_durable,
}
