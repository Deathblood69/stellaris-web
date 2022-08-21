import React, {createContext, useCallback, useState} from 'react'
import {AlertSnackBar} from '../composants/Notifications/AlertSnackBar'

/**
 * Provider permettant d'afficher des notifcation dans toute l'application
 * @returns {JSX.Element}
 * @constructor
 */
export const AlertProvider = props => {
  // ====== VARIABLES ====== //

  /** Notification à afficher */
  const [alert, setAlert] = useState(initialState)

  // ====== METHODES ====== //

  /** Fonction permettant de modifier les valeurs de la notification */
  const value = useCallback((severity, title, message) => {
    setAlert({
      isOpen: true,
      severity,
      title,
      message,
    })
  }, [])

  /** Fonction permettant de supprimer la notification */
  const removeAlert = useCallback(() => {
    setAlert(oldAlert => ({...oldAlert, isOpen: false}))
  }, [])

  // ====== AFFICHAGE ====== //

  return (
    <>
      <AlertContext.Provider value={value}>
        {props.children}
      </AlertContext.Provider>
      <AlertSnackBar {...alert} close={removeAlert} />
    </>
  )
}

/**
 * Etat initial de la notification
 * @type {{severity: string, isOpen: boolean, title: string, message: string}}
 */
const initialState = {
  isOpen: false,
  severity: 'success',
  title: '',
  message: '',
}

/** Contexte permettant d'appeler le provider */
export const AlertContext = createContext(initialState)
