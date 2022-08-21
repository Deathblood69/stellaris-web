import React from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {Button, Grid, TextField} from '@mui/material'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'

/**
 * Composant affichant une page de connexion
 * @param titre
 * @param libelleConnexion
 * @param tooltipConnexion
 * @param handleConnexion
 * @returns {JSX.Element}
 * @constructor
 */
export const Login = ({
  titre = 'Connexion',
  libelleConnexion = '',
  tooltipConnexion = '',
  handleConnexion,
}) => {
  // ====== PARAMETRAGE ====== //

  /** Schéma de l'objet Yup permettant de fixer les conditions de validation */
  const validationSchema = Yup.object({
    prenom: Yup.string().required('Le prénom doit être renseigné'),
  })

  /** Hook permettant d'utiliser formik afin de valider un objet */
  const formik = useFormik({
    initialValues: {
      prenom: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      handleConnexion(values)
    },
  })

  // ====== AFFICHAGE ====== //

  return (
    <Grid item xs={4} container direction={'column'}>
      <Grid item xs padding={2}>
        <Typography variant={'h4'} align={'center'}>
          {titre}
        </Typography>
      </Grid>
      <Grid item xs padding={2}>
        <TextField
          fullWidth
          id="prenom"
          className="field"
          name="prenom"
          label="Prénom"
          value={formik.values.prenom}
          onChange={formik.handleChange}
          error={formik.touched.prenom && Boolean(formik.errors.prenom)}
          helperText={formik.touched.prenom && formik.errors.prenom}
        />
      </Grid>
      <Grid item xs padding={2}>
        <Tooltip title={tooltipConnexion}>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={formik.handleSubmit}
          >
            {libelleConnexion}
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  )
}
