import type { LngLatLike } from '../common/LngLat';
import type { Bounds } from '../common/Bounds';
import type BaseLayer from './BaseLayer';
import type { VectorOverlay } from '../overlays/VectorOverlay';

export type VectorLayerOption = {
  visible?: boolean;
  zIndex?: number;
};

/**
 * 矢量图层
 *
 * https://lbs.amap.com/api/javascript-api-v2/documentation#vectorlayer
 *
 * @example
 * var layer = new AMap.VectorLayer();
 * map.add(layer);
 * var circle = new AMap.Circle({center: [116.4, 39.9], radius:1000});
 * layer.add(circle);
 */
export declare class VectorLayer extends BaseLayer {
  constructor(options?: VectorLayerOption);
  /**
   * 添加矢量覆盖物到集合中，不支持添加重复的覆盖物
   * @param {VectorOverlay | VectorOverlay[]} vectors
   */
  add(vectors: VectorOverlay | VectorOverlay[]): void;
  /**
   * 删除矢量覆盖物
   * @param vectors
   */
  remove(vectors: VectorOverlay | VectorOverlay[]): void;
  /**
   * 批量修改矢量覆盖物属性(包括线样式、样色等等)
   * @warning 文档中未明确说明，暂时保持与官方一致
   * @param opt
   */
  setOptions(opt: VectorLayerOption): void;
  /**
   * 判断传入的矢量覆盖物实例是否在VectorLayer这中
   * @param {VectorOverlay} vector
   */
  has(vector: VectorOverlay): boolean;
  /**
   * 清空 VectorLayer
   */
  clear(): void;
  /**
   * 根据经纬度查询矢量覆盖物信息
   * @param {LngLatLike} geometry
   * @returns {VectorOverlay | undefined} vector 矢量覆盖物
   */
  query(geometry: LngLatLike): VectorOverlay | undefined;
  /**
   * 获取 VectorOverlay 所有覆盖物显示的范围
   * @returns {Bounds|undefined} 经纬度范围值
   */
  getBounds(): Bounds | undefined;
}

export default VectorLayer;
