import type Event from '../common/Event';
import type { Circle, CircleOptions } from '../overlays/Circle';
import type { MarkerOptions } from '../overlays/Marker';
import type Map from '../Map';

export type CircleEditorOptions = {
  /** 新创建的对象样式 */
  createOptions?: CircleOptions;
  /** 编辑时样式 */
  editOptions?: CircleOptions;
  /** 移动点样式 */
  movePoint?: MarkerOptions;
  /** reaize点样式 */
  resizePoint?: MarkerOptions;
};

export type CircleEditorEventType =
  | 'addnode'
  | 'removenode'
  | 'adjust'
  | 'move'
  | 'add'
  | 'end';

/**
 * 圆编辑插件。用于编辑AMap.Circle对象，功能包括使用鼠标改变圆半径大小、拖拽圆心改变圆的位置。
 * @docs https://lbs.amap.com/api/javascript-api-v2/documentation#circleeditor
 */
export declare class CircleEditor extends Event<CircleEditorEventType> {
  constructor(map: Map, circle?: Circle, opts?: CircleEditorOptions);
  /**
   * 设置编辑对象
   * @warning 与文档不一致，此处声明根据依据实现
   * @param {Circle} target
   * @param {Function} cb
   **/
  setTarget(target?: Circle, cb?: Function): void;
  /** 获取编辑对象  */
  getTarget(): Circle | undefined;
  /**
   * 开始编辑对象
   * @warning 与文档不一致，此处声明根据依据实现
   * @param {Function} cb
   */
  open(cb?: Function): void;
  /** 停止编辑对象 */
  close(): void;
}

export default CircleEditor;
