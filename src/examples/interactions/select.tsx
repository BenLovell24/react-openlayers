import * as React from "react";

import { Typography, Divider } from "@material-ui/core";

import Feature from 'ol/feature';
import VectorSource from 'ol/source/vector';
import Point from 'ol/geom/point';

import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

import Highlighter from "../Highlighter";

var iconFeature = new Feature(new Point([0, 0]));
var source = new VectorSource({features: [iconFeature]});
var marker = new custom.style.MarkerStyle(
  'https://openlayers.org/en/v4.6.5/examples/data/icon.png'
);
marker.style.getImage().setOpacity(0.5);

let selectedMarkerStyle = Util.cloneObject(marker.style);
selectedMarkerStyle.getImage().setOpacity(1);

export class Select extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Typography variant="h4" paragraph>Select interaction</Typography>
        <Map>
          <Layers>
            <layer.Tile />
            <layer.Vector source={source} style={marker.style} />
          </Layers>
          <Interactions>
            <interaction.Select style={selectedMarkerStyle} />
          </Interactions>
        </Map>
        <br/>
        <Divider />
        <br/>
        <Highlighter lang="jsx"  code={
`<Map>
  <Layers>
    <layer.Tile />
    <layer.Vector source={markers} style={markers.style} />
  </Layers>
  <Interactions>
    <interaction.Select style={selectedMarkerStyle} />
  </Interactions>
</Map>`
        } />
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/interactions/select.tsx">source</a>
      </div>
    );
  }
}