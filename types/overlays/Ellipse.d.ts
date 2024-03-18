import type { LngLat, LngLatLike } from '../common/LngLat';
import type Overlay from './Overlay';

export type EllipseOptions<ExtraData = any> = {
  /** 椭圆圆心 */
  center?: LngLatLike;
  /**
   * 椭圆的半径，用2个元素的数组表示，单位：米.
   * 如：`radius: [1000, 2000]` 表示横向半径是1000，纵向的半径是2000
   */
  radius?: [number, number];
  /** 椭圆覆盖物的叠加顺序。地图上存在多个多边形覆盖物叠加时，通过该属性使级别较高的多边形覆盖物在上层显示 */
  zIndex?: number;
  /** 是否将覆盖物的鼠标或touch等事件冒泡到地图上 */
  bubble?: boolean;
  /**  指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor */
  cursor?: string;
  /** 线条颜色，使用16进制颜色代码赋值。默认值为#00D3FC */
  strokeColor?: string;
  /** 轮廓线透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.9  */
  strokeOpacity?: number;
  /** 轮廓线宽度 */
  strokeWeight?: number;
  /** 轮廓线样式，实线:solid，虚线:dashed */
  strokeStyle?: 'solid' | 'dashed';
  /**
   * 勾勒形状轮廓的虚线和间隙的样式，此属性在strokeStyle 为dashed 时有效， 此属性在ie9+浏览器有效 取值：
   * - 实线： [0,0,0]
   * - 虚线： [10,10],[10,10] 表示10个像素的实线和10个像素的空白（如此反复）组成的虚线
   * - 点画线： [10,2,10],[10,2,10] 表示10个像素的实线和2个像素的空白 + 10个像素的实线和10个像素的空白 （如此反复）组成的虚线
   */
  strokeDasharray?: number[];
  /** 椭圆填充颜色，使用16进制颜色代码赋值，如：#00B2D5 */
  fillColor?: string;
  /**  椭圆填充透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.5 */
  fillOpacity?: number;
  /** 设置椭圆是否可拖拽移动，默认为false */
  draggable?: boolean;
  /**  用户自定义属性，支持JavaScript API任意数据类型，如 id 等 */
  extData?: ExtraData;
};

export type EllipseEventType = 'hide' | 'show' | 'click' | 'dblclick';

/**
 * 构造多边形对象，通过 EllipseOptions 指定多边形样式
 * https://lbs.amap.com/api/javascript-api-v2/documentation#ellipse
 */
export declare class Ellipse<ExtraData = any> extends Overlay<
ExtraData,
EllipseEventType
> {
  constructor(opt?: EllipseOptions<ExtraData>);
  /** 获取矩形的中心点 */
  getCenter(): LngLat;
  /** 设置椭圆的中心点 */
  setCenter(center: LngLatLike): void;
  /** 获取椭圆的半径 */
  getRadius(): number;
  /** 设置椭圆的中心点 */
  setRadius(radius: [number, number]): void;
  /** 销毁内存-椭圆 */
  destroy(): void;
  /**
   * 获取多边形的面积（单位：平方米）
   * @param {boolean} isTerrain 若开启 terrain 则在地形基础上进行面积测量， 默认值为false
   **/
  getArea(isTerrain?: boolean): number;
  /** 判断指定点坐标是否在多边形范围内 */
  contains(point: LngLatLike): boolean;
  /**
   * 海拔高度值
   * @version v2.1Beta 以上版本
   **/
  getPlaneHeight(): number;
  /**
   * @warning 文档中未明确说明，且未成功验证其存在性
   **/
  generateBuffer(...args: any[]): any;
}

export default Ellipse;
