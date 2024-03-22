import Bounds from '../common/Bounds';
import type { LngLatLike } from '../common/LngLat';
import type Overlay from './Overlay';

export type BezierCurveOptions<ExtraData = any> = {
  /**
   * 描述为一个二维数组规则如下：第一个元素是起点， 之后的元素同时描述控制点和途经点，之后每个元素可以有0个到2个控制点 控制点在前，途经点在最后
   * [
   *    [lng,lat], //起点0
   *    [lng,lat,lng,lat,lng,lat], //控制点、控制点、途经点2
   *    [lng,lat,lng,lat], //控制点、途经点3
   * ]
   * 或者
   * [
   *    [ [lng,lat] ],//起点0
   *    [ [lng,lat] , [lng,lat] ], //控制点、途经点1
   *    [ [lng,lat] , [lng,lat] , [lng,lat] ], //控制点、控制点、途经点2
   *    [ [lng,lat] , [lng,lat] ] // 控制点、途经点3
   * ]
   */
  path?: number[][] | number[][][];
  /** 多边形覆盖物的叠加顺序。 */
  zIndex?: number;
  /** 是否将覆盖物的鼠标或touch等事件冒泡到地图上 */
  bubble?: boolean;
  /** 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor */
  cursor?: string;
  /** 线条颜色，使用16进制颜色代码赋值。默认值为#00D3FC */
  strokeColor?: string;
  /** 轮廓线透明度，取值范围 [0,1]。默认为0.5 */
  strokeOpacity?: number;
  /** 轮廓线宽度。默认为 2 */
  strokeWeight?: number;
  /** 轮廓线样式，实线:solid，虚线:dashed */
  strokeStyle?: string;
  /** 描边的宽度，默认为1 */
  borderWeight?: number;
  /** 是否显示描边,默认false */
  isOutline?: boolean;
  /** 线条描边颜色，此项仅在isOutline为true时有效，默认：#00B2D5 */
  outlineColor?: string;
  /** 设置多边形是否可拖拽移动，默认为false */
  draggable?: boolean;

  extData?: ExtraData;
};

export type BezierCurveEventType =
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
 * 贝塞尔曲线
 * https://lbs.amap.com/api/javascript-api-v2/documentation#beziercurve
 */
export declare class BezierCurve<ExtractData = any> extends Overlay<
ExtractData,
BezierCurveEventType
> {
  constructor(opts?: BezierCurveOptions<ExtractData>);

  /** 获取贝塞尔曲线路径的节点数组 */
  getPath(): number[][] | number[][][];
  /**
   * 设置组成该折线的节点数组，贝瑟尔曲线的路径。
   * 描述为一个二维数组规则如下：第一个元素是起点， 之后的元素同时描述控制点和途经点，之后每个元素可以有0个到2个控制点 控制点在前，途经点在最后
   * [
   *    [lng,lat], //起点0
   *    [lng,lat,lng,lat,lng,lat], //控制点、控制点、途经点2
   *    [lng,lat,lng,lat], //控制点、途经点3
   * ]
   * 或者
   * [
   *    [ [lng,lat] ],//起点0
   *    [ [lng,lat] , [lng,lat] ], //控制点、途经点1
   *    [ [lng,lat] , [lng,lat] , [lng,lat] ], //控制点、控制点、途经点2
   *    [ [lng,lat] , [lng,lat] ] // 控制点、途经点3
   * ]
   */
  setPath(path?: number[][] | number[][][]): void;
  /** 判断坐标是否在曲线内 */
  contains(point: LngLatLike): void;
  /** 获取曲线的总长度（单位：米） */
  getLength(): number;
  /** 获取当前折线的矩形范围对象 */
  getBounds(): Bounds | undefined;
  /** 销毁内存-贝塞尔曲线 */
  destroy(): void;
  /** 设置贝塞尔曲线离地高度 （此方法和相关属性 height 适用于 JSAPI v2.1Beta 及以上版本） */
  setHeight(height: number): void;
  /** 获取当前贝塞尔曲线离地高度值 （此方法适用于 JSAPI 2.1Beta 及以上版本） */
  getPolylineHeight(): number;
  /**
   * @warning 文档中未明确说明，且未成功验证其存在性
   **/
  generateBuffer(...args: any[]): any;
}
