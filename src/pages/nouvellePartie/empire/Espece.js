import {Grid, Typography} from '@mui/material'
import {AccountCircle} from '@mui/icons-material'
import React from 'react'

export const Espece = ({espece}) => (
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
    <Grid
      item
      xs={'auto'}
      style={{
        border: '1px solid black',
      }}
    >
      <img
        src={espece}
        alt={'espece'}
        style={{
          maxWidth: '50%',
          maxHeight: '100%',
        }}
      />
    </Grid>
    <Grid item xs>
      <Typography align={'center'}>Humain</Typography>
    </Grid>
    <Grid item xs container justifyContent={'center'}>
      <AccountCircle />
      <Typography>Trait 1</Typography>
    </Grid>
    <Grid item xs container justifyContent={'center'}>
      <AccountCircle />
      <Typography>Trait 2</Typography>
    </Grid>
    <Grid item xs container justifyContent={'center'}>
      <AccountCircle />
      <Typography>Trait 3</Typography>
    </Grid>
  </Grid>
)
