import * as React from 'react';
import * as ReactDOM from 'react-dom';

import olOverlay from 'ol/overlay'

import { Util } from './util';
import { MapContext } from './map';

export class Overlay extends React.Component<any, any> {
  public static contextType = MapContext;

  overlay: olOverlay;
  el: HTMLElement;

  options: any = {
    id: undefined,
    element: undefined,
    offset: undefined,
    position: undefined,
    stopEvent: undefined,
    insertFirst: undefined,
    autoPan: undefined,
    autoPanAnimation: undefined,
    autoPanMargin: undefined
  };

  events: any = {
    'change': undefined,
    'change:element': undefined,
    'change:map': undefined,
    'change:offset': undefined,
    'change:position': undefined,
    'change:positioning': undefined,
    'propertychange': undefined
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

  componentDidMount() {
    let options = Util.getOptions(Object.assign(this.options, this.props));
    options.element = (ReactDOM.findDOMNode(this) as Element).querySelector('div');
    // console.log('options.element', options.element);
    this.overlay = new olOverlay(options);
    this.context.mapComp.overlays.push(this.overlay);
  }
}
