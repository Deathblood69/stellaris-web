import background from './background.jpg'
import logo from './logo.svg'
import {IMAGES_DRAPEAUX} from './drapeaux/images-drapeaux'
import {IMAGES_ESPECES} from './especes/images-especes'
import {IMAGES_PLANETES} from './planetes/images-planete'
import {IMAGES_SALLES} from './salles/images-salles'
import {IMAGES_VAISSEAUX} from './vaisseaux/images-vaisseaux'
import {IMAGES_ETHIQUES} from './ethiques/images-ethiques'
import {IMAGES_GOUVERNEMENT} from './gouvernement/images-gouvernement'
import {IMAGES_ORIGINE} from './origines/images-origines'
import {IMAGE_TRAITS} from "./traits/images-traits";
import {IMAGE_CIVISME} from "./civics/images-civisme";

export const IMAGES = {
  fond: background,
  logo: logo,
  drapeau: IMAGES_DRAPEAUX,
  espece: IMAGES_ESPECES,
  planete: IMAGES_PLANETES,
  salle: IMAGES_SALLES,
  vaisseau: IMAGES_VAISSEAUX,
  ethique: IMAGES_ETHIQUES,
  gouvernement: IMAGES_GOUVERNEMENT,
  origin: IMAGES_ORIGINE,
  trait: IMAGE_TRAITS,
  civisme: IMAGE_CIVISME,
}
