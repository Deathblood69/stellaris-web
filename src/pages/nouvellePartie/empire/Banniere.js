import {Grid} from '@mui/material'
import React from 'react'

export const Banniere = ({salle, drapeau}) => (
  <Grid
    item
    xs={12}
    lg={8}
    container
    alignItems={'center'}
    style={{
      border: '1px solid black',
      backgroundImage: `url(${salle.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}
  >
    <img src={drapeau} alt={'drapeau'} style={{height: '100px'}} />
  </Grid>
)
