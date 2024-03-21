/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import Pixel from '../common/Pixel';
import Event from '../common/Event';
import { MarkerOptions } from '../overlays/Marker';
import { PolylineOptions } from '../overlays/Polyline';
import Map from '../Map';
import {
  RangingToolOptions,
  RangingToolEventType,
  RangingTool,
} from './RangingTool';

const optionsOfMarker: MarkerOptions = {};
const optionsOfPolyline: PolylineOptions = {};
const pixel1: [number, number] = [0, 0];
const pixel2 = new Pixel(1, 1);

expectAssignable<RangingToolOptions>({});

expectAssignable<RangingToolOptions['startMarkerOptions']>(optionsOfMarker);
expectAssignable<RangingToolOptions['midMarkerOptions']>(optionsOfMarker);
expectAssignable<RangingToolOptions['endMarkerOptions']>(optionsOfMarker);
expectAssignable<RangingToolOptions['lineOptions']>(optionsOfPolyline);
expectAssignable<RangingToolOptions['tmpLineOptions']>(optionsOfPolyline);
expectAssignable<RangingToolOptions['startLabelText']>('text');
expectAssignable<RangingToolOptions['midLabelText']>('text');
expectAssignable<RangingToolOptions['endLabelText']>('text');
expectAssignable<RangingToolOptions['startLabelOffset']>(pixel1);
expectAssignable<RangingToolOptions['startLabelOffset']>(pixel2);
expectAssignable<RangingToolOptions['midLabelOffset']>(pixel1);
expectAssignable<RangingToolOptions['midLabelOffset']>(pixel2);
expectAssignable<RangingToolOptions['endLabelOffset']>(pixel1);
expectAssignable<RangingToolOptions['endLabelOffset']>(pixel2);

expectAssignable<RangingToolEventType>('addnode');
expectAssignable<RangingToolEventType>('removenode');
expectAssignable<RangingToolEventType>('end');

const mockMap = {} as any as Map;
const rangingTool = new RangingTool(mockMap);
expectType<RangingTool>(rangingTool);
expectType<RangingTool>(new RangingTool(mockMap, {} as any as RangingToolOptions));
expectAssignable<Event<RangingToolEventType>>(rangingTool);

// RangingTool methods
expectType<void>(rangingTool.turnOn());

expectType<void>(rangingTool.turnOff());
expectType<void>(rangingTool.turnOff(false));
