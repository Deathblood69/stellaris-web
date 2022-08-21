import {createTheme} from '@mui/material/styles'

/**
 * Liste des thèmes disponible au sein de l'application
 * @type {{greenDarkTheme: Theme, lightTheme: Theme, darkTheme: Theme, greenLightTheme: Theme}}
 */
export const THEMES = {
  greenLightTheme: createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#ace645',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#ffffff',
      },
    },
  }),
  greenDarkTheme: createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ace645',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#6e6e6e',
      },
    },
  }),
  darkTheme: createTheme({
    palette: {
      mode: 'dark',
    },
  }),
  lightTheme: createTheme({
    palette: {
      mode: 'light',
    },
  }),
}
