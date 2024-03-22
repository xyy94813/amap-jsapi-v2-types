/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import Marker from './Marker';
import Polyline from './Polyline';
import Polygon from './Polygon';
import { OverlayGroup } from './OverlayGroup';
import { GeoJSONOptions, GeoJSON } from './GeoJSON';

const mockMark = {} as any as Marker;
const mockPolyline = {} as any as Polyline;
const mockPolygon = {} as any as Polygon;
const mockGeoJSONFeatureCollection = { type: 'FeatureCollection', features: [] };

// GeoJSONOptions
expectAssignable<GeoJSONOptions>({});
expectAssignable<GeoJSONOptions['geoJSON']>(mockGeoJSONFeatureCollection);
expectAssignable<GeoJSONOptions['getMarker']>(() => mockMark);
expectAssignable<GeoJSONOptions['getPolyline']>(() => mockPolyline);
expectAssignable<GeoJSONOptions['getPolygon']>(() => mockPolygon);

const amapGeoJSON = new GeoJSON({});
expectType<GeoJSON>(amapGeoJSON);
expectAssignable<OverlayGroup>(amapGeoJSON);

// methods
expectType<void>(amapGeoJSON.importData(mockGeoJSONFeatureCollection));
expectType<Record<string, any>>(amapGeoJSON.toGeoJSON());
