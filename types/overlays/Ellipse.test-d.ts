/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import { Overlay } from './Overlay';
import LngLat from '../common/LngLat';
import {
  EllipseOptions,
  EllipseEventType,
  Ellipse,
} from './Ellipse';

const p1: [number, number] = [118, 23];
const p2 = new LngLat(119, 23);

// EllipseOptions
expectAssignable<EllipseOptions>({});
expectAssignable<EllipseOptions['center']>(p1);
expectAssignable<EllipseOptions['center']>(p2);

expectAssignable<EllipseOptions['radius']>([1, 1]);
expectAssignable<EllipseOptions['zIndex']>(1);
expectAssignable<EllipseOptions['bubble']>(true);
expectAssignable<EllipseOptions['cursor']>('pointer');
expectAssignable<EllipseOptions['strokeColor']>('red');
expectAssignable<EllipseOptions['strokeOpacity']>(1);
expectAssignable<EllipseOptions['strokeWeight']>(1);

expectAssignable<EllipseOptions['strokeStyle']>('dashed');
expectAssignable<EllipseOptions['strokeStyle']>('solid');
expectError<EllipseOptions['strokeStyle']>('new style');

expectAssignable<EllipseOptions['strokeDasharray']>([0, 0, 0]); // 实线
expectAssignable<EllipseOptions['strokeDasharray']>([10, 10]); // 虚线
expectAssignable<EllipseOptions['strokeDasharray']>([10, 2, 10]); // 点画线

expectAssignable<EllipseOptions['fillColor']>('red');
expectAssignable<EllipseOptions['fillOpacity']>(1);

expectAssignable<EllipseOptions['draggable']>(true);

expectAssignable<EllipseOptions['extData']>({});
expectAssignable<EllipseOptions<Record<string, string>>['extData']>({ a: 'a' });
expectError<EllipseOptions<Record<string, string>>['extData']>({ a: 1 });

// EllipseEventType
expectAssignable<EllipseEventType>('hide');
expectAssignable<EllipseEventType>('show');
expectAssignable<EllipseEventType>('click');
expectAssignable<EllipseEventType>('dblclick');
expectAssignable<EllipseEventType>('rightclick');
expectAssignable<EllipseEventType>('mousedown');
expectAssignable<EllipseEventType>('mouseup');
expectAssignable<EllipseEventType>('mouseover');
expectAssignable<EllipseEventType>('mouseout');
expectAssignable<EllipseEventType>('touchstart');
expectAssignable<EllipseEventType>('touchmove');
expectAssignable<EllipseEventType>('touchend');

//
const overlay1 = new Ellipse();
const overlay2 = new Ellipse<Record<string, string>>();
expectType<Ellipse>(overlay1);
expectAssignable<Overlay<any, EllipseEventType>>(overlay1);
expectAssignable<Overlay<Record<string, string>, EllipseEventType>>(overlay2);

// methods
expectType<LngLat>(overlay1.getCenter());

expectType<void>(overlay1.setCenter(p1));
expectType<void>(overlay1.setCenter(p2));

expectType<number>(overlay1.getRadius());
expectType<void>(overlay1.setRadius([1, 1]));

expectType<void>(overlay1.destroy());

expectType<boolean>(overlay1.contains(p1));
expectType<boolean>(overlay1.contains(p2));

expectType<number>(overlay1.getArea());
expectType<number>(overlay1.getPlaneHeight());
