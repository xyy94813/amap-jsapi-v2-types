import type Event from '../common/Event';
import type { Polygon, PolygonOptions } from '../overlays/Polygon';
import type { CircleMarkerOptions } from '../overlays/CircleMarker';
import type Map from '../Map';

export type PolygonEditorOptions = {
  /** 新创建的对象样式 */
  createOptions?: PolygonOptions;
  /** 编辑时样式 */
  editOptions?: PolygonOptions;
  /** 顶点样式 */
  controlPoint?: CircleMarkerOptions;
  /** 中间点样式 */
  midControlPoint?: CircleMarkerOptions;
};

export type PolygonEditorEventType =
  | 'addnode'
  | 'removenode'
  | 'adjust'
  | 'move'
  | 'add'
  | 'end';

/**
 * Polygon 编辑器
 * @docs https://lbs.amap.com/api/javascript-api-v2/documentation#polygoneditor
 */
export declare class PolygonEditor extends Event<PolygonEditorEventType> {
  constructor(map: Map, polygon?: Polygon, opts?: PolygonEditorOptions);
  /**
   * 设置编辑对象
   * @warning 与文档不一致，此处声明根据依据实现
   * @param {Polygon} target
   * @param {Function} cb
   **/
  setTarget(target?: Polygon, cb?: Function): void;
  /** 获取编辑对象  */
  getTarget(): Polygon | undefined;
  /** 设置吸附多边形 */
  setAdsorbPolygons(polygon: Polygon | Polygon[]): void;
  /** 添加吸附多边形 */
  addAdsorbPolygons(polygon: Polygon | Polygon[]): void;
  /** 删除吸附多边形 */
  removeAdsorbPolygons(polygon: Polygon[]): void;
  /** 清空所有的吸附多边形 */
  clearAdsorbPolygons(): void;
  /**
   * 开始编辑对象
   * @warning 与文档不一致，此处声明根据依据实现
   * @param {Function} cb
   */
  open(cb?: Function): void;
  /** 停止编辑对象 */
  close(): void;
}

export default PolygonEditor;
