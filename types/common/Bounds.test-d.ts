import { expectType, expectAssignable } from 'tsd';
import { LngLat } from './LngLat';
import { Bounds, BoundsLike } from './Bounds';

const bounds = new Bounds(new LngLat(118, 23), new LngLat(119, 24));
expectType<Bounds>(bounds);

// properties
expectType<string>(bounds.className);
expectType<LngLat>(bounds.southWest);
expectType<LngLat>(bounds.northEast);

// methods
expectType<LngLat>(bounds.getSouthWest());
expectType<LngLat>(bounds.getNorthEast());
expectType<LngLat>(bounds.getNorthWest());
expectType<LngLat>(bounds.getSouthEast());
expectType<boolean>(bounds.contains([118, 12]));
expectType<boolean>(bounds.contains(new LngLat(118, 23)));
expectType<LngLat>(bounds.getCenter());
expectType<string>(bounds.toString());
expectType<number[]>(bounds.toJSON());
expectType<number>(bounds.getWidth());
expectType<number>(bounds.getHeight());

// BoundsLike
expectAssignable<BoundsLike>(new Bounds(new LngLat(118, 23), new LngLat(119, 24)));
expectAssignable<BoundsLike>([118, 23, 119, 24]);
