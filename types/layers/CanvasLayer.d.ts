import type Bounds from '../common/Bounds';
import type { BaseLayer, CommonLayerOptions } from './BaseLayer';

export type CanvasLayerOption = CommonLayerOptions & {
  /** Canvas DOM 对象. 可以后续通过 setCanvas 方法设置 */
  canvas?: HTMLCanvasElement;
  /** canvas 的范围大小经纬度, 如果传递数字数组类型: [minlng,minlat,maxlng,maxlat] */
  bounds?: Bounds | [number, number, number, number];
};

/**
 * 图片图层类，用户可以将一张静态图片作为图层添加在地图上，图片图层会随缩放级别而自适应缩放。
 * https://lbs.amap.com/api/javascript-api-v2/documentation#canvaslayer
 * @warning 官方文档声明有误
 *
 * @example new AMap.CanvasLayer(opts: CanvasLayerOptions)
 */
export declare class CanvasLayer extends BaseLayer {
  constructor(options?: CanvasLayerOption);
  /**
   * 修改显示的 Canvas
   * @param {HTMLCanvasElement} canvas
   */
  setCanvas(canvas: HTMLCanvasElement): void;
  /**
   * 返回 Canvas 对象
   * @returns {HTMLCanvasElement | undefined} 未设置时会返回 undefined
   */
  getElement(): HTMLCanvasElement | undefined;
  /**
   * 获取 ImageLayer 显示的范围
   */
  getBounds(): Bounds;
  /**
   * 设置 ImageLayer显示的范围
   */
  setBounds(bounds: CanvasLayerOption['bounds']): void;
  /**
   * 当canvas的内容发生改变是用于刷新图层，3D视图下调用，2D视图不需要调用
   */
  reFresh(): void;
}

export default CanvasLayer;
