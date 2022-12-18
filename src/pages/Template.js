import React from 'react'
import {Route, Routes} from 'react-router-dom'
import BarreMenu from '../layout/BarreMenu'
import {Accueil} from './accueil/Accueil'
import {CONSTANTES_ROUTES} from '../constantes/routes/constantes-routes'
import {NouvellePartie} from './nouvellePartie/NouvellePartie'
import {Empire} from './nouvellePartie/empire/Empire'

/**
 * Composant principal de l'application, permet de gérer les routes et l'agencement
 * @returns {JSX.Element}
 * @constructor
 */
export const Template = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path={CONSTANTES_ROUTES.root} element={<BarreMenu />}>
          <Route index element={<Accueil />} />
          <Route
            path={CONSTANTES_ROUTES.nouvellePartie.index}
            element={<NouvellePartie />}
          >
            <Route
              path={CONSTANTES_ROUTES.nouvellePartie.aleatoire}
              element={<React.Fragment />}
            />
            <Route
              path={CONSTANTES_ROUTES.nouvellePartie.creerNouveau}
              element={<React.Fragment />}
            />
            <Route
              path={CONSTANTES_ROUTES.nouvellePartie.empire}
              element={<Empire />}
            />
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  )
}
