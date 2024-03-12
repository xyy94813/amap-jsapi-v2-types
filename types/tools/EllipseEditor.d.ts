import type Event from '../common/Event';
import type { Ellipse, EllipseOptions } from '../overlays/Ellipse';
import type { MarkerOptions } from '../overlays/Marker';
import type Map from '../Map';

export type EllipseEditorOptions = {
  /** 新创建的对象样式 */
  createOptions?: EllipseOptions;
  /** 编辑时样式 */
  editOptions?: EllipseOptions;
  /** 移动点样式 */
  movePoint?: MarkerOptions;
  /** reaizeX点样式 */
  resizeXPoint?: MarkerOptions;
  /** reaizeY点样式 */
  resizeYPoint?: MarkerOptions;
};

export type EllipseEditorEventType =
  | 'addnode'
  | 'removenode'
  | 'adjust'
  | 'move'
  | 'add'
  | 'end';

/**
 * 椭圆编辑器
 * @docs https://lbs.amap.com/api/javascript-api-v2/documentation#ellipseeditor
 */
export declare class EllipseEditor extends Event<EllipseEditorEventType> {
  constructor(map: Map, ellipse?: Ellipse, opts?: EllipseEditorOptions);
  /**
   * 设置编辑对象
   * @warning 与文档不一致，此处声明根据依据实现
   * @param {Circle} target
   * @param {Function} cb
   **/
  setTarget(target?: Ellipse, cb?: Function): void;
  /** 获取编辑对象  */
  getTarget(): Ellipse | undefined;
  /**
   * 开始编辑对象
   * @warning 与文档不一致，此处声明根据依据实现
   * @param {Function} cb
   */
  open(cb?: Function): void;
  /** 停止编辑对象 */
  close(): void;
}

export default EllipseEditor;
