import {useContext, useEffect} from "react";
import CarteContext from "../CarteContext";
import OLTileLayer from "ol/layer/Tile";

/**
 * Composant créant un layer de tuiles pour la carte OpenLayer
 * @returns {null}
 * @constructor
 */
const TuileLayer = ({source, zIndex = 0}) => {

  // ====== PARAMETRAGE ====== //

  const {map} = useContext(CarteContext);

  // ====== USE EFFECT ====== //

  useEffect(() => {
    if (!map) return;
    let tileLayer = new OLTileLayer({source, zIndex,});
    map.addLayer(tileLayer);
    tileLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map, source, zIndex]);

  // ====== AFFICHAGE ====== //

  return null;

};
export default TuileLayer;