import {CONSTANTES_PLANETES_CLIMAT} from './constantes-planetes-climat'
import {IMAGES} from '../../images/images'

export const CONSTANTES_PLANETES = {
  aride: {
    type: 'aride',
    image: IMAGES.planete.aride,
    climat: CONSTANTES_PLANETES_CLIMAT.sec,
  },
  desert: {
    type: 'desert',
    image: IMAGES.planete.desert,
    climat: CONSTANTES_PLANETES_CLIMAT.sec,
  },
  savanne: {
    type: 'savanne',
    image: IMAGES.planete.savanne,
    climat: CONSTANTES_PLANETES_CLIMAT.sec,
  },
  continental: {
    type: 'continental',
    image: IMAGES.planete.continental,
    climat: CONSTANTES_PLANETES_CLIMAT.humide,
  },
  ocean: {
    type: 'ocean',
    image: IMAGES.planete.ocean,
    climat: CONSTANTES_PLANETES_CLIMAT.humide,
  },
  tropical: {
    type: 'tropical',
    image: IMAGES.planete.tropical,
    climat: CONSTANTES_PLANETES_CLIMAT.humide,
  },
  montagneux: {
    type: 'montagneux',
    image: IMAGES.planete.montagneux,
    climat: CONSTANTES_PLANETES_CLIMAT.gele,
  },
  arctique: {
    type: 'arctique',
    image: IMAGES.planete.arctique,
    climat: CONSTANTES_PLANETES_CLIMAT.gele,
  },
  tundra: {
    type: 'tundra',
    image: IMAGES.planete.tundra,
    climat: CONSTANTES_PLANETES_CLIMAT.gele,
  },
  gaia: {
    type: 'gaia',
    image: IMAGES.planete.gaia,
    climat: CONSTANTES_PLANETES_CLIMAT.gaia,
  },
  tombe: {
    type: 'tombe',
    image: IMAGES.planete.tombe,
    climat: CONSTANTES_PLANETES_CLIMAT.tombe,
  },
  ecunmenopolis: {
    type: 'ecunmenopolis',
    image: IMAGES.planete.ecunmenopolis,
    climat: CONSTANTES_PLANETES_CLIMAT.ecunmenopolis,
  },
  relic: {
    type: 'relic',
    image: IMAGES.planete.relic,
    climat: CONSTANTES_PLANETES_CLIMAT.ecunmenopolis,
  },
  ruche: {
    type: 'ruche',
    image: IMAGES.planete.ruche,
    climat: CONSTANTES_PLANETES_CLIMAT.ruche,
  },
  machine: {
    type: 'machine',
    image: IMAGES.planete.machine,
    climat: CONSTANTES_PLANETES_CLIMAT.machine,
  },
}
