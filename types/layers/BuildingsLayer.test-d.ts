/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import { BaseLayer } from './BaseLayer';
import {
  BuildingsStyleOptions,
  BuildingsLayerOptions,
  Buildings,
} from './BuildingsLayer';

expectType<BuildingsStyleOptions>({} as any);

expectAssignable<BuildingsLayerOptions>({});
// CommonLayerOptions
expectAssignable<BuildingsLayerOptions['zooms']>([1, 1]);
expectAssignable<BuildingsLayerOptions['opacity']>(1);
expectAssignable<BuildingsLayerOptions['visible']>(true);
expectAssignable<BuildingsLayerOptions['zIndex']>(1);
// 自定义
expectAssignable<BuildingsLayerOptions['wallColor']>(['red', 'yellow']);
expectAssignable<BuildingsLayerOptions['wallColor']>('red');
expectAssignable<BuildingsLayerOptions['roofColor']>(['red', 'yellow']);
expectAssignable<BuildingsLayerOptions['roofColor']>('#FFF');
expectAssignable<BuildingsLayerOptions['heightFactor']>(1);
expectAssignable<BuildingsLayerOptions['styleOpts']>(({}));

const layer = new Buildings({});
expectType<Buildings>(layer);
expectAssignable<BaseLayer>(layer);

// methods
expectType<void>(layer.setStyle({}));
