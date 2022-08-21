import React, {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Chargement} from '../composants/Chargement/Chargement'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import logo from '../images/logo.svg'
import {UserProvider} from './UserProvider'
import '../locales/i18n'
import {AlertProvider} from "./AlertProvider";

/**
 * Composant permettant de fournir des contextes à l'application
 * @returns {JSX.Element}
 * @constructor
 */
export const Providers = ({children}) => (
  <Suspense fallback={<Chargement logo={logo} />}>
    <QueryClientProvider client={queryClient}>
      <AlertProvider>
        <UserProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </UserProvider>
      </AlertProvider>
    </QueryClientProvider>
  </Suspense>
)

const queryClient = new QueryClient()
