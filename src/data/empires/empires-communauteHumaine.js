import {IMAGES} from '../../images/images'
import {CONSTANTES} from '../../constantes/constantes'

export const COMMUNAUTE_HUMAINE = {
  nom: 'Communauté Humaine',
  gouvernement: CONSTANTES.gouvernements.dictarorial,
  drapeau: IMAGES.drapeau.ai_01,
  salle: CONSTANTES.salles.hegemonie_imperialiste,
  planete: CONSTANTES.planetes.continental,
  espece: IMAGES.espece.human,
  vaisseau: IMAGES.vaisseau.mamillien,
  ethiques: [
    CONSTANTES.ethiques.fanatiquement_militariste,
    CONSTANTES.ethiques.xenophobe,
  ],
  origine: CONSTANTES.origine.origin_colonie_perdu,
}
