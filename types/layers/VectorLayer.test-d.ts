/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import Bounds from '../common/Bounds';
import LngLat from '../common/LngLat';
import { VectorOverlay } from '../overlays/VectorOverlay';
import { BaseLayer } from './BaseLayer';
import {
  VectorLayerOption,
  VectorLayer,
} from './VectorLayer';

expectAssignable<VectorLayerOption>({});

expectAssignable<VectorLayerOption['visible']>(true);
expectAssignable<VectorLayerOption['zIndex']>(1);

const layer = new VectorLayer();
expectType<VectorLayer>(layer);
expectAssignable<BaseLayer>(layer);

const overlay = {} as any as VectorOverlay;
const p1: [number, number] = [1, 1];
const p2 = new LngLat(1, 1);

// methods
expectType<void>(layer.add(overlay));
expectType<void>(layer.add([]));
expectType<void>(layer.add([overlay]));

expectType<void>(layer.remove(overlay));
expectType<void>(layer.remove([]));
expectType<void>(layer.remove([overlay]));

expectType<void>(layer.setOptions({} as any as VectorLayerOption));

expectType<boolean>(layer.has(overlay));

expectType<void>(layer.clear());

expectType<VectorOverlay | undefined>(layer.query(p1));
expectType<VectorOverlay | undefined>(layer.query(p2));

expectType<Bounds | undefined>(layer.getBounds());
