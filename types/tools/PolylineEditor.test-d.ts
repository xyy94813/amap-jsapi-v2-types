/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import Event from '../common/Event';
import { Polyline, PolylineOptions } from '../overlays/Polyline';
import { MarkerOptions } from '../overlays/Marker';
import Map from '../Map';
import {
  PolylineEditorOptions,
  PolylineEditorEventType,
  PolylineEditor,
} from './PolylineEditor';

expectAssignable<PolylineEditorOptions>({});
const optionsOfPolyline: PolylineOptions = {};
const optionsOfMarker: MarkerOptions = {};
expectAssignable<PolylineEditorOptions['createOptions']>(optionsOfPolyline);
expectAssignable<PolylineEditorOptions['editOptions']>(optionsOfPolyline);
expectAssignable<PolylineEditorOptions['controlPoint']>(optionsOfMarker);
expectAssignable<PolylineEditorOptions['midControlPoint']>(optionsOfMarker);

expectAssignable<PolylineEditorEventType>('addnode');
expectAssignable<PolylineEditorEventType>('removenode');
expectAssignable<PolylineEditorEventType>('adjust');
expectAssignable<PolylineEditorEventType>('move');
expectAssignable<PolylineEditorEventType>('add');
expectAssignable<PolylineEditorEventType>('end');

const mockMap = {} as any as Map;
const mockPolyline = {} as any as Polyline;
const editor = new PolylineEditor(mockMap);
expectType<PolylineEditor>(editor);
expectType<PolylineEditor>(new PolylineEditor(mockMap, mockPolyline));
expectType<PolylineEditor>(new PolylineEditor(mockMap, mockPolyline, {} as any as PolylineEditorOptions));
expectAssignable<Event<PolylineEditorEventType>>(editor);

// PolylineEditor methods
expectType<void>(editor.setTarget());
expectType<void>(editor.setTarget(mockPolyline));
expectType<void>(editor.setTarget(mockPolyline, () => {}));

expectType<Polyline | undefined>(editor.getTarget());

expectType<void>(editor.open());
expectType<void>(editor.open(() => {}));

expectType<void>(editor.close());
