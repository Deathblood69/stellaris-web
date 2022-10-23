import React, {useMemo} from 'react'
import {Box, Divider, Drawer, Grid} from '@mui/material'
import {Add, Shuffle} from '@mui/icons-material'
import {Outlet, useNavigate} from 'react-router'
import {normaliseString} from '../../fonctions/StringToAdressLink'
import {ListItems} from '../../composants/Listes/ListItems'
import {BoutonNavigation} from '../../composants/Boutons/BoutonNavigation'
import {CONSTANTES_ROUTES} from '../../constantes/routes/constantes-routes'
import {EMPIRES} from '../../data/empires/empires'

export const NouvellePartie = () => {
  // ====== PARAMETRAGE ====== //

  const navigate = useNavigate()

  // ====== VARIABLES ====== //

  const drawerWidth = 240

  const actions = [
    {
      icone: <Shuffle />,
      texte: 'Aléatoire',
    },
    {
      icone: <Add />,
      texte: 'Créer Nouveau',
    },
  ]

  const empires = useMemo(() => {
    return Object.keys(EMPIRES).map(key => ({
      ...EMPIRES[key],
    }))
  }, [])

  // ====== REQUETES ====== //

  // ====== METHODES ====== //

  const handleNavigate = value => {
    const path = normaliseString(value)
    const selectedEmpire = empires.find(empire => empire.nom === value)
    navigate(path, {
      state: selectedEmpire,
    })
  }

  // ====== USE EFFECT ====== //

  // ====== AFFICHAGE ====== //

  return (
    <React.Fragment>
      <Box sx={{display: 'flex'}}>
        <Grid sx={{width: drawerWidth}}>
          <Drawer
            variant="permanent"
            anchor="left"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
          >
            {"Sélectionner l'empire"}
            <Divider />
            <ListItems
              array={actions}
              keyIcone={'icone'}
              keyTexte={'texte'}
              onClick={handleNavigate}
            />
            <Divider />
            <ListItems
              array={empires}
              keyIcone={'drapeau'}
              keyTexte={'nom'}
              isImageIcon={true}
              onClick={handleNavigate}
            />
            <Divider />
            <BoutonNavigation to={CONSTANTES_ROUTES.root}>
              {'Retour'}
            </BoutonNavigation>
          </Drawer>
        </Grid>
        <Grid
          container
          justifyContent={'center'}
          alignItems={'center'}
          style={{height: '100vh'}}
        >
          <Outlet />
        </Grid>
      </Box>
    </React.Fragment>
  )
}
