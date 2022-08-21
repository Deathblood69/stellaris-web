import React, {useContext} from 'react'
import {Route, Routes} from 'react-router-dom'
import BarreMenu from '../layout/BarreMenu'
import {Accueil} from './accueil/Accueil'
import TableauUtilisateurs from './utilisateur/TableauUtilisateurs'
import {DialogUtilisateur} from './utilisateur/DialogUtilisateur'
import {PageErreur} from '../composants/Messages/PageErreur'
import absentIcon from '../images/404.png'
import {Connexion} from './connexion/Connexion'
import {ROUTES} from '../constantes/constantes-routes'
import {DialogSupression} from '../composants/Popup/DialogSupression'
import {UserContext} from '../provider/UserProvider'

/**
 * Composant principal de l'application, permet de gérer les routes et l'agencement
 * @returns {JSX.Element}
 * @constructor
 */
export const Template = () => {
  const {user, setUser} = useContext(UserContext)

  const handleConnexion = values => {
    setUser(values)
  }

  const handleDeconnexion = () => {
    setUser(undefined)
  }

  return (
    <React.Fragment>
      <Routes>
        {user ? (
          <Route
            path={ROUTES.root}
            element={<BarreMenu handleDeconnexion={handleDeconnexion} />}
          >
            <Route index element={<Accueil user={user} />} />
            <Route path={ROUTES.utilisateurs} element={<TableauUtilisateurs />}>
              <Route path={ROUTES.nouveau} element={<DialogUtilisateur />} />
              <Route path={ROUTES.supprimer} element={<DialogSupression />} />
              <Route path={':id'} element={<DialogUtilisateur />} />
            </Route>
            <Route
              path={'*'}
              element={
                <PageErreur
                  titre={'page.absente_titre'}
                  message={'page.absente_message'}
                  description={'page.absente_description'}
                  icone={absentIcon}
                />
              }
            />
          </Route>
        ) : (
          <Route
            path={'*'}
            element={<Connexion handleConnexion={handleConnexion} />}
          />
        )}
      </Routes>
    </React.Fragment>
  )
}
