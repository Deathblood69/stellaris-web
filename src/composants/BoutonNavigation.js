import {Button} from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router'

export const BoutonNavigation = ({to, children}) => {
  // ====== PARAMETRAGE ====== //

  const navigate = useNavigate()

  // ====== METHODES ====== //

  const handleNavigate = event => {
    navigate(event.target.value)
  }

  // ====== AFFICHAGE ====== //

  return (
    <Button color={'inherit'} value={to} onClick={handleNavigate}>
      {children}
    </Button>
  )
}
