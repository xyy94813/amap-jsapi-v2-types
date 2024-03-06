import type Event from '../common/Event';
import type Map from '../Map';

export type CommonLayerOptions = {
  zooms?: [number, number];
  opacity?: number;
  visible?: boolean;
  zIndex?: number;
};

export declare class BaseLayer<
  LayerEventType = string,
> extends Event<LayerEventType> {
  CLASS_NAME: string;
  show(): void;
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
   * 设置图层透明度
   * @param opacity 范围 [0 ~ 1]
   * @returns {number}
   */
  setOpacity(opacity: number): number;
  /**
   * 获取图层透明度
   * @returns {number}
   */
  getOpacity(): number;
  /**
   * 获取图层参数信息
   * @returns {Object}
   * */
  getOptions(): Object;
  /**
   * 获取该图层可显示的级别范围，默认取值范围为[2-20]
   */
  getZooms(): [number, number];
  /**
   * 设置该图层图层可显示的级别范围
   *
   * @param {[number, number]} zooms 缩放范围
   *
   */
  setZooms(zooms: [number, number]): void;
  /**
   * 销毁图层
   * 文档未提及。验证后存在。
   */
  destroy(): void;
  /**
   * 设置地图对象。
   * 文档未提及。验证后存在。
   *
   * @param {Map} map
   */
  setMap(map: Map): void;
  /**
   * 获取绑定的 Map 实例
   * 文档未提及。验证后存在。
   *
   * @param {Map} map
   */
  getMap(): Map;

  // event
  on(type: LayerEventType, fn: Function, ctx?: any, once?: boolean): this;
  off(type: LayerEventType, fn?: Function, ctx?: any): this;
  emit(type: LayerEventType, ...args: any[]): this;
  hasEvents(type: LayerEventType): boolean;
  clearEvents(type: LayerEventType): this;
}

export default BaseLayer;
