/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import Event from '../common/Event';
import { BezierCurve, BezierCurveOptions } from '../overlays/BezierCurve';
import { MarkerOptions } from '../overlays/Marker';
import { PolylineOptions } from '../overlays/Polyline';
import Map from '../Map';
import {
  BezierCurveEditorOptions,
  BezierCurveEditorEventType,
  BezierCurveEditor,
} from './BezierCurveEditor';

expectAssignable<BezierCurveEditorOptions>({});
const optionsOfBezierCurve: BezierCurveOptions = {};
const optionsOfMarker: MarkerOptions = {};
const optionsOfPolyline: PolylineOptions = {};
expectAssignable<BezierCurveEditorOptions['createOptions']>(optionsOfBezierCurve);
expectAssignable<BezierCurveEditorOptions['editOptions']>(optionsOfBezierCurve);
expectAssignable<BezierCurveEditorOptions['controlPoint']>(optionsOfMarker);
expectAssignable<BezierCurveEditorOptions['midControlPoint']>(optionsOfMarker);
expectAssignable<BezierCurveEditorOptions['bezierControlPoint']>(optionsOfMarker);
expectAssignable<BezierCurveEditorOptions['bezierControlLine']>(optionsOfPolyline);

expectAssignable<BezierCurveEditorEventType>('addnode');
expectAssignable<BezierCurveEditorEventType>('removenode');
expectAssignable<BezierCurveEditorEventType>('adjust');
expectAssignable<BezierCurveEditorEventType>('move');
expectAssignable<BezierCurveEditorEventType>('add');
expectAssignable<BezierCurveEditorEventType>('end');

const mockMap = {} as any as Map;
const mockBezierCurve = {} as any as BezierCurve;
const editor = new BezierCurveEditor(mockMap);
expectType<BezierCurveEditor>(editor);
expectType<BezierCurveEditor>(new BezierCurveEditor(mockMap, mockBezierCurve));
expectType<BezierCurveEditor>(new BezierCurveEditor(mockMap, mockBezierCurve, {} as any as BezierCurveEditorOptions));
expectAssignable<Event<BezierCurveEditorEventType>>(editor);

// BezierCurveEditor methods
expectType<void>(editor.setTarget());
expectType<void>(editor.setTarget(mockBezierCurve));
expectType<void>(editor.setTarget(mockBezierCurve, () => {}));

expectType<BezierCurve | undefined>(editor.getTarget());

expectType<void>(editor.open());
expectType<void>(editor.open(() => {}));

expectType<void>(editor.close());
