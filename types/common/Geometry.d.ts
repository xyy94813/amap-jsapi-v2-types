import type { LngLatLike } from './LngLat.d';

export type Position = LngLatLike;
export type Line = Position[];
export type Ring = Position[];
export type PolygonWithHoleCoords = Ring[];
export type PolygonCoords = Ring | PolygonWithHoleCoords;
export type MultiPolygonCoords = Ring[][];
