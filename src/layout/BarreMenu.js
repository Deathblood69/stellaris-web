import * as React from 'react'
import {Outlet} from 'react-router'

/**
 * Composant affichant la barre principale de l'application
 * @returns {JSX.Element}
 * @constructor
 */
export default function BarreMenu() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}
