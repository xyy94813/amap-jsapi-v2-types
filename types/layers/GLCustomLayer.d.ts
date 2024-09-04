import type { BaseLayer, CommonLayerOptions } from './BaseLayer';

export type GLCustomLayerOption = CommonLayerOptions & {
  /** 初始化的时候，开发者可以在这个函数参数里面获取 gl 上下文，进行一些初始化的操作。 */
  init?: (gl: WebGLRenderingContext) => void;
  /** 绘制函数，初始化完成时候，开发者需要给该图层设定render方法，该方法需要实现图层的绘制，API会在合适的时机自动调用该方法 */
  render?: Function;
};

/**
 * 标注图层
 * https://lbs.amap.com/api/javascript-api-v2/documentation#labelslayer
 *
 * @example new AMap.GLCustomLayer(opts: GLCustomLayerOptions)
 */
export declare class GLCustomLayer extends BaseLayer {
  constructor(options: GLCustomLayerOption);
}

export default GLCustomLayer;
