import React, {useContext, useEffect} from 'react'
import CarteContext from "../CarteContext";
import {Projection} from "ol/proj";
import {View} from "ol";
import Static from "ol/source/ImageStatic";
import ImageLayer from "ol/layer/Image";
import {getCenter} from "ol/extent";

/**
 * Composant
 * @returns {JSX.Element}
 * @constructor
 */
export const StaticLayer = ({image = '', extent, zIndex = 0}) => {

  // ====== PARAMETRAGE ====== //

  const {map} = useContext(CarteContext);

  // ====== USE EFFECT ====== //

  useEffect(() => {
    if (!map) return;

    const viewExtent = handleMarginExtent(extent, 0)

    const projection = new Projection({
      code: 'xkcd-image',
      units: 'pixels',
      extent: extent,
    });

    let vectorLayer = new ImageLayer({
      source: new Static({
        attributions: '© <a href="https://xkcd.com/license.html">xkcd</a>',
        url: image,
        projection: projection,
        imageExtent: extent,
      }),
    })
    const view = new View({
      extent: viewExtent,
      projection: projection,
      center: getCenter(extent),
      zoom: 2,
      maxZoom: 8,
    })
    map.setView(view)
    map.addLayer(vectorLayer);
    vectorLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(vectorLayer);
      }
    };

  }, [extent, image, map, zIndex]);

  // ====== AFFICHAGE ====== //

  return null;

};

const handleMarginExtent = (extent, margin) => {
  return extent.map((e, index) => {
    let res
    switch (index) {
      case 0:
        res = e - margin
        break
      case 1:
        res = e - margin
        break
      case 2:
        res = e + margin
        break
      case 3:
        res = e + margin
        break
      default:
        res = e
    }

    return res
  })
}

export default StaticLayer;