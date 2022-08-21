import React from 'react'
import {styled} from '@mui/material/styles'
import {TextField} from '@mui/material'
import {useTranslation} from 'react-i18next'

/**
 * Composant affichant une barre de recherche
 * @param recherche
 * @param setRecherche
 * @returns {JSX.Element}
 * @constructor
 */
export const BarreRecherche = ({setRecherche}) => {
  // ====== PARAMETRAGE ====== //

  /** Hook permettant la traduction des éléments */
  const {t} = useTranslation()

  // ====== AFFICHAGE ====== //

  return (
    <StyledInputBase
      variant={'outlined'}
      onChange={event => setRecherche(event.target.value)}
      placeholder={t('appbar.search')}
    />
  )
}

/**
 * Composant stylisée d'un {@link TextField}
 * @type {StyledComponent<PropsOf<(props: TextFieldProps) => JSX.Element> & MUIStyledCommonProps<Theme>, {}, {}>}
 */
const StyledInputBase = styled(TextField)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))
