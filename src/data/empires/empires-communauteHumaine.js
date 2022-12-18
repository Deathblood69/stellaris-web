import {IMAGES} from '../../images/images'
import {CONSTANTES} from '../../constantes/constantes'

export const COMMUNAUTE_HUMAINE = {
  nom: 'Communauté Humaine',
  gouvernement: CONSTANTES.gouvernements.dictarorial,
  drapeau: IMAGES.drapeaux.flag_human_4,
  salle: CONSTANTES.salles.hegemonie_imperialiste,
  planete: CONSTANTES.planetes.continental,
  espece: CONSTANTES.especes.humain.humain,
  vaisseau: IMAGES.vaisseaux.mammillian,
  ethiques: [
    CONSTANTES.ethiques.fanatiquement_militariste,
    CONSTANTES.ethiques.xenophobe,
  ],
  civismes: [
    CONSTANTES.civisme.nationalistic_zeal,
    CONSTANTES.civisme.distinguished_admiralty
  ],
  traits: [
    CONSTANTES.traits.adaptive,
    CONSTANTES.traits.nomadic,
    CONSTANTES.traits.wasteful,
  ],
  origine: CONSTANTES.origine.origin_colonie_perdu,
}
