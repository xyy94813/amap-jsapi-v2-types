import { Ring } from '../common/Geometry';
import type { BaseLayer, CommonLayerOptions } from './BaseLayer';

type CommonStyleOption = {
  sourceLayer?: string;
  injection?: any[] | Function;
  visible?: boolean | Function;
};

type PolygonStyle = CommonStyleOption & {
  color?: string | Function;
  borderWidth?: number | Function;
  dash?: number[] | Function;
  borderColor?: string | Function;
};
type LineStyle = CommonStyleOption & {
  color?: string | Function;
  lineWidth?: number | Function;
  dash?: number[] | Function;
  borderColor?: string | Function;
};
type PointStyle = CommonStyleOption & {
  radius?: string | Function;
  color?: string | Function;
  borderWidth?: number | Function;
  borderColor?: string | Function;
};
type PolyhedronStyle = CommonStyleOption & {
  topColor?: string | Function;
  sideColor?: string | Function;
  texture?: string | Function;
};

type MapboxVTLayerStyle = {
  polygon?: PolygonStyle;
  line?: LineStyle;
  point?: PointStyle;
  polyhedron?: PolyhedronStyle;
};

export type MapboxVTLayerOptions = CommonLayerOptions & {
  /** MVT 数据的链接地址 */
  url?: string;
  /** 瓦片数据等级范围，超过范围会使用最大/最小等级的数据 */
  dataZooms?: [number, number];
  /** 验证后为必填 */
  styles: MapboxVTLayerStyle;
};

export type MapboxVectorTileLayerEventType = string;

/**
 * 为了满足基于矢量瓦片块的数据可视化、矢量瓦片边界展示等开发需求，通过 AMap.MapboxVectorTileLayer 插件提供了简易矢量瓦片图层。
 * 此图层可以使用标准的 MVT 瓦片服务作为数据源。
 * 可以配合 “GeoHub-数据中心” 发布的矢量瓦片服务。
 * https://lbs.amap.com/api/javascript-api-v2/documentation#mapboxvectortilelayer
 */
export declare class MapboxVectorTileLayer extends BaseLayer<MapboxVectorTileLayerEventType> {
  constructor(options?: MapboxVTLayerOptions);
  /**
   * 设置样式信息
   * @param styles
   */
  setStyles(styles: MapboxVTLayerStyle): void;
  /**
   * 获取样式信息
   */
  getStyles(): MapboxVTLayerStyle;
  /**
   * 获取矩形范围的要素
   * TODO: 待完善返回值
   *
   * @param {Ring} rect
   * @param {string} type
   */
  filterByRect(rect: Ring, type?: 'all' | 'point' | 'polygon' | 'line'): any[];
}

export default MapboxVectorTileLayer;
