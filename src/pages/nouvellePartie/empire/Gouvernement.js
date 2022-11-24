import {Grid, Typography} from '@mui/material'
import {AccountCircle} from '@mui/icons-material'
import React from 'react'

export const Gouvernement = ({gouvernement, ethiques = []}) => (
  <Grid
    item
    xs={12}
    md={6}
    lg={4}
    container
    alignItems={'center'}
    direction={'column'}
    style={{
      border: '1px solid black',
    }}
  >
    <Grid item xs>
      <Typography>Système défensif rebelle</Typography>
    </Grid>
    <Grid item xs>
      <img src={gouvernement.image} alt={'Gouvernement'} />
    </Grid>
    <Grid item xs>
      <Typography>{gouvernement.nom}</Typography>
    </Grid>
    <Grid item xs container justifyContent={'center'}>
      <AccountCircle />
      <Typography>Civisme 1</Typography>
    </Grid>
    <Grid item xs container justifyContent={'center'}>
      <AccountCircle />
      <Typography>Civisme 2</Typography>
    </Grid>
    {ethiques.map(ethique => (
      <Grid item xs container justifyContent={'center'} alignItems={'center'}>
        <img
          src={ethique.image}
          style={{height: '30px', width: '30px'}}
          alt={"icone de l'ethique"}
        />
        <Typography>{ethique.nom}</Typography>
      </Grid>
    ))}
  </Grid>
)
