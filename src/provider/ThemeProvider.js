import React, {createContext, useEffect, useState} from 'react'
import {THEMES} from '../constantes/constantes-themes'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {useStateLocalStorage} from "../hook/useStateLocalStorage";

/**
 * Provider permettant de choisir le thème dans toute l'application
 * @returns {JSX.Element}
 * @constructor
 */
export const CustomThemeProvider = ({children}) => {
  // ====== VARIABLES ====== //

  /** Permet de savoir si le thème afficher est le thème sombre */
  const [isDarkTheme, setIsDarkTheme] = useStateLocalStorage('darkTheme', true)

  /** Thème à afficher */
  const [theme, setTheme] = useState(isDarkTheme ? themeSombre : themeClair)

  // ====== METHODES ====== //

  /** Méthode permettant de changer le thème afficher */
  const toggleTheme = () => {
    setTheme(isDarkTheme ? themeClair : themeSombre)
  }

  // ====== USE EFFECT ====== //

  useEffect(() => {
    setIsDarkTheme(theme === themeSombre)
  }, [setIsDarkTheme, theme])

  // ====== AFFICHAGE ====== //

  return (
    <ThemeContext.Provider value={{theme, isDarkTheme, toggleTheme}}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

/** Thème sombre de l'application */
const themeSombre = THEMES.greenDarkTheme

/** Thème clair de l'application */
const themeClair = THEMES.greenLightTheme

/** Contexte permettant d'appeler le provider */
export const ThemeContext = createContext(themeSombre)
