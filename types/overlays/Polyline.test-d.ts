/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import LngLat from '../common/LngLat';
import Map from '../Map';
import Bounds from '../common/Bounds';
import { Overlay } from './Overlay';
import {
  PolylineOptions,
  PolylineEventType,
  Polyline,
} from './Polyline';

const p1: [number, number] = [118, 23];
const p2 = new LngLat(119, 23);
const mockMap = {} as any as Map;
const line1 = [p1, p1, p1];
const line2 = [p2, p2, p2];

// PolylineOptions
expectAssignable<PolylineOptions>({});
expectAssignable<PolylineOptions['path']>(line1);
expectAssignable<PolylineOptions['path']>(line2);

expectAssignable<PolylineOptions['zIndex']>(1);
expectAssignable<PolylineOptions['bubble']>(true);
expectAssignable<PolylineOptions['cursor']>('pointer');
expectAssignable<PolylineOptions['zooms']>([2, 18]);
expectAssignable<PolylineOptions['strokeColor']>('red');
expectAssignable<PolylineOptions['strokeOpacity']>(1);
expectAssignable<PolylineOptions['strokeWeight']>(1);

expectAssignable<PolylineOptions['strokeStyle']>('dashed');
expectAssignable<PolylineOptions['strokeStyle']>('solid');

expectAssignable<PolylineOptions['strokeDasharray']>([0, 0, 0]); // 实线
expectAssignable<PolylineOptions['strokeDasharray']>([10, 10]); // 虚线
expectAssignable<PolylineOptions['strokeDasharray']>([10, 2, 10]); // 点画线

expectAssignable<PolylineOptions['isOutline']>(true);
expectAssignable<PolylineOptions['borderWeight']>(1);
expectAssignable<PolylineOptions['outlineColor']>('red');
expectAssignable<PolylineOptions['lineJoin']>('miter');
expectAssignable<PolylineOptions['lineJoin']>('round');
expectAssignable<PolylineOptions['lineJoin']>('bevel');
expectAssignable<PolylineOptions['lineCap']>('round');
expectAssignable<PolylineOptions['lineCap']>('butt');
expectAssignable<PolylineOptions['lineCap']>('square');
expectAssignable<PolylineOptions['geodesic']>(true);
expectAssignable<PolylineOptions['showDir']>(true);
expectAssignable<PolylineOptions['dirColor']>('red');
expectAssignable<PolylineOptions['dirImg']>('//dir.png');
expectAssignable<PolylineOptions['dirImg']>(document.createElement('canvas'));

expectAssignable<PolylineOptions['draggable']>(true);

expectAssignable<PolylineOptions['map']>(mockMap);
expectAssignable<PolylineOptions['height']>(1);

expectAssignable<PolylineOptions['extData']>({});
expectAssignable<PolylineOptions<Record<string, string>>['extData']>({ a: 'a' });
expectError<PolylineOptions<Record<string, string>>['extData']>({ a: 1 });

// PolylineEventType
expectAssignable<PolylineEventType>('hide');
expectAssignable<PolylineEventType>('show');
expectAssignable<PolylineEventType>('click');
expectAssignable<PolylineEventType>('dblclick');
expectAssignable<PolylineEventType>('rightclick');
expectAssignable<PolylineEventType>('mousedown');
expectAssignable<PolylineEventType>('mouseup');
expectAssignable<PolylineEventType>('mouseover');
expectAssignable<PolylineEventType>('mouseout');
expectAssignable<PolylineEventType>('touchstart');
expectAssignable<PolylineEventType>('touchmove');
expectAssignable<PolylineEventType>('touchend');

//
const overlay1 = new Polyline();
const overlay2 = new Polyline<Record<string, string>>();
expectType<Polyline>(overlay1);
expectAssignable<Overlay<any, PolylineEventType>>(overlay1);
expectAssignable<Overlay<Record<string, string>, PolylineEventType>>(overlay2);

// methods
expectType<LngLat[] | LngLat[][]>(overlay1.getPath());

expectType<void>(overlay1.setPath(line1));
expectType<void>(overlay1.setPath(line2));

expectType<Bounds>(overlay1.getBounds());

expectType<void>(overlay1.moveWithPos(1, 1));

expectType<number>(overlay1.getLength(true));

expectType<void>(overlay1.destroy());

expectType<boolean>(overlay1.contains(p1));
expectType<boolean>(overlay1.contains(p2));

expectType<number>(overlay1.getPolylineHeight());
