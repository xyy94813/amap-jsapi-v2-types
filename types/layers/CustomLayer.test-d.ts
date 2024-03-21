/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import { BaseLayer } from './BaseLayer';
import {
  CustomLayerOption,
  CustomLayer,
} from './CustomLayer';

const canvas = document.createElement('canvas');

expectAssignable<CustomLayerOption>({});
// CommonLayerOptions
expectAssignable<CustomLayerOption['zooms']>([1, 1]);
expectAssignable<CustomLayerOption['opacity']>(1);
expectAssignable<CustomLayerOption['visible']>(true);
expectAssignable<CustomLayerOption['zIndex']>(1);
// 自定义
expectAssignable<CustomLayerOption['render']>(() => {});
expectAssignable<CustomLayerOption['alwaysRender']>(true);

const layer = new CustomLayer(canvas, {});
expectType<CustomLayer>(layer);
expectAssignable<BaseLayer>(layer);

// methods
