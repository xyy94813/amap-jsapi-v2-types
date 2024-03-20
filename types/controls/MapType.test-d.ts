/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import BaseLayer from '../layers/BaseLayer';
import { Control } from './Control';
import {
  MapTypeLayerInfo,
  MapTypeOptions,
  MapType,
} from './MapType';

expectAssignable<MapTypeOptions>({});
expectAssignable<MapTypeOptions>({ defaultType: 1, showTraffic: false, showRoad: false });

expectAssignable<MapTypeLayerInfo>({
  id: 'id',
  enable: '', // TODO: 需要验证这里的类型声明，是否文档中有误。
  name: '',
  type: 'base',
  layer: {} as any as BaseLayer,
  show: false,
});
expectAssignable<MapTypeLayerInfo['type']>('overlay');
expectAssignable<MapTypeLayerInfo['type']>('base');

const control = new MapType({});

expectType<MapType>(control);
expectAssignable<Control>(control); // 继承检查

// properties
expectType<HTMLElement>(control._container);

// methods
expectType<void>(control.addLayer({} as any as MapTypeLayerInfo));

expectType<void>(control.removeLayer('id'));
