import {useContext, useEffect} from "react";
import CarteContext from "../CarteContext";
import {Point} from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {Feature} from "ol";

/**
 * Composant créant un layer de données pour la carte OpenLayer
 * @returns {null}
 * @constructor
 */
const PointLayer = ({coordoonees = [0, 0], zIndex = 0}) => {

  // ====== PARAMETRAGE ====== //

  const {map} = useContext(CarteContext);

  // ====== USE EFFECT ====== //

  useEffect(() => {
    if (!map) return;

    const point = new Point(coordoonees);

    let vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [new Feature(point)],
      }),
      style: {
        'circle-radius': 9,
        'circle-fill-color': 'red',
      },
    })
    map.addLayer(vectorLayer);

    vectorLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
      }
    };
  }, [coordoonees, map, zIndex]);

  // ====== AFFICHAGE ====== //

  return null;

};
export default PointLayer;