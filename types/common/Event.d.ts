import type LngLat from './LngLat';
import type Pixel from './Pixel';

/**
 * JSAPI 的所有类型（地图、图层、覆盖物等）都实现了事件接口，用于给当前实例对象绑定、移除、清理事件回调
 * https://lbs.amap.com/api/javascript-api-v2/documentation#event
 */
export declare abstract class Event<EventType = string> {
  /**
   * 给实例绑定事件回调函数，同一个类型、同一个回调函数、同一个上下文只会绑定一次
   * @param type
   * @param fn
   * @param ctx
   * @param once
   * @returns {this}
   */
  on(type: EventType, fn: Function, ctx?: any, once?: boolean): this;
  /**
   * 移除当前实例的某一个事件回调
   * @param type
   * @param fn
   * @param ctx
   */
  off(type: EventType, fn: Function, ctx?: any): this;
  /**
   * 模拟触发当前实例的某个事件
   * @param type
   * @param data
   */
  emit(type: EventType, data: any): this;
  /**
   * 判断当前实例是否已经绑定了某个事件回调
   * @param type
   */
  hasEvents(type: EventType): boolean;
  /**
   * 清除当前实例某一类型的全部事件回调
   * @param type
   */
  clearEvents(type: EventType): this;
}

// TODO: 待确认和验证
export type MapsEvent<EventType = string> = {
  type: EventType;
  pixel?: Pixel;
  lnglat?: LngLat;
  target?: any;
};

export default Event;
