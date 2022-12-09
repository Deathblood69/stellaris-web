import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { Template } from "./pages/Template";
import { Providers } from "./provider/Providers";
import { ErrorBoundary } from "react-error-boundary";
import { CssBaseline, Typography } from "@mui/material";

/** Permet de récupérer l'élément root dans le DOM */
const root = ReactDOM.createRoot(document.getElementById('root'))

/** Affiche les éléments dans l'élement root du DOM */
root.render(
  <ErrorBoundary FallbackComponent={PageErreur}>
    <CssBaseline />
    <Providers>
      <Template />
    </Providers>
  </ErrorBoundary>,
)

function PageErreur() {
  return <Typography>Page d'erreur</Typography>
}



