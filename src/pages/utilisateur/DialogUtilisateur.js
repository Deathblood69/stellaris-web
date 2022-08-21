import * as React from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import {DialogActions, DialogContent, Grid, TextField, Typography,} from '@mui/material'
import {useLocation, useNavigate} from 'react-router'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {ButtonAnnulerValider} from '../../composants/Boutons/ButtonAnnulerValider'
import {useCreate, useUpdate} from '../../api/api-generique'
import {ROUTES} from '../../constantes/constantes-routes'
import {useAlert} from "../../hook/useAlert";

/**
 * Composant affichant un dialog permettant de créer un utilisateur
 * @returns {JSX.Element}
 * @constructor
 */
export const DialogUtilisateur = () => {
  // ====== PARAMETRAGE ====== //

  /** Hook permettant d'afficher des notifications */
  const addAlert = useAlert()

  /** Hook permettant de naviguer parmi les adresse de l'application */
  const navigate = useNavigate()

  /** Hook permettant de récupérer les infos sur l'adresse du navigateur */
  const location = useLocation()

  // ====== REQUETES ====== //

  /** Permet de créer un utilisateur en bdd */
  const {mutateAsync: createUser} = useCreate('individu', ['searchIndividu'])

  /** Permet de modifier un utilisateur en bdd */
  const {mutateAsync: updateUser} = useUpdate('individu', ['searchIndividu'])

  // ====== VARIABLES ====== //

  /** Schéma de l'objet Yup permettant de fixer les conditions de validation */
  const validationSchema = Yup.object({
    nom: Yup.string().max(10, 'Nom trop long').required('Champ obligatoire'),
    prenom: Yup.string()
      .max(10, 'Prénom trop long')
      .required('Champ obligatoire'),
    date_naissance: Yup.date().required('Champ obligatoire'),
  })

  /** Hook permettant d'utiliser formik afin de valider un objet */
  const formik = useFormik({
    initialValues: location?.state?.values[0] ?? {
      nom: '',
      prenom: '',
      date_naissance: '',
    },
    validationSchema: validationSchema,
    onSubmit: async data => {
      let methodToSave = createUser
      if (data.id) {
        methodToSave = updateUser
      }
      methodToSave(data)
        .then(() => {
          addAlert('success', 'Succès', "Ajout de l'utilisateur réussi")
          handleClose()
        })
        .catch(() => addAlert('error', 'Erreur', 'Erreur ma gueule'))
    },
  })

  // ====== METHODES ====== //

  /** Méthode permettant de retourner sur le tableau des utilisateurs */
  const handleClose = () => {
    navigate(ROUTES.utilisateurs)
  }

  // ====== AFFICHAGE ====== //

  return (
    <Dialog open={true}>
      <DialogTitle>
        <Typography align="center" fontSize={30}>
          Création d'utilisateur
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2} direction={'column'}>
          <Grid item xs>
            <TextField
              fullWidth
              id="nom"
              name="nom"
              label="Nom"
              value={formik.values.nom}
              onChange={formik.handleChange}
              error={formik.touched.nom && Boolean(formik.errors.nom)}
              helperText={formik.touched.nom && formik.errors.nom}
            />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              id="prenom"
              className="field"
              name="prenom"
              label="Prénom"
              value={formik.values.prenom}
              onChange={formik.handleChange}
              error={formik.touched.nom && Boolean(formik.errors.prenom)}
              helperText={formik.touched.nom && formik.errors.prenom}
            />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              id="date_naissance"
              name="date_naissance"
              label="Date de naissance"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={formik.values.date_naissance}
              onChange={formik.handleChange}
              error={
                formik.touched.date_naissance &&
                Boolean(formik.errors.date_naissance)
              }
              helperText={
                formik.touched.date_naissance && formik.errors.date_naissance
              }
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <ButtonAnnulerValider
          handleValider={formik.handleSubmit}
          libelleValider={'Valider'}
          handleAnnuler={handleClose}
          libelleAnnuler={'Annuler'}
        />
      </DialogActions>
    </Dialog>
  )
}
