import React, {useEffect, useRef, useState} from "react"
import "./Carte.css";
import CarteContext from "./CarteContext";
import * as ol from "ol";
import {View} from "ol";

/**
 * Composant affichant la carte OpenLayer
 * @param children
 * @param zoom
 * @param center
 * @returns {JSX.Element}
 * @constructor
 */
const Carte = ({children, zoom, center}) => {

  // ====== PARAMETRAGE ====== //

  const mapRef = useRef();

  // ====== VARIABLES ====== //

  const [map, setMap] = useState(null);

  // ====== USE EFFECT ====== //

  useEffect(() => {

    let mapObject = new ol.Map({
      view: new View({zoom, center}),
      layers: [],
      controls: [],
      overlays: [],
    });

    mapObject.setTarget(mapRef.current);

    setMap(mapObject);

    return () => mapObject.setTarget(undefined);

  }, [center, zoom]);

  useEffect(() => {
    if (!map) return;
    map.getView().setZoom(zoom);
  }, [map, zoom]);

  useEffect(() => {
    if (!map) return;
    map.getView().setCenter(center)
  }, [center, map])

  useEffect(() => {
    if (!map) return;
    map.getView().setCenter(center)
  }, [center, map])

  // ====== AFFICHAGE ====== //

  return (
    <CarteContext.Provider value={{map}}>
      <React.Fragment>
        <div id={'map'} ref={mapRef} className="ol-map">
          {children}
        </div>
      </React.Fragment>
    </CarteContext.Provider>
  )
}

export default Carte;