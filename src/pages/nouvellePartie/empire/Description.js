import {Grid, Typography} from '@mui/material'
import React from 'react'

export const Description = ({vaisseau, origine}) => (
  <Grid
    item
    xs={12}
    md={6}
    lg={4}
    alignItems={'center'}
    direction={'column'}
    style={{
      border: '1px solid black',
    }}
  >
    <Grid item xs={12} container justifyContent={'center'}>
      <img
        src={vaisseau}
        alt={'vaisseau'}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
        }}
      />
    </Grid>
    <Grid item xs container alignItems={'center'}>
      <img src={origine.icone} alt={'Origine'} />
      <Typography>{origine.titre}</Typography>
    </Grid>
    <Grid item xs>
      <Typography>{origine.description}</Typography>
    </Grid>
  </Grid>
)
