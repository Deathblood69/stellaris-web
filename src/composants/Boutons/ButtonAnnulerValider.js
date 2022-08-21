import React from 'react'
import {Button} from '@mui/material'

/**
 * Composant permettant d'afficher des boutons d'annulation et de validation
 * @param libelleValider
 * @param handleValider
 * @param libelleAnnuler
 * @param handleAnnuler
 * @returns {JSX.Element}
 * @constructor
 */
export const ButtonAnnulerValider = ({
  libelleValider = 'Valider',
  libelleAnnuler = 'Annuler',
  handleValider = () => {
    //RAS
  },
  handleAnnuler = () => {
    //RAS
  },
}) => (
  <React.Fragment>
    <Button
      fullWidth
      color="primary"
      variant="contained"
      onClick={handleValider}
    >
      {libelleValider}
    </Button>
    <Button
      fullWidth
      color="primary"
      variant="outlined"
      onClick={handleAnnuler}
    >
      {libelleAnnuler}
    </Button>
  </React.Fragment>
)
