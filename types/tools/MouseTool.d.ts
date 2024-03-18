import type Event from '../common/Event';
import type { MarkerOptions } from '../overlays/Marker';
import type { CircleOptions } from '../overlays/Circle';
import type { RectangleOptions } from '../overlays/Rectangle';
import type { PolylineOptions } from '../overlays/Polyline';
import type { PolygonOptions } from '../overlays/Polygon';
import type Map from '../Map';

export type MouseToolEventType = 'draw';
/**
 * 鼠标工具插件。通过该插件，可进行鼠标画标记点、线、多边形、矩形、圆、距离量测、面积量测、拉框放大、拉框缩小等功能。
 * @docs https://lbs.amap.com/api/javascript-api-v2/documentation#mousetool
 */
export declare class MouseTool extends Event<MouseToolEventType> {
  constructor(map: Map, toolBubble?: boolean);
  /** 开启鼠标画点标注模式。 */
  marker(options?: MarkerOptions): void;
  /** 开启鼠标画圆模式。 */
  circle(options?: CircleOptions): void;
  /** 开启鼠标画矩形模式。 */
  rectangle(options?: RectangleOptions): void;
  /** 开启鼠标画折线模式。 */
  polyline(options?: PolylineOptions): void;
  /** 开启鼠标画多边形模式。 */
  polygon(options?: PolygonOptions): void;
  /** 开启面积量测模式。鼠标在地图上单击绘制量测区域，鼠标左键双击或右键单击结束当前量测操作，并显示本次量测结果。 */
  measureArea(opts?: PolygonOptions): void;
  /** 开启距离量测模式。 */
  rule(opts?: PolylineOptions): void;
  /** 开启鼠标拉框放大模式。 */
  rectZoomIn(opts: RectangleOptions): void;
  /** 开启鼠标拉框缩小模式。鼠标可在地图上拉框缩小地图。矩形框样式参考PolygonOptions设置 */
  rectZoomOut(opts: RectangleOptions): void;
  /**
   * 关闭当前鼠标操作。
   * @param {boolean} isClose 鼠标操作关闭的同时清除地图上绘制的所有覆盖物对象。默认为 false.
   */
  close(isClose?: boolean): void;
}

export default MouseTool;
