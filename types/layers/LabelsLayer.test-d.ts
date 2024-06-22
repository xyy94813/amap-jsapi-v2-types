/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import LabelMarker from '../overlays/LabelMarker';
import { BaseLayer } from './BaseLayer';
import {
  LabelsLayerOption,
  LabelsLayer,
} from './LabelsLayer';

expectAssignable<LabelsLayerOption>({ });
// CommonLayerOptions
expectAssignable<LabelsLayerOption['zooms']>([1, 1]);
expectAssignable<LabelsLayerOption['opacity']>(1);
expectAssignable<LabelsLayerOption['visible']>(true);
expectAssignable<LabelsLayerOption['zIndex']>(1);

expectAssignable<LabelsLayerOption['collision']>(true);
expectAssignable<LabelsLayerOption['allowCollision']>(true);

const layer = new LabelsLayer();
expectType<LabelsLayer>(layer);
expectAssignable<BaseLayer>(layer);

const labelMarker = {} as any as LabelMarker;
// methods
expectType<boolean>(layer.getCollision());

expectType<void>(layer.setCollision(true));

expectType<boolean>(layer.getAllowCollision());

expectType<void>(layer.setAllowCollision(true));

expectType<void>(layer.add(labelMarker));
expectType<void>(layer.add([]));
expectType<void>(layer.add([labelMarker]));

expectType<void>(layer.remove(labelMarker));
expectType<void>(layer.remove([]));
expectType<void>(layer.remove([labelMarker]));

expectType<LabelMarker[] | undefined>(layer.getAllOverlays());

expectType<void>(layer.clear());


declare class LabelMarker2 extends LabelMarker {
  a: string
}

// 验证自定义范型
const layer2 = new LabelsLayer<LabelMarker2>();
expectType<void>(layer2.add([]));
expectType<void>(layer.remove([]));

expectError<void>(layer2.add(labelMarker));
expectError<void>(layer2.add([labelMarker]));
expectError<void>(layer2.remove(labelMarker));
expectError<void>(layer2.remove([labelMarker]));

expectType<LabelMarker2[]>(layer2.getAllOverlays()!);
