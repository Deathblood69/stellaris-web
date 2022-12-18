import {CONSTANTES_PLANETES_CLIMAT} from './constantes-planetes-climat'
import {IMAGES} from '../../images/images'

export const CONSTANTES_PLANETES = {
  aride: {
    type: 'aride',
    image: IMAGES.planetes.Planet_arid,
    climat: CONSTANTES_PLANETES_CLIMAT.sec,
  },
  desert: {
    type: 'desert',
    image: IMAGES.planetes.Planet_desert,
    climat: CONSTANTES_PLANETES_CLIMAT.sec,
  },
  savanne: {
    type: 'savanne',
    image: IMAGES.planetes.Planet_savannah,
    climat: CONSTANTES_PLANETES_CLIMAT.sec,
  },
  continental: {
    type: 'continental',
    image: IMAGES.planetes.Planet_continental,
    climat: CONSTANTES_PLANETES_CLIMAT.humide,
  },
  ocean: {
    type: 'ocean',
    image: IMAGES.planetes.Planet_ocean,
    climat: CONSTANTES_PLANETES_CLIMAT.humide,
  },
  tropical: {
    type: 'tropical',
    image: IMAGES.planetes.Planet_tropical,
    climat: CONSTANTES_PLANETES_CLIMAT.humide,
  },
  montagneux: {
    type: 'montagneux',
    image: IMAGES.planetes.Planet_alpine,
    climat: CONSTANTES_PLANETES_CLIMAT.gele,
  },
  arctique: {
    type: 'arctique',
    image: IMAGES.planetes.Planet_arctic,
    climat: CONSTANTES_PLANETES_CLIMAT.gele,
  },
  tundra: {
    type: 'tundra',
    image: IMAGES.planetes.Planet_tundra,
    climat: CONSTANTES_PLANETES_CLIMAT.gele,
  },
  gaia: {
    type: 'gaia',
    image: IMAGES.planetes.Planet_gaia,
    climat: CONSTANTES_PLANETES_CLIMAT.gaia,
  },
  tombe: {
    type: 'tombe',
    image: IMAGES.planetes.Planet_nuked,
    climat: CONSTANTES_PLANETES_CLIMAT.tombe,
  },
  ecunmenopolis: {
    type: 'ecunmenopolis',
    image: IMAGES.planetes.Planet_city,
    climat: CONSTANTES_PLANETES_CLIMAT.ecunmenopolis,
  },
  relic: {
    type: 'relic',
    image: IMAGES.planetes.Planet_city,
    climat: CONSTANTES_PLANETES_CLIMAT.ecunmenopolis,
  },
  ruche: {
    type: 'ruche',
    image: IMAGES.planetes.Planet_infested,
    climat: CONSTANTES_PLANETES_CLIMAT.ruche,
  },
  machine: {
    type: 'machine',
    image: IMAGES.planetes.Planet_ai,
    climat: CONSTANTES_PLANETES_CLIMAT.machine,
  },
}
