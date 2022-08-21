import Toolbar from '@mui/material/Toolbar'
import {alpha} from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import {Button, Grid} from '@mui/material'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {BarreRecherche} from '../Recherche/BarreRecherche'

/**
 * Composant permettant d'afficher un menu d'outils pour un tableau de données
 * @param titre
 * @param selected
 * @param setRecherche
 * @param handleModifier
 * @param handleNouveau
 * @param handleFilter
 * @param handleDelete
 * @returns {JSX.Element}
 * @constructor
 */
export const EnhancedTableToolbar = ({
  titre = 'Titre par défaut',
  selected,
  setRecherche,
  handleModifier,
  handleNouveau,
  handleFilter,
  handleDelete,
}) => {
  const numSelected = selected.length
  return (
    <Toolbar
      sx={{
        pl: {sm: 2},
        pr: {xs: 1, sm: 1},
        ...(numSelected > 0 && {
          bgcolor: theme =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{flex: '1 1 100%'}}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{flex: '1 1 100%'}} variant="h6" component="div">
          {titre}
        </Typography>
      )}
      <Grid container spacing={2} justifyContent={'flex-end'}>
        <Grid item>
          <BarreRecherche setRecherche={setRecherche} />
        </Grid>
        <Grid item>
          {' '}
          <Actions
            selected={selected}
            numSelected={numSelected}
            handleFilter={handleFilter}
            handleModifier={handleModifier}
            handleNouveau={handleNouveau}
            handleDelete={handleDelete}
          />
        </Grid>
      </Grid>
    </Toolbar>
  )
}

const Actions = ({
  selected,
  numSelected,
  handleModifier,
  handleNouveau,
  handleFilter,
  handleDelete,
}) => {
  const {t} = useTranslation()
  let actions
  if (numSelected === 1) {
    actions = (
      <React.Fragment>
        <Tooltip title="Modifier">
          <Button
            variant={'outlined'}
            onClick={handleModifier}
            value={selected}
          >
            {t('table.modifier')}
          </Button>
        </Tooltip>
        <Tooltip title="Delete">
          <Button variant={'outlined'} onClick={handleDelete} value={selected}>
            {t('table.supprimer')}
          </Button>
        </Tooltip>
      </React.Fragment>
    )
  } else if (numSelected > 1) {
    actions = (
      <Tooltip title="Delete">
        <Button variant={'outlined'} onClick={handleDelete} value={selected}>
          {t('table.supprimer')}
        </Button>
      </Tooltip>
    )
  } else {
    actions = (
      <React.Fragment>
        <Tooltip title="Nouveau" onClick={handleNouveau}>
          <Button variant={'contained'}>{t('table.nouveau')}</Button>
        </Tooltip>
      </React.Fragment>
    )
  }
  return actions
}
