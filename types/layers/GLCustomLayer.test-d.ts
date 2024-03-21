/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import { BaseLayer } from './BaseLayer';
import {
  GLCustomLayerOption,
  GLCustomLayer,
} from './GLCustomLayer';

expectAssignable<GLCustomLayerOption>({});
// CommonLayerOptions
expectAssignable<GLCustomLayerOption['zooms']>([1, 1]);
expectAssignable<GLCustomLayerOption['opacity']>(1);
expectAssignable<GLCustomLayerOption['visible']>(true);
expectAssignable<GLCustomLayerOption['zIndex']>(1);
// 自定义
expectAssignable<GLCustomLayerOption['render']>(() => {});
expectAssignable<GLCustomLayerOption['init']>(() => {});

const layer = new GLCustomLayer({});
expectType<GLCustomLayer>(layer);
expectAssignable<BaseLayer>(layer);

// methods
