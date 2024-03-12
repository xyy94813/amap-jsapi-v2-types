import type Event from '../common/Event';
import type { Polyline, PolylineOptions } from '../overlays/Polyline';
import type { CircleMarkerOptions } from '../overlays/CircleMarker';
import type Map from '../Map';

export type PolylineEditorOptions = {
  /** 新创建的对象样式 */
  createOptions?: PolylineOptions;
  /** 编辑时样式 */
  editOptions?: PolylineOptions;
  /** 顶点样式 */
  controlPoint?: CircleMarkerOptions;
  /** 中间点样式 */
  midControlPoint?: CircleMarkerOptions;
};

export type PolylineEditorEventType =
  | 'addnode'
  | 'removenode'
  | 'adjust'
  | 'move'
  | 'add'
  | 'end';

/**
 * Polyline 编辑器
 * @docs https://lbs.amap.com/api/javascript-api-v2/documentation#polylineeditor
 */
export declare class PolylineEditor extends Event<PolylineEditorEventType> {
  constructor(map: Map, polyline?: Polyline, opts?: PolylineEditorOptions);
  /**
   * 设置编辑对象
   * @warning 与文档不一致，此处声明根据依据实现
   * @param {Polyline} target
   * @param {Function} cb
   **/
  setTarget(target?: Polyline, cb?: Function): void;
  /** 获取编辑对象  */
  getTarget(): Polyline | undefined;
  /**
   * 开始编辑对象
   * @warning 与文档不一致，此处声明根据依据实现
   * @param {Function} cb
   */
  open(cb?: Function): void;
  /** 停止编辑对象 */
  close(): void;
}

export default PolylineEditor;
