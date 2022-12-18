import { IMAGES } from "../../images/images";
import { CONSTANTES } from "../../constantes/constantes";

export const ORGANISATION_NATIONS_UNIES = {
  nom: "Organisation des Nations Unies",
  gouvernement: CONSTANTES.gouvernements.democratique,
  drapeau: IMAGES.drapeaux.flag_human_9,
  salle: CONSTANTES.salles.constructeurs_federations,
  planete: CONSTANTES.planetes.continental,
  espece: CONSTANTES.especes.humain.humain,
  vaisseau: IMAGES.vaisseaux.mammillian,
  ethiques: [
    CONSTANTES.ethiques.fanatiquement_egalitariste,
    CONSTANTES.ethiques.xenophile
  ],
  civismes: [
    CONSTANTES.civisme.beacon_of_liberty,
    CONSTANTES.civisme.idealistic_foundation
  ],
  traits: [
    CONSTANTES.traits.adaptive,
    CONSTANTES.traits.nomadic,
    CONSTANTES.traits.wasteful,
  ],
  origine: CONSTANTES.origine.origin_unification_durable
};
