import React from 'react'
import erreur from '../../images/delete.svg'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router'
import {Grid} from '@mui/material'
import {Traduction} from '../Traduction/Traduction'

/**
 * Composant permettant d'afficher les erreurs reçues par l'application
 * @param resetErrorBoundary Fonction à executer au rechargement de l'application
 * @param icone Icone à afficher sur la page d'erreur
 * @param message Message à afficher sous l'icone
 * @param messageBouton Message sur le bouton rechargeant la page
 * @returns {JSX.Element}
 * @constructor
 */
export function PageErreur({
  resetErrorBoundary,
  icone,
  message,
  messageBouton,
}) {
  // ====== PARAMETRAGE ====== //

  const navigate = useNavigate()

  /** Hook de traduction */
  const {t} = useTranslation()

  // ====== AFFICHAGE ====== //

  return (
    <Grid container direction={'column'}>
      <header className="center-page">
        <Grid item container justifyContent={'center'}>
          <img src={icone ?? erreur} className="logo" alt="logo" />
        </Grid>
        <Grid item container justifyContent={'center'}>
          <p>
            <Traduction message={t(message ?? 'page.echec')} />
          </p>
        </Grid>
        <Grid item container justifyContent={'center'}>
          <button
            style={{maxWidth: '50%'}}
            onClick={
              resetErrorBoundary ? resetErrorBoundary : () => navigate(-1)
            }
          >
            <Traduction message={t(messageBouton ?? 'page.precedent')} />
          </button>
        </Grid>
      </header>
    </Grid>
  )
}
