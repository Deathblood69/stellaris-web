import React, {useMemo} from 'react';
import Carte from "../../composants/Carte/Carte";
import Layers from "../../composants/Carte/Layers/Layers";
import Controls from "../../composants/Carte/Controls/Controls";
import FullScreenControl from "../../composants/Carte/Controls/FullScreenControl";
import PointLayer from "../../composants/Carte/Layers/PointLayer";
import StaticLayer from "../../composants/Carte/Layers/StaticLayer";
import {getCenter} from "ol/extent";
import galaxie from '../../images/galaxie.png'
import Overlays from "../../composants/Carte/Overlays/Overlays";
import {PopupOverlay} from "../../composants/Carte/Overlays/PopupOverlay";
import {PopupSysteme} from "./PopupSysteme";


function CarteGalaxie() {

  const extent = [0, 0, 1600, 900];

  const center = getCenter(extent)

  const zoom = 1;

  const systemes = [
    {
      nom: 'Sol',
      coordonnees: [730, 326],
    },
    {
      nom: 'Colonia',
      coordonnees: [613, 497],
    },
  ]

  const points = useMemo(() => systemes.map(s => s.coordonnees), [systemes]);

  return (
    <React.Fragment>
      <Carte center={center} zoom={zoom}>
        <Layers>
          <StaticLayer image={galaxie} center={center} extent={extent} zIndex={0}/>
          {points.map((point, index) => (
            <React.Fragment key={index}>
              <PointLayer coordoonees={point} zIndex={1}/>
            </React.Fragment>
          ))}
        </Layers>
        <Overlays>
          <PopupOverlay>
            <PopupSysteme systemes={systemes}/>
          </PopupOverlay>
        </Overlays>
        <Controls> <FullScreenControl/> </Controls>
      </Carte>
    </React.Fragment>
  )
}

export default CarteGalaxie;
