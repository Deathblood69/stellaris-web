import React from 'react'
import {Grid, Paper} from '@mui/material'
import {useLocation} from 'react-router'
import {EmpireNom} from './EmpireNom'
import {EmpireBanniere} from './EmpireBanniere'
import {EmpirePlanete} from './EmpirePlanete'
import {EmpireGouvernement} from './EmpireGouvernement'
import {EmpireEspece} from './EmpireEspece'
import {EmpireDescription} from './EmpireDescription'

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
      <Grid item xs={12} lg={10} container component={Paper}>
        <EmpireNom nom={empire.nom} />
        <EmpireBanniere drapeau={empire.drapeau} salle={empire.salle} />
        <EmpirePlanete planete={empire.planete} />
        <EmpireGouvernement
          gouvernement={empire.gouvernement}
          ethiques={empire.ethiques}
          civismes={empire.civismes}
        />
        <EmpireEspece espece={empire.espece} traits={empire.traits} />
        <EmpireDescription vaisseau={empire.vaisseau} origine={empire.origine} />
      </Grid>
    </React.Fragment>
  )
}
