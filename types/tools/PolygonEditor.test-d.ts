/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import Event from '../common/Event';
import { MarkerOptions } from '../overlays/Marker';
import { Polygon, PolygonOptions } from '../overlays/Polygon';
import { Polyline } from '../overlays/Polyline';
import Map from '../Map';
import {
  PolygonEditorOptions,
  PolygonEditorEventType,
  PolygonEditor,
} from './PolygonEditor';

expectAssignable<PolygonEditorOptions>({});
const optionsOfPolygon: PolygonOptions = {};
const optionsOfMarker: MarkerOptions = {};
expectAssignable<PolygonEditorOptions['createOptions']>(optionsOfPolygon);
expectAssignable<PolygonEditorOptions['editOptions']>(optionsOfPolygon);
expectAssignable<PolygonEditorOptions['controlPoint']>(optionsOfMarker);
expectAssignable<PolygonEditorOptions['midControlPoint']>(optionsOfMarker);

expectAssignable<PolygonEditorEventType>('addnode');
expectAssignable<PolygonEditorEventType>('removenode');
expectAssignable<PolygonEditorEventType>('adjust');
expectAssignable<PolygonEditorEventType>('move');
expectAssignable<PolygonEditorEventType>('add');
expectAssignable<PolygonEditorEventType>('end');

const mockMap = {} as any as Map;
const mockPolygon = {} as any as Polygon;
const editor = new PolygonEditor(mockMap);
expectType<PolygonEditor>(editor);
expectType<PolygonEditor>(new PolygonEditor(mockMap, mockPolygon));
expectType<PolygonEditor>(new PolygonEditor(mockMap, mockPolygon, {} as any as PolygonEditorOptions));
expectAssignable<Event<PolygonEditorEventType>>(editor);

// PolygonEditor methods
expectType<void>(editor.setTarget());
expectType<void>(editor.setTarget(mockPolygon));
expectType<void>(editor.setTarget(mockPolygon, () => {}));

expectType<Polygon | undefined>(editor.getTarget());

expectType<void>(editor.open());
expectType<void>(editor.open(() => {}));

expectType<void>(editor.close());

const polygon = {} as any as Polygon;
const polyline = {} as any as Polyline;
expectType<void>(editor.setAdsorbPolygons(polygon));
expectType<void>(editor.setAdsorbPolygons([polygon]));
expectError<void>(editor.setAdsorbPolygons(polyline));

expectType<void>(editor.addAdsorbPolygons(polygon));
expectType<void>(editor.addAdsorbPolygons([polygon]));
expectError<void>(editor.addAdsorbPolygons([polyline]));

expectType<void>(editor.removeAdsorbPolygons([polygon]));
expectError<void>(editor.removeAdsorbPolygons([polyline]));

expectType<void>(editor.clearAdsorbPolygons());
