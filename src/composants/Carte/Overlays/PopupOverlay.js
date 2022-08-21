import React, {useContext, useEffect, useRef, useState} from 'react'
import CarteContext from "../CarteContext";
import {Overlay} from "ol";
import CoordonneesContext from "./CoordonneesContext";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export const PopupOverlay = ({children}) => {

  // ====== PARAMETRAGE ====== //

  const {map} = useContext(CarteContext);

  // ====== VARIABLES ====== //

  const popupRef = useRef();

  const [coordonnees, setCordonnees] = useState()

  /**
   * Create an overlay to anchor the popup to the map.
   */
  const overlay = new Overlay({
    element: popupRef.current,
    autoPan: {
      animation: {
        duration: 250,
      },
    },
  });

  // ====== USE EFFECT ====== //

  useEffect(() => {
    if (!map) return;
    map.addOverlay(overlay)
    map.on('pointermove', function (event) {
      const coordinate = event.coordinate
      if (map.hasFeatureAtPixel(event.pixel)) {
        map.getViewport().style.cursor = 'pointer';
        setCordonnees(coordinate)
      } else {
        map.getViewport().style.cursor = 'inherit';
        setCordonnees(undefined)
      }
    });
  }, [map, overlay])

  useEffect(() => {
    if (coordonnees) {
      overlay.setElement(popupRef.current)
      overlay.setPosition(coordonnees)
    }
  }, [popupRef, coordonnees])

  // ====== AFFICHAGE ====== //

  return (
    <CoordonneesContext.Provider value={{coordonnees}}>
      <div ref={popupRef} id="popup" className="ol-popup">
        <a href="" id="popup-closer" className="ol-popup-closer"></a>
        {children}
      </div>
    </CoordonneesContext.Provider>
  )
}

