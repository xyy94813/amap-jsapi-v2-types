import type Event from '../common/Event';
import type { Map } from '../Map';

export type HeatMap3DOptions = {
  heightScale?: number;
  heightBezier?: number[];
  gridSize?: number;
};

export type HeatMapOption = {
  radius?: number;
  gradient?: Object;
  '3d'?: HeatMap3DOptions;

  zooms?: [number, number];
  opacity?: number;
  visible?: boolean;
  zIndex?: number;

  // 以下文档未提及，验证后存在
  blur?: number;
  rejectMapMask?: boolean;
  renderOnZooming?: boolean;
};

/**
 * 热力图，基于第三方heatmap.js实现，以特殊高亮的形式显示数据密集程度。
 * 根据密集程度的不同，图上会呈现不同的颜色，以直观的形式展现数据密度。
 * API引用了heatmap.js最新版本v2.0，v2.0基于新的渲染模型，具有更高的渲染效率和更强的性能。
 * 支持chrome、firefox、safari、ie9及以上浏览器。
 *
 * https://lbs.amap.com/api/javascript-api-v2/documentation#heatmap
 *
 * 实际验证过程 HeatMap 的实现，没有采用继成 BaseLayer 的方式
 * 但是拥有大多数类似的 API
 *
 * @example
 * map.plugin(['AMap.HeatMap'], function() {
 *   heatmap = new AMap.HeatMap(map, opts: HeatMapOptions)
 * })
 */
export declare class HeatMap extends Event {
  CLASS_NAME: string;
  constructor(map: Map, options?: HeatMapOption);
  /**
   * 设置热力图展现的数据集，dataset数据集格式为： { max: Number 权重的最大值, data: Array 坐标数据集 }
   * @param {{ max: number; data?: any[] }} dataset
   */
  setDataSet(dataset: { max: number; data?: any[] }): void;
  /**
   * 输出热力图的数据集，数据结构同setDataSet中的数据集
   * @returns {{ max: number; data?: any[] }}
   */
  getDataSet(): Parameters<typeof this.setDataSet>[0];
  /**
   * 向热力图数据集中添加坐标点，count不填写时默认：1
   * @param longitude
   * @param latitude
   * @param count
   */
  addDataPoint(longitude: string, latitude: string, count?: number): void;
  /**
   * 显示热力图
   * @warning 文档未提及，验证存在
   */
  show(): void;
  /**
   * 隐藏热力图
   * @warning 文档未提及，验证存在
   */
  hide(): void;
  /**
   * 设置图层层级，数字越大图层层级越高
   * @param {number} zIndex
   */
  setzIndex(zIndex: number): number;
  /**
   * 获取图层层级
   * @returns {number}
   */
  getzIndex(): number;
  /**
   * 获取图层参数信息
   * @param {HeatMapOption} options
   * @returns {void}
   * */
  setOptions(options: HeatMapOption): void;
  /**
   * 获取图层参数信息
   * @returns {Object}
   * */
  getOptions(): HeatMapOption;
  /**
   * 设置地图对象。
   *
   * @param {Map} map
   */
  setMap(map: Map): void;
  /**
   * 获取绑定的 Map 实例
   *
   * @param {Map} map
   */
  getMap(): Map;
}

export default HeatMap;
