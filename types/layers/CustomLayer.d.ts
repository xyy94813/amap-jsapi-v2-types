import type { BaseLayer, CommonLayerOptions } from './BaseLayer';

export type CustomLayerOption = CommonLayerOptions & {
  /**
   * 绘制函数，初始化完成时候，开发者需要给该图层设定render方法，
   * 该方法需要实现图层的绘制，API会在合适的时机自动调用该方法
   */
  render?: Function;
  /** 是否主动 */
  alwaysRender?: boolean;
};

/**
 * 自定义图层是一种完全由开发者来指定绘制方法的图层
 *
 * https://lbs.amap.com/api/javascript-api-v2/documentation#customlayer
 *
 * @example
 * var cLayer = new AMap.CustomLayer(document.createElement('canvas'), {
 *    zooms: [2, 18],
 *    zIndex: 120,
 *    render() {
 *        // 对 canvas 进行绘制
 *    }
 * })
 */
export declare class CustomLayer extends BaseLayer {
  constructor(canvas: HTMLCanvasElement, options: CustomLayerOption);
}

export default CustomLayer;
