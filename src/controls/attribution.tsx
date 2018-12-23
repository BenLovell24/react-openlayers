import * as React from 'react';

import olAttribution from 'ol/control/attribution';

import { MapContext } from '../map';
import { Util } from '../util';
import { ControlType } from 'controls';

export interface AttributionProps extends ol.olx.control.AttributionOptions, ControlType<olAttribution> {};

export class Attribution extends React.Component<AttributionProps> {
  public static contextType = MapContext;

  public control: olAttribution;

  public options: AttributionProps = {
    className: undefined,
    target: undefined,
    collapsible: undefined,
    collapsed: undefined,
    tipLabel: undefined,
    label: undefined,
    collapseLabel: undefined,
    render: undefined
  };

  public events: any = {
    change: undefined,
    propertychange: undefined
  };

  public render() { return null; }

  public componentDidMount() {
    const options = Util.getOptions({ ...this.options, ...this.props });
    this.control = new olAttribution(options);
    this.context.mapComp.controls.push(this.control);

    if (this.props.controlRef) this.props.controlRef(this.control);

    const olEvents = Util.getEvents(this.events, this.props);
    Object.keys(olEvents).forEach((eventName: string) => {
      this.control.on(eventName, olEvents[eventName]);
    });
  }

}