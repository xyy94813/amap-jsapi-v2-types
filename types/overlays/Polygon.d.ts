import type { Bounds } from '../common/Bounds';
import type { LngLat, LngLatLike } from '../common/LngLat';
import type { PolygonCoords, MultiPolygonCoords } from '../common/Geometry';
import type Map from '../Map';
import type Overlay from './Overlay';

export type PolygonOptions<ExtraData = any> = {
  path?: PolygonCoords | MultiPolygonCoords;
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
  /** 多边形填充颜色，使用16进制颜色代码赋值，如：#FFAA00 */
  fillColor?: string;
  /** 多边形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9 */
  fillOpacity?: number;
  /** 设置多边形是否可拖拽移动，默认为false */
  draggable?: boolean;
  /** 轮廓线样式，实线:solid，虚线:dashed */
  strokeStyle?: string;
  /**
   * 勾勒形状轮廓的虚线和间隙的样式，此属性在 strokeStyle 为dashed 时有效，此属性在 ie9+ 浏览器有效 取值：
   * - 实线：[0,0,0]
   * - 虚线：[10,10], [10,10] 表示10个像素的实线和10个像素的空白（如此反复）组成的虚线
   * - 点画线：[10,2,10], [10,2,10] 表示10个像素的实线和2个像素的空白 + 10个像素的实线和10个像素的空白 （如此反复）组成的虚线
   */
  strokeDasharray?: Array<number>;

  // 以下为 3D mode 下生效
  /** 设置 polygon 是否离地绘制，默认值为0 。  */
  height?: number;
  extrusionHeight?: number;
  roofColor?: string | string[] | Function;
  wallColor?: string | string[] | Function;

  /** 用户自定义属性，支持JavaScript API任意数据类型，如Polygon的id等 */
  extData?: ExtraData;

  /** 要显示该polygon的地图对象 */
  map?: Map;
};

export type PolygonEventType =
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
 * 构造多边形对象，通过PolygonOptions指定多边形样式
 * https://lbs.amap.com/api/javascript-api-v2/documentation#polygon
 *
 * @warning 目前 Polygon 对 GeoJSON.MultiPolygon.coordinates 的支持非常不稳定。谨慎使用。
 */
export declare class Polygon<ExtraData = any> extends Overlay<
  ExtraData,
  PolygonEventType
> {
  constructor(opts?: PolygonOptions<ExtraData>);
  /** 获取多边形轮廓线节点数组。其中lat和lng是经纬度参数。 */
  getPath(): LngLat[] | LngLat[][] | LngLat[][][];
  /** 设置多边形轮廓线节点数组，当为“环”多边形时，path为二维数组，数组元素为多边形轮廓线的节点坐标数组 */
  setPath(path: PolygonCoords | MultiPolygonCoords): void;
  /** 获取立面体高度值 */
  getExtrusionHeight(): number;
  /** 设置立面体高度值 */
  setExtrusionHeight(extrusionHeight: number): void;
  /** 获取当前多边形的矩形范围对象。 */
  getBounds(): Bounds;
  /** 销毁内存-多边形 */
  destroy(): void;
  /**
   * 获取多边形的面积（单位：平方米）
   * @param {boolean} isTerrain 若开启 terrain 则在地形基础上进行面积测量， 默认值为false
   **/
  getArea(isTerrain?: boolean): number;
  /** 判断指定点坐标是否在多边形范围内 */
  contains(point: LngLatLike): boolean;
  /** 获取离地多边形平面绝对海拔高度值 （此方法适用于 JSAPI v2.1Beta 及以上版本） */
  getPlaneHeight(): number;
}

export default Polygon;
