import type Bounds from '../common/Bounds';
import type { LngLat, LngLatLike } from '../common/LngLat';
import type Map from '../Map';
import type Overlay from './Overlay';

export type RectangleOptions<ExtraData = any> = {
  /** 矩形的范围 */
  bounds?: Bounds | [number, number, number, number];
  /** (default 10) 矩形覆盖物的叠加顺序。地图上存在多个矩形覆盖物叠加时，通过该属性使级别较高的矩形覆盖物在上层显示 */
  zIndex?: number;
  /** (default false) 是否将覆盖物的鼠标或touch等事件冒泡到地图上（自v1.3 新增） */
  bubble?: boolean;
  /** 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor */
  cursor?: string;
  /** (default #00D3FC) 线条颜色，使用16进制颜色代码赋值。默认值为 #00D3FC */
  strokeColor?: string;
  /** (default 0.9) 轮廓线透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.9 */
  strokeOpacity?: number;
  /** (default 2) 轮廓线宽度 */
  strokeWeight?: number;
  /** (default solid) 轮廓线样式，实线:solid，虚线:dashed */
  strokeStyle?: 'solid' | 'dashed';
  /** 勾勒形状轮廓的虚线和间隙的样式，此属性在strokeStyle 为dashed 时有效， 此属性在 ie9+ 浏览器有效 取值：
   * - 实线： [0,0,0]
   * - 虚线： [10,10],[10,10] 表示10个像素的实线和10个像素的空白（如此反复）组成的虚线
   * - 点画线： [10,2,10],[10,2,10] 表示10个像素的实线和2个像素的空白 + 10个像素的实线和10个像素的空白 （如此反复）组成的虚线
   */
  strokeDasharray?: number[];
  /** (default #00B2D5) 矩形填充颜色，使用16进制颜色代码赋值，如：#00B2D5 */
  fillColor?: string;
  /** (default 0.5) 矩形填充透明度，取值范围 [0,1],0 表示完全透明，1表示不透明。默认为0.5 */
  fillOpacity?: number;
  /** (default false) 设置矩形是否可拖拽移动，默认为false */
  draggable?: boolean;
  /** 用户自定义属性，支持JavaScript API任意数据类型，如Polygon的id等 */
  extData?: ExtraData;
  /**
   * 要显示该覆盖物的地图对象.
   * 推荐使用 setMap 方法，减少 render。
   **/
  map?: Map;
  /**
   * 设置矩形平面是否离地绘制，默认值为0。3D 模式生效。
   * @version 2.1-Beta
   */
  height?: number;
};

export type RectangleEventType =
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
 *
 */
export declare class Rectangle<ExtraData = any> extends Overlay<
  ExtraData,
  RectangleEventType
> {
  constructor(opt?: RectangleOptions<ExtraData>);
  /** 获取矩形的范围对象。  */
  getBounds(): Bounds;
  /** 设置矩形的范围 */
  setBounds(bounds: Bounds | [number, number, number, number]): void;
  /** 销毁内存-多边形 */
  destroy(): void;
  /** 获取矩形的中心点 */
  getCenter(): LngLat;
  /** 判断坐标是否在矩形内 */
  contains(point: LngLatLike): void;
  /**   * 获取多边形的面积（单位：平方米）   **/
  getArea(): number;
  /** 获取离地多边形平面绝对海拔高度值 （此方法适用于 JSAPI v2.1Beta 及以上版本） */
  getPlaneHeight(): number;
  /**
   * @warning 文档中未明确说明，且未成功验证其存在性
   **/
  generateBuffer(...args: any[]): any;
}

export default Rectangle;
