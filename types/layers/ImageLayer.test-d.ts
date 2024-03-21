/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import Bounds from '../common/Bounds';
import LngLat from '../common/LngLat';
import { BaseLayer } from './BaseLayer';
import {
  ImageLayerOption,
  ImageLayer,
} from './ImageLayer';

expectAssignable<ImageLayerOption>({ url: '' });
// CommonLayerOptions
expectAssignable<ImageLayerOption['zooms']>([1, 1]);
expectAssignable<ImageLayerOption['opacity']>(1);
expectAssignable<ImageLayerOption['visible']>(true);
expectAssignable<ImageLayerOption['zIndex']>(1);

const bounds1: [number, number, number, number] = [1, 1, 1, 1];
const bounds2 = new Bounds(new LngLat(1, 1), new LngLat(2, 2));
expectAssignable<ImageLayerOption['bounds']>(bounds1);
expectAssignable<ImageLayerOption['bounds']>(bounds2);

const layer = new ImageLayer({} as any as ImageLayerOption);
expectType<ImageLayer>(layer);
expectAssignable<BaseLayer>(layer);

// methods
expectType<string>(layer.getImageUrl());
expectType<void>(layer.setImageUrl(''));
expectType<Bounds>(layer.getBounds());
expectType<void>(layer.setBounds(bounds1));
expectType<void>(layer.setBounds(bounds2));

expectType<boolean>(layer.hasEvents('complete'));
expectType<boolean>(layer.hasEvents('other event type'));
