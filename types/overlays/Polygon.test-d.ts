/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import LngLat from '../common/LngLat';
import Map from '../Map';
import Bounds from '../common/Bounds';
import { Overlay } from './Overlay';
import {
  PolygonOptions,
  PolygonEventType,
  Polygon,
} from './Polygon';

const p1: [number, number] = [118, 23];
const p2 = new LngLat(119, 23);
const mockMap = {} as any as Map;
const ring1 = [p1, p1, p1];
const ring2 = [p2, p2, p2];
const multipleRing1 = [ring1, ring1];
const multipleRing2 = [ring2, ring2];
const MultiPolygonCoords1 = [multipleRing1, multipleRing1];
const MultiPolygonCoords2 = [multipleRing2, multipleRing2];

// PolygonOptions

expectAssignable<PolygonOptions>({});
expectAssignable<PolygonOptions['path']>(ring1);
expectAssignable<PolygonOptions['path']>(ring1);
expectAssignable<PolygonOptions['path']>(multipleRing1);
expectAssignable<PolygonOptions['path']>(multipleRing2);
expectAssignable<PolygonOptions['path']>(MultiPolygonCoords1);
expectAssignable<PolygonOptions['path']>(MultiPolygonCoords2);

expectAssignable<PolygonOptions['zIndex']>(1);
expectAssignable<PolygonOptions['bubble']>(true);
expectAssignable<PolygonOptions['cursor']>('pointer');
expectAssignable<PolygonOptions['zooms']>([2, 18]);
expectAssignable<PolygonOptions['strokeColor']>('red');
expectAssignable<PolygonOptions['strokeOpacity']>(1);
expectAssignable<PolygonOptions['strokeWeight']>(1);

expectAssignable<PolygonOptions['strokeStyle']>('dashed');
expectAssignable<PolygonOptions['strokeStyle']>('solid');

expectAssignable<PolygonOptions['strokeDasharray']>([0, 0, 0]); // 实线
expectAssignable<PolygonOptions['strokeDasharray']>([10, 10]); // 虚线
expectAssignable<PolygonOptions['strokeDasharray']>([10, 2, 10]); // 点画线

expectAssignable<PolygonOptions['fillColor']>('red');
expectAssignable<PolygonOptions['fillOpacity']>(1);

expectAssignable<PolygonOptions['draggable']>(true);

expectAssignable<PolygonOptions['map']>(mockMap);
expectAssignable<PolygonOptions['height']>(1);
expectAssignable<PolygonOptions['extrusionHeight']>(1);
expectAssignable<PolygonOptions['roofColor']>('red');
expectAssignable<PolygonOptions['wallColor']>('red');

expectAssignable<PolygonOptions['extData']>({});
expectAssignable<PolygonOptions<Record<string, string>>['extData']>({ a: 'a' });
expectError<PolygonOptions<Record<string, string>>['extData']>({ a: 1 });

// PolygonEventType
expectAssignable<PolygonEventType>('hide');
expectAssignable<PolygonEventType>('show');
expectAssignable<PolygonEventType>('click');
expectAssignable<PolygonEventType>('dblclick');
expectAssignable<PolygonEventType>('rightclick');
expectAssignable<PolygonEventType>('mousedown');
expectAssignable<PolygonEventType>('mouseup');
expectAssignable<PolygonEventType>('mouseover');
expectAssignable<PolygonEventType>('mouseout');
expectAssignable<PolygonEventType>('touchstart');
expectAssignable<PolygonEventType>('touchmove');
expectAssignable<PolygonEventType>('touchend');

//
const overlay1 = new Polygon();
const overlay2 = new Polygon<Record<string, string>>();
expectType<Polygon>(overlay1);
expectAssignable<Overlay<any, PolygonEventType>>(overlay1);
expectAssignable<Overlay<Record<string, string>, PolygonEventType>>(overlay2);

// methods
expectType<LngLat[] | LngLat[][] | LngLat[][][]>(overlay1.getPath());

expectType<void>(overlay1.setPath(ring1));
expectType<void>(overlay1.setPath(ring1));
expectType<void>(overlay1.setPath(multipleRing1));
expectType<void>(overlay1.setPath(multipleRing2));
expectType<void>(overlay1.setPath(MultiPolygonCoords1));
expectType<void>(overlay1.setPath(MultiPolygonCoords2));

expectType<number>(overlay1.getExtrusionHeight());

expectType<void>(overlay1.setExtrusionHeight(1));

expectType<Bounds>(overlay1.getBounds());

expectType<void>(overlay1.destroy());

expectType<number>(overlay1.getArea());

expectType<boolean>(overlay1.contains(p1));
expectType<boolean>(overlay1.contains(p2));

expectType<number>(overlay1.getPlaneHeight());
