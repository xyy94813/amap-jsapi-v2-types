/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import { Overlay } from './Overlay';
import LngLat from '../common/LngLat';
import {
  CircleOptions,
  CircleEventType,
  Circle,
} from './Circle';

const p1: [number, number] = [118, 23];
const p2 = new LngLat(119, 23);

// CircleOptions
expectAssignable<CircleOptions>({});
expectAssignable<CircleOptions['center']>(p1);
expectAssignable<CircleOptions['center']>(p2);

expectAssignable<CircleOptions['radius']>(1);
expectAssignable<CircleOptions['zIndex']>(1);
expectAssignable<CircleOptions['bubble']>(true);
expectAssignable<CircleOptions['cursor']>('pointer');
expectAssignable<CircleOptions['strokeColor']>('red');
expectAssignable<CircleOptions['strokeOpacity']>(1);
expectAssignable<CircleOptions['strokeWeight']>(1);

expectAssignable<CircleOptions['strokeStyle']>('dashed');
expectAssignable<CircleOptions['strokeStyle']>('solid');
expectError<CircleOptions['strokeStyle']>('new style');

expectAssignable<CircleOptions['strokeDasharray']>([0, 0, 0]); // 实线
expectAssignable<CircleOptions['strokeDasharray']>([10, 10]); // 虚线
expectAssignable<CircleOptions['strokeDasharray']>([10, 2, 10]); // 点画线

expectAssignable<CircleOptions['fillColor']>('red');
expectAssignable<CircleOptions['fillOpacity']>(1);

expectAssignable<CircleOptions['draggable']>(true);

expectAssignable<CircleOptions['extData']>({});
expectAssignable<CircleOptions<Record<string, string>>['extData']>({ a: 'a' });
expectError<CircleOptions<Record<string, string>>['extData']>({ a: 1 });

// CircleEventType
expectAssignable<CircleEventType>('hide');
expectAssignable<CircleEventType>('show');
expectAssignable<CircleEventType>('click');
expectAssignable<CircleEventType>('dblclick');
expectAssignable<CircleEventType>('rightclick');
expectAssignable<CircleEventType>('mousedown');
expectAssignable<CircleEventType>('mouseup');
expectAssignable<CircleEventType>('mouseover');
expectAssignable<CircleEventType>('mouseout');
expectAssignable<CircleEventType>('touchstart');
expectAssignable<CircleEventType>('touchmove');
expectAssignable<CircleEventType>('touchend');

//
const overlay1 = new Circle();
const overlay2 = new Circle<Record<string, string>>();
expectType<Circle>(overlay1);
expectAssignable<Overlay<any, CircleEventType>>(overlay1);
expectAssignable<Overlay<Record<string, string>, CircleEventType>>(overlay2);

// methods
expectType<LngLat>(overlay1.getCenter());

expectType<void>(overlay1.setCenter(p1));
expectType<void>(overlay1.setCenter(p2));

expectType<number>(overlay1.getRadius());
expectType<void>(overlay1.setRadius(1));

expectType<void>(overlay1.setCenterAndRadius(p1, 1));
expectType<void>(overlay1.setCenterAndRadius(p2, 2));

expectType<void>(overlay1.destroy());

expectType<boolean>(overlay1.contains(p1));
expectType<boolean>(overlay1.contains(p2));

expectType<number>(overlay1.getArea());
expectType<number>(overlay1.getPlaneHeight());
