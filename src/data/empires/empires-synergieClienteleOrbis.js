import {IMAGES} from '../../images/images'
import {CONSTANTES} from '../../constantes/constantes'

export const SYNERGIE_CLIENTELE_ORBIS = {
  nom: 'Synergie Clientèle Orbis',
  gouvernement: CONSTANTES.gouvernements.corporation,
  drapeau: IMAGES.drapeaux.corporate_04,
  salle: CONSTANTES.salles.commercants_pacifiques,
  planete: CONSTANTES.planetes.ocean,
  espece: IMAGES.especes.human,
  vaisseau: IMAGES.vaisseaux.mammillian,
  ethiques: [
    CONSTANTES.ethiques.autoritariste,
    CONSTANTES.ethiques.xenophile,
    CONSTANTES.ethiques.materialiste,
  ],
  civismes: [
    CONSTANTES.civisme.brand_loyalty,
    CONSTANTES.civisme.media_conglomerate
  ],
  traits: [
    CONSTANTES.traits.charismatic,
    CONSTANTES.traits.adaptive,
    CONSTANTES.traits.enduring,
    CONSTANTES.traits.decadent,
    CONSTANTES.traits.slow_breeders,
  ],
  origine: CONSTANTES.origine.origin_unification_durable,
}
