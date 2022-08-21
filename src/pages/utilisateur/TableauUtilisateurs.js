import {Outlet, useNavigate} from 'react-router'
import React, {useState} from 'react'
import EnhancedTable from '../../composants/Tableau/EnhancedTable'
import {useSearch} from '../../api/api-generique'
import {ROUTES} from '../../constantes/constantes-routes'
import {useTranslation} from 'react-i18next'

function TableauUtilisateurs() {
  // ====== PARAMETRAGE ====== //

  /** Traduction */
  const {t} = useTranslation()

  /** Hook permettant de naviguer parmi les adresse de l'application */
  const navigate = useNavigate()

  /** Contient les élements permettant d'effectuer la recherche */
  const [recherche, setRecherche] = useState()

  // ====== VARIABLES ====== //

  /** Liste des colonnes du tableau */
  const headCells = [
    {
      id: 'prenom',
      label: 'utilisateur.prenom',
      align: 'left',
    },
    {
      id: 'nom',
      label: 'utilisateur.nom',
      align: 'left',
    },
    {
      id: 'date_naissance',
      label: 'utilisateur.date_naissance',
    },
  ]

  /** Liste du nombre d'éléments pouvant être affichés en même temps */
  const pagination = [5, 10, 25]

  // ====== REQUETES ====== //

  /** Permet d'effectuer une requête en bdd pour récupérer les utilisateurs selon la recherche  */
  const {data} = useSearch('individu', recherche, ['searchIndividu', recherche])

  // ====== METHODES ====== //

  /** Méthode qui permet de se rendre à la page de création d'un utilisateur */
  const handleNouveau = () => {
    navigate(`${ROUTES.utilisateurs}/${ROUTES.nouveau}`)
  }

  /** Méthode qui permet de se rendre à la page de modification d'un utilisateur */
  const handleModifier = event => {
    const selected = event.target.value
    const toModify = data.filter(r => parseInt(selected, 10) === r.id)
    navigate(`${ROUTES.utilisateurs}/${selected}`, {
      state: {entity: 'individu', values: toModify},
    })
  }

  /** Méthode qui permet de se rendre à la page de suppression d'un utilisateur */
  const handleDelete = event => {
    const selected = event.target.value.split(',')
    const toDelete = data.filter(r =>
      selected.some(s => r.id === parseInt(s, 10)),
    )
    navigate(`${ROUTES.utilisateurs}/${ROUTES.supprimer}`, {
      state: {entity: 'individu', values: toDelete},
    })
  }

  // ====== AFFICHAGE ====== //

  return (
    <React.Fragment>
      <EnhancedTable
        titre={t('table.utilisateurs')}
        headCells={headCells}
        rows={data}
        pagination={pagination}
        setRecherche={setRecherche}
        handleModifier={handleModifier}
        handleNouveau={handleNouveau}
        handleDelete={handleDelete}
      />
      <Outlet />
    </React.Fragment>
  )
}

export default TableauUtilisateurs
