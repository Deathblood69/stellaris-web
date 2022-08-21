import * as React from 'react'
import {useContext} from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {Outlet, useNavigate} from 'react-router'
import {Button, Grid} from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import {ThemeContext} from '../provider/ThemeProvider'
import {ROUTES} from '../constantes/constantes-routes'
import {Traduction} from '../composants/Traduction/Traduction'
import {useTraduction} from "../hook/useTraduction";

/**
 * Composant affichant la barre principale de l'application
 * @param handleDeconnexion
 * @returns {JSX.Element}
 * @constructor
 */
export default function BarreMenu({handleDeconnexion}) {
  const navigate = useNavigate()

  const {isFrench, toggleLanguage} = useTraduction()

  const {isDarkTheme, toggleTheme} = useContext(ThemeContext)

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
              <Titre navigate={navigate} />
            </Grid>
            <Grid item>
              <Langue isFrench={isFrench} toggleLanguage={toggleLanguage} />
              <Theme isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
              <Deconnexion handleDeconnexion={handleDeconnexion} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div id={'body'}>
        <Outlet />
      </div>
    </React.Fragment>
  )
}

/**
 * Composant affichant le titre de l'application
 * @param navigate
 * @returns {JSX.Element}
 * @constructor
 */
const Titre = ({navigate}) => (
  <Button
    size={'large'}
    edge={'start'}
    color={'inherit'}
    onClick={() => navigate(ROUTES.root)}
  >
    <Typography variant={'h6'} noWrap>
      <Traduction message={'appbar.titre'} />
    </Typography>
  </Button>
)

/**
 * Composant affichant le bouton du choix de langue
 * @param toggleLanguage
 * @param isFrench
 * @returns {JSX.Element}
 * @constructor
 */
const Langue = ({toggleLanguage, isFrench}) => (
  <Tooltip title={'Modifier la langue avec i18n'}>
    <Button
      variant={'contained'}
      onClick={toggleLanguage}
      style={{marginRight: 10}}
    >
      {isFrench ? 'FR' : 'EN'}
    </Button>
  </Tooltip>
)

/**
 * Composant affichant le bouton du choix du thème
 * @param toggleTheme
 * @param isDarkTheme
 * @returns {JSX.Element}
 * @constructor
 */
const Theme = ({toggleTheme, isDarkTheme}) => (
  <Tooltip title={'Modifier le thème avec le local Storage'}>
    <Button
      variant={'contained'}
      onClick={toggleTheme}
      style={{marginRight: 10}}
    >
      <Traduction message={`appbar.${isDarkTheme ? 'sombre' : 'clair'}`} />
    </Button>
  </Tooltip>
)

/**
 * Composant affichant le bouton de déconnexion
 * @param handleDeconnexion
 * @returns {JSX.Element}
 * @constructor
 */
const Deconnexion = ({handleDeconnexion}) => (
  <Tooltip title="Déconnexion">
    <Button variant={'contained'} onClick={handleDeconnexion}>
      <Traduction message={'appbar.deconnexion'} />
    </Button>
  </Tooltip>
)
