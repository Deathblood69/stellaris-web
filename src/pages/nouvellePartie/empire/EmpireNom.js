import {Grid, Typography} from '@mui/material'
import React from 'react'

export const EmpireNom = ({nom}) => (
  <Grid item xs={12}>
    <Typography align={'center'} variant={'h5'}>
      {nom}
    </Typography>
  </Grid>
)
