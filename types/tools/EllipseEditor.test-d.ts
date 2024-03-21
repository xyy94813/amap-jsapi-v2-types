/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import Event from '../common/Event';
import { Ellipse, EllipseOptions } from '../overlays/Ellipse';
import { MarkerOptions } from '../overlays/Marker';
import Map from '../Map';
import {
  EllipseEditorOptions,
  EllipseEditorEventType,
  EllipseEditor,
} from './EllipseEditor';

expectAssignable<EllipseEditorOptions>({});
expectAssignable<EllipseEditorOptions['createOptions']>({} as any as EllipseOptions);
expectAssignable<EllipseEditorOptions['editOptions']>({} as any as EllipseOptions);
expectAssignable<EllipseEditorOptions['movePoint']>({} as any as MarkerOptions);
expectAssignable<EllipseEditorOptions['resizeXPoint']>({} as any as MarkerOptions);
expectAssignable<EllipseEditorOptions['resizeYPoint']>({} as any as MarkerOptions);

expectAssignable<EllipseEditorEventType>('addnode');
expectAssignable<EllipseEditorEventType>('removenode');
expectAssignable<EllipseEditorEventType>('adjust');
expectAssignable<EllipseEditorEventType>('move');
expectAssignable<EllipseEditorEventType>('add');
expectAssignable<EllipseEditorEventType>('end');

const mockMap = {} as any as Map;
const mockEllipse = {} as any as Ellipse;
const editor = new EllipseEditor(mockMap);
expectType<EllipseEditor>(editor);
expectType<EllipseEditor>(new EllipseEditor(mockMap, mockEllipse));
expectType<EllipseEditor>(new EllipseEditor(mockMap, mockEllipse, {} as any as EllipseEditorOptions));
expectAssignable<Event<EllipseEditorEventType>>(editor);

// EllipseEditor methods
expectType<void>(editor.setTarget());
expectType<void>(editor.setTarget(mockEllipse));
expectType<void>(editor.setTarget(mockEllipse, () => {}));

expectType<Ellipse | undefined>(editor.getTarget());

expectType<void>(editor.open());
expectType<void>(editor.open(() => {}));

expectType<void>(editor.close());
