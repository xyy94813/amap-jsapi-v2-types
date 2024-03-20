import { expectAssignable } from 'tsd';
import { LngLat } from './LngLat';
import {
  Position,
  Line,
  Ring,
  PolygonWithHoleCoords,
  PolygonCoords,
  MultiPolygonCoords,
} from './Geometry';

expectAssignable<Position>([118, 23]);
expectAssignable<Position>(new LngLat(118, 23));

expectAssignable<Line>([[118, 23], [118, 24]]);
expectAssignable<Line>([new LngLat(118, 23), new LngLat(118, 24)]);

expectAssignable<Ring>([[118, 23], [118, 24], [118, 25]]);
expectAssignable<Ring>([new LngLat(118, 23), new LngLat(118, 24), new LngLat(118, 25)]);

expectAssignable<PolygonWithHoleCoords>([
  [[118, 23], [118, 24], [118, 25]], // outer
  [[118, 23], [118, 24], [118, 25]], // hole
  [[118, 23], [118, 24], [118, 25]], // hole
]);
expectAssignable<PolygonWithHoleCoords>([
  [new LngLat(118, 23), new LngLat(118, 24), new LngLat(118, 25)], // outer
  [new LngLat(118, 23), new LngLat(118, 24), new LngLat(118, 25)], // hole
  [new LngLat(118, 23), new LngLat(118, 24), new LngLat(118, 25)], // hole
]);

// ring
expectAssignable<PolygonCoords>([[118, 23], [118, 24], [118, 25]]);
// ring with hole
expectAssignable<PolygonCoords>([
  [[118, 23], [118, 24], [118, 25]], // outer
  [[118, 23], [118, 24], [118, 25]], // hole
  [[118, 23], [118, 24], [118, 25]], // hole
]);

expectAssignable<MultiPolygonCoords>(
  [
    // polygon1
    [
      [[118, 23], [118, 24], [118, 25]], // outer
      [[118, 23], [118, 24], [118, 25]], // hole
      [[118, 23], [118, 24], [118, 25]], // hole
    ],
    // polygon2
    [
      [[118, 23], [118, 24], [118, 25]], // outer
      [[118, 23], [118, 24], [118, 25]], // hole
      [[118, 23], [118, 24], [118, 25]], // hole
    ],
  ],
);
expectAssignable<MultiPolygonCoords>([
  // polygon1
  [
    [new LngLat(118, 23), new LngLat(118, 24), new LngLat(118, 25)], // outer
    [new LngLat(118, 23), new LngLat(118, 24), new LngLat(118, 25)], // hole
    [new LngLat(118, 23), new LngLat(118, 24), new LngLat(118, 25)], // hole
  ],
  // polygon2
  [
    [new LngLat(118, 23), new LngLat(118, 24), new LngLat(118, 25)], // outer
    [new LngLat(118, 23), new LngLat(118, 24), new LngLat(118, 25)], // hole
    [new LngLat(118, 23), new LngLat(118, 24), new LngLat(118, 25)], // hole
  ],
]);
