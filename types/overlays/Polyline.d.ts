import type { Bounds } from '../common/Bounds';
import type { LngLat, LngLatLike } from '../common/LngLat';
import type { Line } from '../common/Geometry';
import type Map from '../Map';
import type Overlay from './Overlay';

export type PolylineOptions<ExtraData = any> = {
  /**
   * polyline 路径，支持 lineString 和 MultiLineString
   */
  path?: Line | Line[];
  /** 多边形覆盖物的叠加顺序。地图上存在多个多边形覆盖物叠加时，通过该属性使级别较高的多边形覆盖物在上层显示 默认zIndex：10 */
  zIndex?: number;
  /** 是否将覆盖物的鼠标或touch等事件冒泡到地图上（自v1.3 新增）默认值：false */
  bubble?: boolean;
  /** 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor */
  cursor?: string;
  /** 线条颜色，使用16进制颜色代码赋值。默认值为#006600 */
  strokeColor?: string;
  /** 轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9 */
  strokeOpacity?: number;
  /** 轮廓线宽度 */
  strokeWeight?: number;
  /** 轮廓线样式，实线:solid，虚线:dashed */
  strokeStyle?: string;
  /**
   * 勾勒形状轮廓的虚线和间隙的样式，此属性在 strokeStyle 为dashed 时有效，此属性在 ie9+ 浏览器有效 取值：
   * - 实线：[0,0,0]
   * - 虚线：[10,10], [10,10] 表示10个像素的实线和10个像素的空白（如此反复）组成的虚线
   * - 点画线：[10,2,10], [10,2,10] 表示10个像素的实线和2个像素的空白 + 10个像素的实线和10个像素的空白 （如此反复）组成的虚线
   */
  strokeDasharray?: Array<number>;
  /** 是否显示描边,默认 `false` */
  isOutline?: boolean;
  /** 描边的宽度，默认为 `1` */
  borderWeight?: number;
  /** 线条描边颜色，此项仅在isOutline为true时有效 */
  outlineColor?: string;
  /** 折线拐点的绘制样式，默认值为'miter'尖角 */
  lineJoin?: 'miter' | 'round' | 'bevel';
  /** 折线两端线帽的绘制样式，默认值为 `butt` 无头 */
  lineCap?: 'butt' | 'round' | 'square';
  /** 是否绘制成大地线，默认false */
  geodesic?: boolean;
  /** 是否延路径显示白色方向箭头,默认false。建议折线宽度大于6时使用 */
  showDir?: boolean;

  /** 设置多边形是否可拖拽移动，默认为false */
  draggable?: boolean;
  /** 用户自定义属性，支持JavaScript API任意数据类型，如Polyline的id等 */
  extData?: ExtraData;

  // 以下为 3D mode 下生效
  /** 设置 polygon 是否离地绘制，默认值为0 。  */
  height?: number;

  /** 要显示该polygon的地图对象 */
  map?: Map;
};

export type PolylineEventType =
  | 'hide'
  | 'show'
  | 'click'
  | 'dblclick'
  | 'rightclick'
  | 'mousedown'
  | 'mouseup'
  | 'mouseover'
  | 'mouseout'
  | 'dragstart'
  | 'dragging'
  | 'dragend'
  | 'touchstart'
  | 'touchmove'
  | 'touchend';

/**
 * 构造多边形对象，通过PolylineOptions指定多边形样式
 * https://lbs.amap.com/api/javascript-api-v2/documentation#polyline
 *
 * @warning 目前 Polyline 对 GeoJSON.MultiPolyline.coordinates 的支持非常不稳定。谨慎使用。
 */
export declare class Polyline<ExtraData = any> extends Overlay<
  ExtraData,
  PolylineEventType
> {
  constructor(opts?: PolylineOptions<ExtraData>);
  /**
   * 获取折线路径的节点数组。
   */
  getPath(): LngLat[] | LngLat[][] | LngLat[][][];
  /**
   * 获取折线路径的节点数组。
   */
  setPath(coords: Line | Line[]): void;
  /**
   * 销毁折线
   */
  destroy(): void;
  /**
   * 获取折线的边界矩形区域
   */
  getBounds(): Bounds;
  /**
   * 移动折线
   * @warning 文档未明确说明
   * @param {number} dx
   * @param {number} dy
   */
  moveWithPos(dx: number, dy: number): void;
  /**
   * 获取折线的总长度（单位：米）
   * @param {boolean} isTerrain
   */
  getLength(isTerrain: boolean): number;
  /**
   * 判断坐标是否在折线上
   * @param {LngLatLike} point
   * @returns {boolean}
   */
  contains(point: LngLatLike): boolean;

  /** 获取当前Polyline海拔高度值 （此方法适用于 JSAPI 2.1Beta 及以上版本） */
  getPolylineHeight(): number;

  /**
   * @warning 文档中未明确说明，且未成功验证其存在性
   **/
  getEndDistance(...args: any[]): any;
  /**
   * @warning 文档中未明确说明，且未成功验证其存在性
   **/
  generateBuffer(...args: any[]): any;
}

export default Polyline;
