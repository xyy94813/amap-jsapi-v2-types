import type Event from '../common/Event';
import type Map from '../Map';
import type BaseLayer from './BaseLayer';

export type LayerGroupEventType = string;

/**
 * LayerGroup 用来包装其它图层类的实例，对实例集合做批量操作，避免开发者对多个需要设置同样属性的图层实例做循环处理。
 *
 * @docs https://lbs.amap.com/api/javascript-api-v2/documentation#layergroup
 */
export declare class LayerGroup<
  Layer extends BaseLayer = any,
> extends Event<LayerGroupEventType> {
  constructor(layers?: Layer[]);
  /** 添加到地图上面 */
  setMap(map?: Map): this;
  /** 判断传入的图层实例是否在集合中 */
  hasLayer(layer: Layer): boolean;
  /** 添加单个图层到集合中，不支持添加重复的图层 */
  addLayer(layer: Layer): void;
  /** 添加图层数组到集合中，不支持添加重复的图层 */
  addLayers(layers: Layer[]): void;
  /** 从集合中删除传入的图层实例 */
  removeLayer(layer: Layer): this;
  /** 从集合中删除传入的图层实例 */
  removeLayers(layers: Layer[]): void;
  /** 获取组里所有对象，包括图层和覆盖物 */
  getLayers(): Layer[];
  /** 清空图层 */
  clearLayers(): void;
  /**  对集合中的图层做迭代操作 */
  eachLayer(
    fn?: (layer: Layer, index: number, collections: Layer[]) => any,
  ): void;
  /** 修改图层属性(包括线样式、样色等等) */
  setOptions(opts: any): this;
  /** 设置图层隐藏 */
  hide(): this;
  /** 设置图层可见 */
  show(): this;
  /** 重新加载图层资源，重新渲染 */
  reload(): this;
}

export default LayerGroup;
