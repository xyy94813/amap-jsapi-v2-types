import type Event from '../common/Event';
import type { Rectangle, RectangleOptions } from '../overlays/Rectangle';
import type { MarkerOptions } from '../overlays/Marker';
import type Map from '../Map';

export type RectangleEditorOptions = {
  /** 新创建的对象样式 */
  createOptions?: RectangleOptions;
  /** 编辑时样式 */
  editOptions?: RectangleOptions;
  /** 西南点样式 */
  southWestPoint?: MarkerOptions;
  /** 东北点样式 */
  northEastPoint?: MarkerOptions;
};

export type RectangleEditorEventType =
  | 'addnode'
  | 'removenode'
  | 'adjust'
  | 'move'
  | 'add'
  | 'end';

/**
 * 矩形编辑器
 * @docs https://lbs.amap.com/api/javascript-api-v2/documentation#rectangleeditor
 */
export declare class RectangleEditor extends Event<RectangleEditorEventType> {
  constructor(map: Map, rect?: Rectangle, opts?: RectangleEditorOptions);
  /**
   * 设置编辑对象
   * @warning 与文档不一致，此处声明根据依据实现
   * @param {Circle} target
   * @param {Function} cb
   **/
  setTarget(target?: Rectangle, cb?: Function): void;
  /** 获取编辑对象  */
  getTarget(): Rectangle | undefined;
  /**
   * 开始编辑对象
   * @warning 与文档不一致，此处声明根据依据实现
   * @param {Function} cb
   */
  open(cb?: Function): void;
  /** 停止编辑对象 */
  close(): void;
}

export default RectangleEditor;
