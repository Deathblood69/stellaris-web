import React, {useContext, useEffect} from "react";
import {FullScreen} from "ol/control";
import CarteContext from "../CarteContext";

/**
 * Composant contenant les contrôles pour un affichage en plein écran
 * @returns {null}
 * @constructor
 */
const FullScreenControl = () => {

  // ====== PARAMETRAGE ====== //

  const {map} = useContext(CarteContext);

  // ====== USE EFFECT ====== //

  useEffect(() => {
    if (!map) return;
    let fullScreenControl = new FullScreen({});
    map.controls.push(fullScreenControl);
    return () => map.controls.remove(fullScreenControl);
  }, [map]);

  // ====== AFFICHAGE ====== //

  return null;

};

export default FullScreenControl;