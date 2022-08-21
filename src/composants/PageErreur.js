import React from "react";
import erreur from "../images/delete.svg";
import { useTranslation } from "react-i18next";

/**
 * Composant permettant d'afficher les erreurs reçues par l'application
 * @param resetErrorBoundary Fonction à executer au rechargement de l'application
 * @param icone Icone à afficher sur la page d'erreur
 * @param message Message à afficher sous l'icone
 * @param messageBouton Message sur le bouton rechargeant la page
 * @returns {JSX.Element}
 * @constructor
 */
export function PageErreur({
  resetErrorBoundary,
  icone,
  message,
  messageBouton,
}) {
  // ====== PARAMETRAGE ====== //

  /** Hook de traduction */
  const {t} = useTranslation()

  // ====== AFFICHAGE ====== //

  return (
    <div className="center-page">
      <header className="center-page">
        <img src={icone ?? erreur} className="logo" alt="logo" />
        <p>{t(message ?? 'page.echec')}</p>
        <button style={{maxWidth: '50%'}} onClick={resetErrorBoundary}>
          {t(messageBouton ?? 'page.reload')}
        </button>
      </header>
    </div>
  )
}
