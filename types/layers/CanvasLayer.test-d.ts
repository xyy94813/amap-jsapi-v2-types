/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import Bounds from '../common/Bounds';
import LngLat from '../common/LngLat';
import { BaseLayer } from './BaseLayer';
import {
  CanvasLayerOption,
  CanvasLayer,
} from './CanvasLayer';

const bounds1: [number, number, number, number] = [1, 1, 1, 1];
const bounds2 = new Bounds(new LngLat(1, 1), new LngLat(2, 2));
const canvas = document.createElement('canvas');

expectAssignable<CanvasLayerOption>({});
// CommonLayerOptions
expectAssignable<CanvasLayerOption['zooms']>([1, 1]);
expectAssignable<CanvasLayerOption['opacity']>(1);
expectAssignable<CanvasLayerOption['visible']>(true);
expectAssignable<CanvasLayerOption['zIndex']>(1);
// 自定义
expectAssignable<CanvasLayerOption['canvas']>(canvas);

expectAssignable<CanvasLayerOption['bounds']>(bounds1);
expectAssignable<CanvasLayerOption['bounds']>(bounds2);

const layer = new CanvasLayer();
expectType<CanvasLayer>(layer);
expectAssignable<BaseLayer>(layer);

// methods
expectType<void>(layer.setCanvas(canvas));

expectType<HTMLCanvasElement | undefined>(layer.getElement());

expectType<Bounds>(layer.getBounds());

expectType<void>(layer.setBounds(bounds1));
expectType<void>(layer.setBounds(bounds2));

expectType<void>(layer.reFresh());
