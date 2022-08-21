import React, {createContext} from 'react'
import {useStateSessionStorage} from "../hook/useStateSessionStorage";

/**
 * Provider permettant d'afficher de connaitre l'utilisateur connecté
 * @returns {JSX.Element}
 * @constructor
 */
export const UserProvider = ({children}) => {
  // ====== VARIABLES ====== //

  /** Utilisateur connecté */
  const [userLS, setUserLS] = useStateSessionStorage('user')

  // ====== AFFICHAGE ====== //

  return (
    <UserContext.Provider value={{user: userLS, setUser: setUserLS}}>
      {children}
    </UserContext.Provider>
  )
}

export const UserContext = createContext()
