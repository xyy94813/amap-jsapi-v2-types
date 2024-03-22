/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import Pixel from '../common/Pixel';
import LngLat from '../common/LngLat';
import Map from '../Map';
import { Marker } from './Marker';
import {
  ElasticStyle,
  ElasticMarkerOptions,
  ElasticMarkerEventType,
  ElasticMarker,
} from './ElasticMarker';

const p1: [number, number] = [118, 23];
const p2 = new LngLat(119, 23);

// ElasticStyle
expectAssignable<ElasticStyle['icon']>({});
expectAssignable<NonNullable<ElasticStyle['icon']>>({});
expectAssignable<NonNullable<ElasticStyle['icon']>['img']>('//a.jpeg');
expectAssignable<NonNullable<ElasticStyle['icon']>['size']>([200, 100]);

expectAssignable<NonNullable<ElasticStyle['icon']>['anchor']>('top-left');
expectAssignable<NonNullable<ElasticStyle['icon']>['anchor']>('top-center');
expectAssignable<NonNullable<ElasticStyle['icon']>['anchor']>('top-right');
expectAssignable<NonNullable<ElasticStyle['icon']>['anchor']>('middle-left');
expectAssignable<NonNullable<ElasticStyle['icon']>['anchor']>('center');
expectAssignable<NonNullable<ElasticStyle['icon']>['anchor']>('middle-right');
expectAssignable<NonNullable<ElasticStyle['icon']>['anchor']>('bottom-left');
expectAssignable<NonNullable<ElasticStyle['icon']>['anchor']>('bottom-center');
expectAssignable<NonNullable<ElasticStyle['icon']>['anchor']>('bottom-right');
expectAssignable<NonNullable<ElasticStyle['icon']>['anchor']>([1, 1]);
expectAssignable<NonNullable<ElasticStyle['icon']>['anchor']>(new Pixel(1, 1));

expectAssignable<NonNullable<ElasticStyle['icon']>['imageOffset']>([1, 1]);
expectAssignable<NonNullable<ElasticStyle['icon']>['imageSize']>(100);
expectAssignable<NonNullable<ElasticStyle['icon']>['fitZoom']>(1);
expectAssignable<NonNullable<ElasticStyle['icon']>['scaleFactor']>(1);
expectAssignable<NonNullable<ElasticStyle['icon']>['maxScale']>(1);
expectAssignable<NonNullable<ElasticStyle['icon']>['minScale']>(1);

expectAssignable<ElasticStyle['label']>({});
expectAssignable<NonNullable<ElasticStyle['label']>['content']>('label content');

expectAssignable<NonNullable<ElasticStyle['label']>['position']>('BL');
expectAssignable<NonNullable<ElasticStyle['label']>['position']>('BM');
expectAssignable<NonNullable<ElasticStyle['label']>['position']>('BR');
expectAssignable<NonNullable<ElasticStyle['label']>['position']>('ML');
expectAssignable<NonNullable<ElasticStyle['label']>['position']>('MR');
expectAssignable<NonNullable<ElasticStyle['label']>['position']>('TL');
expectAssignable<NonNullable<ElasticStyle['label']>['position']>('TM');
expectAssignable<NonNullable<ElasticStyle['label']>['position']>('TR');

expectAssignable<NonNullable<ElasticStyle['label']>['offset']>([1, 1]);
expectAssignable<NonNullable<ElasticStyle['label']>['minZoom']>(1);

// ElasticMarkerOptions
expectAssignable<ElasticMarkerOptions>({});
expectAssignable<ElasticMarkerOptions['map']>({} as any as Map);
expectAssignable<ElasticMarkerOptions['position']>(p1);
expectAssignable<ElasticMarkerOptions['position']>(p2);

expectAssignable<ElasticMarkerOptions['offset']>([1, 1]);
expectAssignable<ElasticMarkerOptions['offset']>(new Pixel(1, 1));
expectAssignable<ElasticMarkerOptions['zIndex']>(1);
expectAssignable<ElasticMarkerOptions['bubble']>(true);
expectAssignable<ElasticMarkerOptions['cursor']>('pointer');
// styles

expectAssignable<ElasticMarkerOptions['topWhenClick']>(true);
expectAssignable<ElasticMarkerOptions['visible']>(true);
expectAssignable<ElasticMarkerOptions['clickable']>(true);
expectAssignable<ElasticMarkerOptions['draggable']>(true);

expectAssignable<ElasticMarkerOptions['zoomStyleMapping']>({});
expectAssignable<ElasticMarkerOptions['zoomStyleMapping']>({
  4: 0,
  15: 0,
  16: 1,
  17: 1,
});
expectAssignable<ElasticMarkerOptions['styles']>([]);
expectAssignable<ElasticMarkerOptions['styles']>([
  {} as any as ElasticStyle,
  {} as any as ElasticStyle,
]);

expectAssignable<ElasticMarkerOptions['extData']>({});
expectAssignable<ElasticMarkerOptions<Record<string, string>>['extData']>({ a: 'a' });
expectError<ElasticMarkerOptions<Record<string, string>>['extData']>({ a: 1 });

// ElasticMarkerEventType
// expectAssignable<ElasticMarkerEventType>('hide');
// expectAssignable<ElasticMarkerEventType>('show');
expectAssignable<ElasticMarkerEventType>('click');
expectAssignable<ElasticMarkerEventType>('dblclick');
expectAssignable<ElasticMarkerEventType>('rightclick');
expectAssignable<ElasticMarkerEventType>('mousedown');
expectAssignable<ElasticMarkerEventType>('mouseup');
expectAssignable<ElasticMarkerEventType>('mouseover');
expectAssignable<ElasticMarkerEventType>('mouseout');
expectAssignable<ElasticMarkerEventType>('touchstart');
expectAssignable<ElasticMarkerEventType>('touchmove');
expectAssignable<ElasticMarkerEventType>('touchend');

//
const overlay1 = new ElasticMarker();
const overlay2 = new ElasticMarker<Record<string, string>>();
expectType<ElasticMarker>(overlay1);
expectAssignable<Marker<any>>(overlay1);
expectAssignable<Marker<Record<string, string>>>(overlay2);

// methods
