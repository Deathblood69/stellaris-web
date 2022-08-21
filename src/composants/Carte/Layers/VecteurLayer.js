import {useContext, useEffect} from "react";
import CarteContext from "../CarteContext";
import OLVectorLayer from "ol/layer/Vector";

/**
 * Composant créant un layer de données pour la carte OpenLayer
 * @returns {null}
 * @constructor
 */
const VecteurLayer = ({source, style, zIndex = 0}) => {

  // ====== PARAMETRAGE ====== //

  const {map} = useContext(CarteContext);

  // ====== USE EFFECT ====== //

  useEffect(() => {
    if (!map) return;
    let vectorLayer = new OLVectorLayer({source, style});
    map.addLayer(vectorLayer);
    vectorLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
      }
    };
  }, [map, source, style, zIndex]);

  // ====== AFFICHAGE ====== //

  return null;

};
export default VecteurLayer;