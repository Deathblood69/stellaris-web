import React from 'react'
import {Alert, AlertTitle, Snackbar} from '@mui/material'

/**
 * Composant permettant d'afficher un message de notifcation
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const AlertSnackBar = ({
  isOpen = false,
  severity = 'warning',
  title = 'Attention',
  message = 'Message par défaut',
  close = () => {
    /* RAS */
  },
}) => (
  <Snackbar
    open={isOpen}
    onClose={close}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    autoHideDuration={severity === 'success' ? 3000 : null}
  >
    <Alert severity={severity} onClose={close}>
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  </Snackbar>
)
