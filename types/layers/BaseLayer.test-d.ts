/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import Event from '../common/Event';
import Map from '../Map';
import {
  CommonLayerOptions,
  BaseLayer,
} from './BaseLayer';

expectAssignable<CommonLayerOptions>({});
expectAssignable<CommonLayerOptions['zooms']>([1, 1]);
expectAssignable<CommonLayerOptions['opacity']>(1);
expectAssignable<CommonLayerOptions['visible']>(true);
expectAssignable<CommonLayerOptions['zIndex']>(1);

const baseLayer = new BaseLayer();

expectType<BaseLayer>(baseLayer);
expectAssignable<Event>(baseLayer);

// properties
expectType<string>(baseLayer.CLASS_NAME);

// methods
expectType<void>(baseLayer.show());
expectType<void>(baseLayer.hide());
expectType<void>(baseLayer.setzIndex(1));
expectType<number>(baseLayer.getzIndex());
expectType<void>(baseLayer.setOpacity(1));
expectType<number>(baseLayer.getOpacity());
expectType<Object>(baseLayer.getOptions());
expectType<[number, number]>(baseLayer.getZooms());
expectType<void>(baseLayer.setZooms([1, 1]));
expectType<void>(baseLayer.destroy());
expectType<void>(baseLayer.setMap({} as any as Map));
expectType<Map>(baseLayer.getMap());

expectType<BaseLayer>(baseLayer.on('click', () => {}));
