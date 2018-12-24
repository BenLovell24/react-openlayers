import * as React from "react";

import { Typography, Divider } from "@material-ui/core";

import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

import Highlighter from "../Highlighter";

export class DragRotateAndZoom extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Typography variant="h4" paragraph>DragRotateAndZoom interaction</Typography>
        <Typography variant="subtitle1">Use <code>SHIFT + Drag</code> to rotate the map. Combines <code>DragRotate</code> and <code>DragZoom</code>.</Typography>
        <Map view={{ center: [0, 0], zoom: 2 }}>
          <Layers>
            <layer.Tile />
          </Layers>
          <Interactions >
            <interaction.DragRotateAndZoom />
          </Interactions>
        </Map>
        <br/>
        <Divider />
        <br/>
        <Highlighter lang="jsx" code={
`<Map view={{ center: [0, 0], zoom: 2 }}>
  <Layers>
    <layer.Tile />
  </Layers>
  <Interactions >
    <interaction.DragRotateAndZoom />
  </Interactions>
</Map>`
        } />
        <a href="https://github.com/allenhwkim/react-openlayers/blob/master/app/interactions/drag-rotate-and-zoom.tsx">source</a>
      </div>
    );
  }
}