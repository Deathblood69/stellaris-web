import Accueil from "../pages/public/accueil/Accueil";
import { Yup } from "../pages/public/yup/Yup";
import { Formulaires } from "../pages/public/formulaire/Formulaires";
import { ROUTES } from "./constantes-routes";
import { Invoice } from "../pages/public/formulaire/Invoice";
import { Query } from "../pages/public/query/Query";
import { WebSocketDemo } from "../pages/public/websocket/WebSocketDemo";

/**
 * Liste des pages accessibles dans l'application
 */
const pages = [
  {
    label: 'accueil',
    path: ROUTES.accueil,
    composant: <Accueil />,
  },
  {
    label: 'yup',
    path: ROUTES.yup,
    composant: <Yup />,
  },
  {
    label: 'formulaire',
    path: ROUTES.formulaires,
    composant: <Formulaires />,
    enfants: [
      {
        label: 'facture',
        path: ':id',
        composant: <Invoice />,
      },
    ],
  },
  {
    label: 'query',
    path: ROUTES.query,
    composant: <Query />,
  },
  {
    label: 'websocket',
    path: ROUTES.websocket,
    composant: <WebSocketDemo />,
  },
]

/**
 * Fonction permettant de chercher un label de page en fonction de son chemin
 * @param path Chemin à chercher au sein des pages
 * @returns {*|string}
 */
export const findLabelByPath = path => {
  return pages.find(c => c.path === path)?.label || 'Incorrect'
}

export const getRoutes = () => pages
