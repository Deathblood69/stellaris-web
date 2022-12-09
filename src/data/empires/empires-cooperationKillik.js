import {IMAGES} from '../../images/images'
import {CONSTANTES} from '../../constantes/constantes'

export const COOPERATION_KILLIK = {
  nom: 'Coopération Killik',
  gouvernement: CONSTANTES.gouvernements.democratique,
  drapeau: IMAGES.drapeaux.corporate_02,
  salle: CONSTANTES.salles.explorateurs_erudits,
  planete: CONSTANTES.planetes.tropical,
  espece: IMAGES.especes.human,
  vaisseau: IMAGES.vaisseaux.mammillian,
  ethiques: [
    CONSTANTES.ethiques.fanatiquement_egalitariste,
    CONSTANTES.ethiques.materialiste,
  ],
  civismes: [
    CONSTANTES.civisme.shared_burden,
    CONSTANTES.civisme.functional_architecture
  ],
  traits: [
    CONSTANTES.traits.communal,
    CONSTANTES.traits.traditional,
    CONSTANTES.traits.quick_learners,
    CONSTANTES.traits.fleeting
  ],
  origine: CONSTANTES.origine.origin_unification_durable,
}
