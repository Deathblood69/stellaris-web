import {Grid, Typography} from '@mui/material'
import React from 'react'

export const Planete = ({planete}) => (
  <Grid
    item
    xs={12}
    md={6}
    lg={4}
    container
    direction={'column'}
    alignItems={'center'}
    justifyContent={'center'}
    style={{
      border: '1px solid black',
    }}
  >
    <Typography>Planete 1</Typography>
    <img
      src={planete.image}
      alt={'planete'}
      style={{
        maxWidth: '60%',
        maxHeight: '100%',
      }}
    />
  </Grid>
)
