import React from 'react'
import './css/chargement.css'

/**
 * Composant permettant de simuler un chargement en affichant une image pivotant à 360°
 * @param logo Image à faire pivoter
 * @returns {JSX.Element}
 * @constructor
 */
export const Chargement = ({logo}) => (
  <div className={'container-logo'}>
    <img src={logo} className="logo animation-rotate" alt="logo" />
  </div>
)
