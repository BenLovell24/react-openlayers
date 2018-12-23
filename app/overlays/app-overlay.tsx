import * as React from "react";
import * as ReactDOM from "react-dom";

import olProj from 'ol/proj';
import StamenSource from 'ol/source/stamen';

import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

//AppOverlay to avoid conflict to Overlay
export class AppOverlay extends React.Component<any,any> {
  overlayComp: any;
  popupComp: any;

  showPopup = (evt) => {
    this.overlayComp.overlay.setPosition(evt.coordinate);
    var lonlat = olProj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');

    this.popupComp.setContents(
      `<p>You clicked here:</p><code> ${lonlat[0]}, ${lonlat[1]}</code>`
    );
    this.popupComp.show();
  }

  render(){
    return (
      <div>
        <Map onClick={this.showPopup}>
          <Layers>
            <layer.Tile source={new StamenSource({ layer: 'watercolor' })}/>
          </Layers>
          <Controls>
            <control.FullScreen></control.FullScreen>
          </Controls>
          <Overlays>
            <Overlay ref={comp => this.overlayComp = comp}>
              <custom.Popup ref={comp => this.popupComp = comp}>
              </custom.Popup>
            </Overlay>
          </Overlays>
        </Map>
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/overlays/app-overlay.tsx">Source Code</a>
        <pre>{`
        <Map onClick={this.showPopup}>
          <Layers>
            <layer.Tile source={new StamenSource({ layer: 'watercolor' })}/>
          </Layers>
          <Overlays>
            <Overlay ref={comp => this.overlayComp = comp}>
              <custom.Popup ref={comp => this.popupComp = comp}>
              </custom.Popup>
            </Overlay>
          </Overlays>
        </Map>
       `}</pre>
      </div>
    );
  }

}