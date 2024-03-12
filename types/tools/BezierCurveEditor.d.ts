import type Event from '../common/Event';
import type { BezierCurve, BezierCurveOptions } from '../overlays/BezierCurve';
import type { MarkerOptions } from '../overlays/Marker';
import type { PolylineOptions } from '../overlays/Polyline';
import type Map from '../Map';

export type BezierCurveEditorOptions = {
  /** 新创建的对象样式 */
  createOptions?: BezierCurveOptions;
  /** 编辑时样式 */
  editOptions?: BezierCurveOptions;
  /** 顶点样式 */
  controlPoint?: MarkerOptions;
  /** 中间点样式 */
  midControlPoint?: MarkerOptions;
  /** 贝塞尔控制点样式 */
  bezierControlPoint?: MarkerOptions;
  /** 贝塞尔控制线样式 */
  bezierControlLine?: PolylineOptions;
};

export type BezierCurveEditorEventType =
  | 'addnode'
  | 'removenode'
  | 'adjust'
  | 'move'
  | 'add'
  | 'end';

/**
 * 贝塞尔曲线编辑器
 * @docs https://lbs.amap.com/api/javascript-api-v2/documentation#beziercurveeditor
 */
export declare class BezierCurveEditor extends Event<BezierCurveEditorEventType> {
  constructor(map: Map, bezier?: BezierCurve, opts?: BezierCurveEditorOptions);
  /**
   * 设置编辑对象
   * @warning 与文档不一致，此处声明根据依据实现
   * @param {Circle} target
   * @param {Function} cb
   **/
  setTarget(target?: BezierCurve, cb?: Function): void;
  /** 获取编辑对象  */
  getTarget(): BezierCurve | undefined;
  /**
   * 开始编辑对象
   * @warning 与文档不一致，此处声明根据依据实现
   * @param {Function} cb
   */
  open(cb?: Function): void;
  /** 停止编辑对象 */
  close(): void;
}

export default BezierCurveEditor;
