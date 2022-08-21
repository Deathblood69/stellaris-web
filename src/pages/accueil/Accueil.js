import React from 'react'
import {MediaCard} from '../../composants/Tuile/MediaCard'
import {Grid} from '@mui/material'
import logo from '../../images/logo.svg'
import Button from '@mui/material/Button'
import {useNavigate} from 'react-router'
import {ROUTES} from '../../constantes/constantes-routes'
import Typography from '@mui/material/Typography'
import {useTranslation} from 'react-i18next'

/**
 * Composant affichant la page d'accueil de l'application
 * @returns {JSX.Element}
 * @constructor
 */
export const Accueil = ({user}) => {
  // ====== PARAMETRAGE ====== //

  /** Traduction */
  const {t} = useTranslation()

  /** Hook permettant de naviguer parmi les adresse de l'application */
  const navigate = useNavigate()

  // ====== VARIABLES ====== //

  /** Liste des tuiles à afficher sur le menu d'accueil */
  const cards = [
    {
      titre: 'Carte',
      description:
        "Carte de la galaxie en 2d",
      image: {path: logo, alt: 'Logo'},
      actions: {
        justifyContent: 'center',
        elements: [
          <Button onClick={() => navigate(ROUTES.galaxie)} size="small">
            {t('cards.details')}
          </Button>,
        ],
      },
    },
    {
      titre: 'Utilisateurs',
      description:
        "Gestion des utilisateurs",
      image: {path: logo, alt: 'Logo'},
      actions: {
        justifyContent: 'center',
        elements: [
          <Button onClick={() => navigate(ROUTES.utilisateurs)} size="small">
            {t('cards.details')}
          </Button>,
        ],
      },
    },
  ]

  // ====== AFFICHAGE ====== //

  return (
    <React.Fragment>
      <Typography>{`${t('accueil.bonjour')} ${user.prenom}`}</Typography>
      <Grid
        container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {cards.map((card, index) => (
          <Grid key={index} item padding={2}>
            <MediaCard
              titre={card.titre}
              description={card.description}
              image={card.image}
              actions={card.actions}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  )
}
