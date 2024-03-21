/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import Event from '../common/Event';
import { Rectangle, RectangleOptions } from '../overlays/Rectangle';
import { MarkerOptions } from '../overlays/Marker';
import Map from '../Map';
import {
  RectangleEditorOptions,
  RectangleEditorEventType,
  RectangleEditor,
} from './RectangleEditor';

expectAssignable<RectangleEditorOptions>({});
const optionsOfRectangle: RectangleOptions = {};
const optionsOfMarker: MarkerOptions = {};
expectAssignable<RectangleEditorOptions['createOptions']>(optionsOfRectangle);
expectAssignable<RectangleEditorOptions['editOptions']>(optionsOfRectangle);
expectAssignable<RectangleEditorOptions['southWestPoint']>(optionsOfMarker);
expectAssignable<RectangleEditorOptions['northEastPoint']>(optionsOfMarker);

expectAssignable<RectangleEditorEventType>('addnode');
expectAssignable<RectangleEditorEventType>('removenode');
expectAssignable<RectangleEditorEventType>('adjust');
expectAssignable<RectangleEditorEventType>('move');
expectAssignable<RectangleEditorEventType>('add');
expectAssignable<RectangleEditorEventType>('end');

const mockMap = {} as any as Map;
const mockRectangle = {} as any as Rectangle;
const editor = new RectangleEditor(mockMap);
expectType<RectangleEditor>(editor);
expectType<RectangleEditor>(new RectangleEditor(mockMap, mockRectangle));
expectType<RectangleEditor>(new RectangleEditor(mockMap, mockRectangle, {} as any as RectangleEditorOptions));
expectAssignable<Event<RectangleEditorEventType>>(editor);

// RectangleEditor methods
expectType<void>(editor.setTarget());
expectType<void>(editor.setTarget(mockRectangle));
expectType<void>(editor.setTarget(mockRectangle, () => {}));

expectType<Rectangle | undefined>(editor.getTarget());

expectType<void>(editor.open());
expectType<void>(editor.open(() => {}));

expectType<void>(editor.close());
