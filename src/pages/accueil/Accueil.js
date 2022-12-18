import React from 'react'
import {Grid, Typography} from '@mui/material'
import {CONSTANTES_ROUTES} from '../../constantes/routes/constantes-routes'
import {BoutonNavigation} from '../../composants/BoutonNavigation'

/**
 * Composant affichant la page d'accueil de l'application
 * @returns {JSX.Element}
 * @constructor
 */
export const Accueil = () => (
  <React.Fragment>
    <Grid
      container
      style={{
        flex: '1 1',
        color: 'white',
        textShadow: 'black 0.1em 0.1em 0.2em',
      }}
    >
      <Grid
        item
        xs={12}
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Typography align={'center'} variant={'h1'}>
          STELLARIS
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        container
        alignItems={'center'}
        justifyContent={'center'}
        spacing={2}
      >
        <Grid item>
          <BoutonNavigation to={CONSTANTES_ROUTES.nouvellePartie.index}>
            Nouvelle Partie
          </BoutonNavigation>
        </Grid>
        <Grid item>
          <BoutonNavigation to={CONSTANTES_ROUTES.multijoueur}>
            Multijoueur
          </BoutonNavigation>
        </Grid>
        <Grid item>
          <BoutonNavigation to={CONSTANTES_ROUTES.chargerPartie}>
            Charger une partie
          </BoutonNavigation>
        </Grid>
        <Grid item>
          <BoutonNavigation to={CONSTANTES_ROUTES.credits}>
            Crédits
          </BoutonNavigation>
        </Grid>
        <Grid item>
          <BoutonNavigation to={CONSTANTES_ROUTES.parametres}>
            Paramètres
          </BoutonNavigation>
        </Grid>
      </Grid>
    </Grid>
  </React.Fragment>
)
