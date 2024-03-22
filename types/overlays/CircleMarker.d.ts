import type { LngLat, LngLatLike } from '../common/LngLat';
import type Overlay from './Overlay';

export type CircleMarkerOptions<ExtraData = any> = {
  /** 圆心位置 */
  center?: LngLatLike;
  /** 圆半径，单位:米 */
  radius?: number;
  /** 多边形覆盖物的叠加顺序。地图上存在多个多边形覆盖物叠加时，通过该属性使级别较高的多边形覆盖物在上层显示 */
  zIndex?: number;
  /** 是否将覆盖物的鼠标或touch等事件冒泡到地图上 */
  bubble?: boolean;
  /** 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor */
  cursor?: string;
  /** 轮廓线颜色，使用16进制颜色代码赋值。默认值为#00D3FC */
  strokeColor?: string;
  /** 轮廓线透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.9 */
  strokeOpacity?: number;
  /** 轮廓线宽度 */
  strokeWeight?: number;
  /**
   * 轮廓线样式，实线:solid，虚线:dashed. 默认：solid
   * @warning 文档未提及
   */
  //   strokeStyle?: 'solid' | 'dashed';
  /**
   * 勾勒形状轮廓的虚线和间隙的样式，此属性在strokeStyle 为dashed 时有效， 此属性在ie9+浏览器有效 取值：
   * - 实线： [0,0,0] 虚线： [10,10],[10,10] 表示10个像素的实线和10个像素的空白（如此反复）组成的虚线
   * - 点画线： [10,2,10],[10,2,10] 表示10个像素的实线和2个像素的空白 + 10个像素的实线和10个像素的空白 （如此反复）组成的虚线
   * @warning 文档未提及
   */
  //   strokeDasharray?: Array<number>;
  /** 多边形填充颜色，使用16进制颜色代码赋值，如：#00B2D5 */
  fillColor?: string;
  /** 多边形填充透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.5 */
  fillOpacity?: number;
  /** 设置多边形是否可拖拽移动，默认为false */
  draggable?: boolean;
  /** 用户自定义属性，支持JavaScript API任意数据类型，如Polygon的id等 */
  extData?: ExtraData;
};

export type CircleMarkerEventType =
  | 'hide'
  | 'show'
  | 'click'
  | 'dblclick'
  | 'rightclick'
  | 'mousedown'
  | 'mouseup'
  | 'mouseover'
  | 'mouseout'
  | 'touchstart'
  | 'touchmove'
  | 'touchend';

/**
 * 构造圆形对象，通过CircleOptions指定多边形样式
 *
 * https://lbs.amap.com/api/javascript-api-v2/documentation#circlemarker
 */
export declare class CircleMarker<ExtraData = any> extends Overlay<
ExtraData,
CircleMarkerEventType
> {
  constructor(opts?: CircleMarkerOptions<ExtraData>);

  /** 获取圆点中心 */
  getCenter(): LngLat;
  /** 设置圆中心点 */
  setCenter(lnglat: LngLatLike): void;
  /** 获取圆点的半径 */
  getRadius(): number;
  /** 设置圆点的半径 */
  setRadius(radius: number): void;
  /** 判断指定点坐标是否在圆内 */
  contains(point: LngLatLike): boolean;
  /** 销毁内存-CircleMarker */
  destroy(): void;

  /** 获取当前CircleMarker 的绝对高度 */
  getCurAltitude(): number;

  /**
   * @warning 文档中未明确说明，且未成功验证其存在性
   **/
  generateBuffer(...args: any[]): any;
}

export default CircleMarker;
