import { expectType, expectAssignable } from 'tsd';
import { LngLat, LngLatLike } from './LngLat';

const lngLat = new LngLat(118, 23);
expectType<LngLat>(lngLat);
expectType<LngLat>(new LngLat(118, 23, true));
expectType<LngLat>(new LngLat(118, 23, false));

// properties
expectType<string>(lngLat.className);
expectType<number>(lngLat.lat);
expectType<number>(lngLat.lng);
expectType<[number, number]>(lngLat.pos);

// methods
expectType<typeof lngLat>(lngLat.setLng(1));
expectType<typeof lngLat>(lngLat.setLat(1));
expectType<number>(lngLat.getLng());
expectType<number>(lngLat.getLat());
expectType<boolean>(lngLat.equals(lngLat));
expectType<LngLat>(lngLat.add(lngLat));
expectType<LngLat>(lngLat.add(lngLat, true));
expectType<LngLat>(lngLat.add(lngLat, false));
expectType<LngLat>(lngLat.subtract(lngLat));
expectType<LngLat>(lngLat.subtract(lngLat, true));
expectType<LngLat>(lngLat.subtract(lngLat, false));
expectType<LngLat>(lngLat.divideBy(1));
expectType<LngLat>(lngLat.divideBy(1, true));
expectType<LngLat>(lngLat.divideBy(1, false));
expectType<LngLat>(lngLat.multiplyBy(1));
expectType<LngLat>(lngLat.multiplyBy(1, true));
expectType<LngLat>(lngLat.multiplyBy(1, false));
expectType<LngLat>(lngLat.offset(1, 1));
expectType<string>(lngLat.toString());
expectType<[number, number]>(lngLat.toArray());
expectType<[number, number]>(lngLat.toJSON());
expectType<number>(lngLat.distance(lngLat));
expectType<number>(lngLat.distanceTo(lngLat));

// static methods
expectType<LngLat>(LngLat.from([118, 23]));
expectType<LngLat>(LngLat.from(lngLat));

// LngLatLike
expectAssignable<LngLatLike>(new LngLat(118, 23));
expectAssignable<LngLatLike>([118, 23]);
