import {IMAGES} from '../../images/images'
import {CONSTANTES} from '../../constantes/constantes'

export const SYNDICAT_HAZBUZIEN = {
  nom: 'Syndicat Hazbuzien',
  gouvernement: CONSTANTES.gouvernements.corporation,
  drapeau: IMAGES.drapeaux.corporate_03,
  salle: CONSTANTES.salles.capitalistes_impitoyables,
  planete: CONSTANTES.planetes.savanne,
  espece: IMAGES.especes.human,
  vaisseau: IMAGES.vaisseaux.mammillian,
  ethiques: [
    CONSTANTES.ethiques.fanatiquement_militariste,
    CONSTANTES.ethiques.spiritualiste,
  ],
  civismes: [
    CONSTANTES.civisme.beacon_of_liberty,
    CONSTANTES.civisme.idealistic_foundation
  ],
  traits: [
    CONSTANTES.traits.ingenious,
    CONSTANTES.traits.thrifty,
    CONSTANTES.traits.deviants,
    CONSTANTES.traits.quarrelsome,
  ],
  origine: CONSTANTES.origine.origin_unification_durable,
}
