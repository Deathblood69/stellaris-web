import React, {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import '../locales/i18n'
import { CircularProgress, createTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";

/**
 * Composant permettant de fournir des contextes à l'application
 * @returns {JSX.Element}
 * @constructor
 */
export const Providers = ({children}) => {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return <Suspense fallback={<CircularProgress />}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </Suspense>;
}

const queryClient = new QueryClient()
