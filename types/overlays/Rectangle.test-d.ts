/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import LngLat from '../common/LngLat';
import Map from '../Map';
import Bounds from '../common/Bounds';
import { Overlay } from './Overlay';
import {
  RectangleOptions,
  RectangleEventType,
  Rectangle,
} from './Rectangle';

const p1: [number, number] = [118, 23];
const p2 = new LngLat(119, 23);
const bounds1: [number, number, number, number] = [1, 1, 1, 1];
const bounds2 = new Bounds(p2, p2);
const mockMap = {} as any as Map;

// RectangleOptions
expectAssignable<RectangleOptions>({});
expectAssignable<RectangleOptions['bounds']>(bounds1);
expectAssignable<RectangleOptions['bounds']>(bounds2);

expectAssignable<RectangleOptions['zIndex']>(1);
expectAssignable<RectangleOptions['bubble']>(true);
expectAssignable<RectangleOptions['cursor']>('pointer');
expectAssignable<RectangleOptions['strokeColor']>('red');
expectAssignable<RectangleOptions['strokeOpacity']>(1);
expectAssignable<RectangleOptions['strokeWeight']>(1);

expectAssignable<RectangleOptions['strokeStyle']>('dashed');
expectAssignable<RectangleOptions['strokeStyle']>('solid');
expectError<RectangleOptions['strokeStyle']>('new style');

expectAssignable<RectangleOptions['strokeDasharray']>([0, 0, 0]); // 实线
expectAssignable<RectangleOptions['strokeDasharray']>([10, 10]); // 虚线
expectAssignable<RectangleOptions['strokeDasharray']>([10, 2, 10]); // 点画线

expectAssignable<RectangleOptions['fillColor']>('red');
expectAssignable<RectangleOptions['fillOpacity']>(1);

expectAssignable<RectangleOptions['draggable']>(true);

expectAssignable<RectangleOptions['map']>(mockMap);
expectAssignable<RectangleOptions['height']>(1);

expectAssignable<RectangleOptions['extData']>({});
expectAssignable<RectangleOptions<Record<string, string>>['extData']>({ a: 'a' });
expectError<RectangleOptions<Record<string, string>>['extData']>({ a: 1 });

// RectangleEventType
expectAssignable<RectangleEventType>('hide');
expectAssignable<RectangleEventType>('show');
expectAssignable<RectangleEventType>('click');
expectAssignable<RectangleEventType>('dblclick');
expectAssignable<RectangleEventType>('rightclick');
expectAssignable<RectangleEventType>('mousedown');
expectAssignable<RectangleEventType>('mouseup');
expectAssignable<RectangleEventType>('mouseover');
expectAssignable<RectangleEventType>('mouseout');
expectAssignable<RectangleEventType>('touchstart');
expectAssignable<RectangleEventType>('touchmove');
expectAssignable<RectangleEventType>('touchend');

//
const overlay1 = new Rectangle();
const overlay2 = new Rectangle<Record<string, string>>();
expectType<Rectangle>(overlay1);
expectAssignable<Overlay<any, RectangleEventType>>(overlay1);
expectAssignable<Overlay<Record<string, string>, RectangleEventType>>(overlay2);

// methods
expectType<Bounds>(overlay1.getBounds());

expectType<void>(overlay1.setBounds(bounds1));
expectType<void>(overlay1.setBounds(bounds2));

expectType<LngLat>(overlay1.getCenter());

expectType<void>(overlay1.destroy());

expectType<boolean>(overlay1.contains(p1));
expectType<boolean>(overlay1.contains(p2));

expectType<number>(overlay1.getArea());
expectType<number>(overlay1.getPlaneHeight());
