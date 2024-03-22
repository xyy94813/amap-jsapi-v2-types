/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import { Overlay } from './Overlay';
import LngLat from '../common/LngLat';
import {
  CircleMarkerOptions,
  CircleMarkerEventType,
  CircleMarker,
} from './CircleMarker';

const p1: [number, number] = [118, 23];
const p2 = new LngLat(119, 23);

// CircleMarkerOptions
expectAssignable<CircleMarkerOptions>({});
expectAssignable<CircleMarkerOptions['center']>(p1);
expectAssignable<CircleMarkerOptions['center']>(p2);

expectAssignable<CircleMarkerOptions['radius']>(1);
expectAssignable<CircleMarkerOptions['zIndex']>(1);
expectAssignable<CircleMarkerOptions['bubble']>(true);
expectAssignable<CircleMarkerOptions['cursor']>('pointer');
expectAssignable<CircleMarkerOptions['strokeColor']>('red');
expectAssignable<CircleMarkerOptions['strokeOpacity']>(1);
expectAssignable<CircleMarkerOptions['strokeWeight']>(1);

expectAssignable<CircleMarkerOptions['fillColor']>('red');
expectAssignable<CircleMarkerOptions['fillOpacity']>(1);

expectAssignable<CircleMarkerOptions['draggable']>(true);

expectAssignable<CircleMarkerOptions['extData']>({});
expectAssignable<CircleMarkerOptions<Record<string, string>>['extData']>({ a: 'a' });
expectError<CircleMarkerOptions<Record<string, string>>['extData']>({ a: 1 });

// CircleMarkerEventType
expectAssignable<CircleMarkerEventType>('hide');
expectAssignable<CircleMarkerEventType>('show');
expectAssignable<CircleMarkerEventType>('click');
expectAssignable<CircleMarkerEventType>('dblclick');
expectAssignable<CircleMarkerEventType>('rightclick');
expectAssignable<CircleMarkerEventType>('mousedown');
expectAssignable<CircleMarkerEventType>('mouseup');
expectAssignable<CircleMarkerEventType>('mouseover');
expectAssignable<CircleMarkerEventType>('mouseout');
expectAssignable<CircleMarkerEventType>('touchstart');
expectAssignable<CircleMarkerEventType>('touchmove');
expectAssignable<CircleMarkerEventType>('touchend');

//
const overlay1 = new CircleMarker();
const overlay2 = new CircleMarker<Record<string, string>>();
expectType<CircleMarker>(overlay1);
expectAssignable<Overlay<any, CircleMarkerEventType>>(overlay1);
expectAssignable<Overlay<Record<string, string>, CircleMarkerEventType>>(overlay2);

// methods
expectType<LngLat>(overlay1.getCenter());

expectType<void>(overlay1.setCenter(p1));
expectType<void>(overlay1.setCenter(p2));

expectType<number>(overlay1.getRadius());
expectType<void>(overlay1.setRadius(1));

expectType<void>(overlay1.destroy());

expectType<boolean>(overlay1.contains(p1));
expectType<boolean>(overlay1.contains(p2));

expectType<number>(overlay1.getCurAltitude());
