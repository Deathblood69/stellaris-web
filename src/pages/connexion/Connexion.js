import React from 'react'
import {Login} from '../../composants/Login/Login'
import {Grid} from '@mui/material'

/**
 * Composant permettant de se connecter à l'application
 * @param handleConnexion
 * @returns {JSX.Element}
 * @constructor
 */
export const Connexion = ({handleConnexion}) => (
  <Grid
    container
    sx={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Login
      titre={'Page de connexion'}
      libelleConnexion={'Se connecter'}
      tooltipConnexion={''}
      handleConnexion={handleConnexion}
    />
  </Grid>
)
