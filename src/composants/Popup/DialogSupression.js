import React from 'react'
import {DialogActions, DialogContent} from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import {useLocation, useNavigate} from 'react-router'
import {ButtonAnnulerValider} from '../Boutons/ButtonAnnulerValider'
import {useDelete} from '../../api/api-generique'

/**
 * Composant permettant d'afficher un dialog de suppresion qui supprime une entité
 * @returns {JSX.Element}
 * @constructor
 */
export const DialogSupression = () => {
  // ====== PARAMETRAGE ====== //

  const location = useLocation()

  const navigate = useNavigate()

  // ====== VARIABLES ====== //

  const {entity, values} = location.state

  // ====== REQUETES ====== //

  const {mutateAsync: deleteUser} = useDelete(entity, [entity])

  // ====== METHODES ====== //

  const handleAnnuler = () => {
    navigate(-1)
  }

  const handleValider = () => {
    values.forEach(v => deleteUser(v))
    navigate(-1)
  }

  // ====== AFFICHAGE ====== //

  return (
    <Dialog open={true}>
      <DialogTitle>{'Suppression'}</DialogTitle>
      <DialogContent>
        {`${values.length || 0} élement(s) sera supprimé : `}
        <ul>
          {[
            ...values?.map((e, index) => {
              let formatString = ''
              Object.keys(e)
                .filter(key => key !== 'id')
                .forEach(key => (formatString += ` ${e[key]}`))
              return <li key={index}>{formatString}</li>
            }),
          ]}
        </ul>
      </DialogContent>
      <DialogActions>
        <ButtonAnnulerValider
          handleValider={handleValider}
          libelleValider={'Valider'}
          handleAnnuler={handleAnnuler}
          libelleAnnuler={'Annuler'}
        />
      </DialogActions>
    </Dialog>
  )
}
