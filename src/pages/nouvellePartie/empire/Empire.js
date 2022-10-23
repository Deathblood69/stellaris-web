import React from 'react'
import {Grid, Paper} from '@mui/material'
import {useLocation} from 'react-router'
import {Nom} from './Nom'
import {Banniere} from './Banniere'
import {Planete} from './Planete'
import {Gouvernement} from './Gouvernement'
import {Espece} from './Espece'
import {Description} from './Description'

export const Empire = () => {
  // ====== PARAMETRAGE ====== //

  const location = useLocation()

  const empire = location.state

  // ====== VARIABLES ====== //

  // ====== REQUETES ====== //

  // ====== METHODES ====== //

  // ====== USE EFFECT ====== //

  // ====== AFFICHAGE ====== //

  return (
    <React.Fragment>
      <Grid xs={12} lg={10} container component={Paper}>
        <Nom nom={empire.nom} />
        <Banniere drapeau={empire.drapeau} salle={empire.salle} />
        <Planete planete={empire.planete} />
        <Gouvernement
          gouvernement={empire.gouvernement}
          ethiques={empire.ethiques}
        />
        <Espece espece={empire.espece} />
        <Description vaisseau={empire.vaisseau} origine={empire.origine} />
      </Grid>
    </React.Fragment>
  )
}
