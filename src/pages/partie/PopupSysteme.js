import React, {useContext, useEffect, useState} from 'react'
import CoordonneesContext from "../../composants/Carte/Overlays/CoordonneesContext";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export const PopupSysteme = ({systemes}) => {
  // ====== PARAMETRAGE ====== //

  const {coordonnees} = useContext(CoordonneesContext);

  const [systeme, setSysteme] = useState()

  useEffect(() => {
    if (coordonnees) {
      const closest = systemes.reduce((a, b) => {
        let res = b
        if (distance(a.coordonnees, coordonnees) < distance(b.coordonnees, coordonnees)) {
          res = a
        }
        return res
      })
      setSysteme(closest)
    }
  }, [coordonnees, systeme?.coordonnees, systemes])

  // ====== AFFICHAGE ====== //

  return systeme && <React.Fragment>
    <p>{systeme.nom}</p>
  </React.Fragment>

}

function distance(p, point) {
  return Math.sqrt(Math.pow(point[0] - p[0], 2) + Math.pow(point[1] - p[1], 2))
}
