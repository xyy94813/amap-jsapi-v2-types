/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import Event from '../common/Event';
import { Circle, CircleOptions } from '../overlays/Circle';
import { MarkerOptions } from '../overlays/Marker';
import Map from '../Map';
import {
  CircleEditorOptions,
  CircleEditorEventType,
  CircleEditor,
} from './CircleEditor';

expectAssignable<CircleEditorOptions>({});
expectAssignable<CircleEditorOptions['createOptions']>({} as any as CircleOptions);
expectAssignable<CircleEditorOptions['editOptions']>({} as any as CircleOptions);
expectAssignable<CircleEditorOptions['movePoint']>({} as any as MarkerOptions);
expectAssignable<CircleEditorOptions['resizePoint']>({} as any as MarkerOptions);

expectAssignable<CircleEditorEventType>('addnode');
expectAssignable<CircleEditorEventType>('removenode');
expectAssignable<CircleEditorEventType>('adjust');
expectAssignable<CircleEditorEventType>('move');
expectAssignable<CircleEditorEventType>('add');
expectAssignable<CircleEditorEventType>('end');

const mockMap = {} as any as Map;
const mockCircle = {} as any as Circle;
const editor = new CircleEditor(mockMap);
expectType<CircleEditor>(editor);
expectType<CircleEditor>(new CircleEditor(mockMap, mockCircle));
expectType<CircleEditor>(new CircleEditor(mockMap, mockCircle, {} as any as CircleEditorOptions));
expectAssignable<Event<CircleEditorEventType>>(editor);

// CircleEditor methods
expectType<void>(editor.setTarget());
expectType<void>(editor.setTarget(mockCircle));
expectType<void>(editor.setTarget(mockCircle, () => {}));

expectType<Circle | undefined>(editor.getTarget());

expectType<void>(editor.open());
expectType<void>(editor.open(() => {}));

expectType<void>(editor.close());
