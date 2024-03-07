import type Event from '../common/Event';
import type Map from '../Map';

export type ControlPositionObject = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

export type ControlPosition = 'LT' | 'RT' | 'LB' | 'RB' | ControlPositionObject;

export type CommonControlConfig = {
  position?: ControlPosition;
  offset?: [number, number];
};

export type ControlEventType = 'hide' | 'show';

/**
 * 地图控件基类，可扩展做自定义地图控件。
 * https://lbs.amap.com/api/javascript-api-v2/documentation#control
 */
export declare class Control extends Event<ControlEventType> {
  map: Map;

  constructor(opts: CommonControlConfig);
  /**
   * 添加控件到地图上
   *
   * @param {Map} map 地图实例
   */
  addTo(map: Map): void;
  /**
   * 从地图上移除控件
   */
  remove(): void;
  /**
   * 设置控件可见
   */
  show(): void;
  /**
   * 设置控件隐藏
   */
  hide(): void;
  /**
   * 从地图上移除控件
   * @warning 文档中未提及，验证后存在，不建议使用
   * @param {Map} map 地图实例
   */
  removeFrom(map: Map): void;
}
