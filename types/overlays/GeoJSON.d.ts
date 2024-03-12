import type Marker from './Marker';
import type Polygon from './Polygon';
import type Polyline from './Polyline';
import type { OverlayGroup } from './OverlayGroup';

// TODO: 后续考虑是否依赖 @types/geojson
type GeoJSONFeature = Record<string, any>;
type GeoJSONFeatureCollection = Record<string, any>;

export type GeoJSONOptions = {
  /** 目前只支持 GeoJSON.FeatureCollection */
  geoJSON?: GeoJSONFeatureCollection;
  getMarker?: (geojsonFeature: GeoJSONFeature, coords: any) => Marker;
  getPolyline?: (geojsonFeature: GeoJSONFeature, coords: any) => Polyline;
  getPolygon?: (geojsonFeature: GeoJSONFeature, coords: any) => Polygon;
};

/**
 * GeoJSON类，继承自OverLayGroup，可实现GeoJSON对象与OverlayGroup的相互转换
 *
 * @docs https://lbs.amap.com/api/javascript-api-v2/documentation#geojson
 */
export declare class GeoJSON extends OverlayGroup {
  constructor(opt: GeoJSONOptions);
  /** 将当前对象包含的覆盖物转换为GeoJSON对象 */
  importData(data: GeoJSONFeatureCollection): void;
  /** 将当前对象包含的覆盖物转换为GeoJSON对象 */
  toGeoJSON(): Record<string, any>;
}

export default GeoJSON;
