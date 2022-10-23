import {IMAGES} from '../../images/images'
import {CONSTANTES} from '../../constantes/constantes'

export const SYNERGIE_CLIENTELE_ORBIS = {
  nom: 'Synergie Clientèle Orbis',
  gouvernement: CONSTANTES.gouvernements.corporation,
  drapeau: IMAGES.drapeau.ai_01,
  salle: CONSTANTES.salles.commercants_pacifiques,
  planete: CONSTANTES.planetes.ocean,
  espece: IMAGES.espece.human,
  vaisseau: IMAGES.vaisseau.mamillien,
  ethiques: [
    CONSTANTES.ethiques.autoritariste,
    CONSTANTES.ethiques.xenophile,
    CONSTANTES.ethiques.materialiste,
  ],
  origine: CONSTANTES.origine.origin_unification_durable,
}
