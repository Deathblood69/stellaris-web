import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import {Template} from './pages/Template'
import {Providers} from './provider/Providers'

import {CustomThemeProvider} from './provider/ThemeProvider'
import {ErrorBoundary} from 'react-error-boundary'
import {PageErreur} from './composants/Messages/PageErreur'
import {CssBaseline} from '@mui/material'

/** Permet de récupérer l'élément root dans le DOM */
const root = ReactDOM.createRoot(document.getElementById('root'))

/** Affiche les élément dans l'élement root du DOM */
root.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={
        <PageErreur
          message={'page.erreur_message'}
          description={'page.erreur_description'}
        />
      }
    >
      <CustomThemeProvider>
        <CssBaseline />
        <Providers>
          <Template />
        </Providers>
      </CustomThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
