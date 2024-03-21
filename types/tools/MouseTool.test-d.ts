/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import Event from '../common/Event';
import { CircleOptions } from '../overlays/Circle';
import { MarkerOptions } from '../overlays/Marker';
import { PolygonOptions } from '../overlays/Polygon';
import { PolylineOptions } from '../overlays/Polyline';
import { RectangleOptions } from '../overlays/Rectangle';
import Map from '../Map';
import {
  MouseToolEventType,
  MouseTool,
} from './MouseTool';

expectAssignable<MouseToolEventType>('draw');

const mockMap = {} as any as Map;
const mouseTool = new MouseTool(mockMap);
expectType<MouseTool>(mouseTool);
expectType<MouseTool>(new MouseTool(mockMap, true));
expectAssignable<Event<MouseToolEventType>>(mouseTool);

// MouseTool methods
const optionsOfCircle: CircleOptions = {};
const optionsOfMarker: MarkerOptions = {};
const optionsOfPolygon: PolygonOptions = {};
const optionsOfPolyline: PolylineOptions = {};
const optionsOfRectangle: RectangleOptions = {};

expectType<void>(mouseTool.marker());
expectType<void>(mouseTool.marker(optionsOfMarker));

expectType<void>(mouseTool.circle());
expectType<void>(mouseTool.circle(optionsOfCircle));

expectType<void>(mouseTool.rectangle());
expectType<void>(mouseTool.rectangle(optionsOfRectangle));

expectType<void>(mouseTool.polyline());
expectType<void>(mouseTool.polyline(optionsOfPolyline));

expectType<void>(mouseTool.polygon());
expectType<void>(mouseTool.polygon(optionsOfPolygon));

expectType<void>(mouseTool.measureArea());
expectType<void>(mouseTool.measureArea(optionsOfPolygon));

expectType<void>(mouseTool.rule());
expectType<void>(mouseTool.rule(optionsOfPolyline));

expectType<void>(mouseTool.rectZoomIn(optionsOfRectangle));

expectType<void>(mouseTool.rectZoomOut(optionsOfRectangle));

expectType<void>(mouseTool.close());
expectType<void>(mouseTool.close(true));
expectType<void>(mouseTool.close(false));
