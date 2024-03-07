import type { BaseLayer } from '../layers/BaseLayer';
import type { Control } from './Control';

/**
 * 图层信息，需要包含图层对象
 * @public
 */
export type MapTypeLayerInfo = {
  id: string;
  enable: string;
  name: string;
  type: 'base' | 'overlay';
  layer: BaseLayer;
  show: boolean;
};

/**
 * 初始化 MapType 的可选项
 */
export type MapTypeOptions = {
  defaultType?: number;
  showTraffic?: boolean;
  showRoad?: boolean;
};

/**
 * 地图类型切换插件。用户通过该插件进行地图切换。
 * https://lbs.amap.com/api/javascript-api-v2/documentation#maptype
 *
 * @example
 * map.plugin(["AMap.MapType"], () => {
 *   const mapType = new AMap.MapType();
 *   mapType.addTo(map); // 添加到地图
 *   // map.add(mapType);
 * });
 */
export declare class MapType extends Control {
  /** 以下为私有属性 */
  _container: HTMLElement;

  constructor(options?: MapTypeOptions);
  /**
   * 添加一个图层
   */
  addLayer(layerInfo: MapTypeLayerInfo): void;
  /**
   * 移除一个图层
   */
  removeLayer(id: MapTypeLayerInfo['id']): void;
}
