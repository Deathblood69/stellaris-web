import React from 'react'
import {Alert} from '@mui/material'

/**
 * Composant permettant d'afficher un composant enfant selon une condition
 * @param condition
 * @param children
 * @param messageEchec
 * @param composantEchec
 * @param severity
 * @returns {JSX.Element}
 * @constructor
 */
export const AfficherComposant = ({
  condition = false,
  messageEchec = '',
  severity = 'warning',
  composantEchec = <React.Fragment />,
  children = <React.Fragment />,
}) =>
  condition ? (
    children
  ) : (
    <React.Fragment>
      {messageEchec && (
        <Alert align={'center'} severity={severity}>
          {messageEchec}
        </Alert>
      )}
      {composantEchec}
    </React.Fragment>
  )
