import React from 'react'
import {useTranslation} from 'react-i18next'

/**
 * Composant permettant de traduire un message et de l'afficher
 * @param message
 * @returns {JSX.Element}
 * @constructor
 */
export const Traduction = ({message}) => {
  // ====== PARAMETRAGE ====== //

  const {t} = useTranslation()

  // ====== AFFICHAGE ====== //

  return <React.Fragment>{t(message)}</React.Fragment>
}
