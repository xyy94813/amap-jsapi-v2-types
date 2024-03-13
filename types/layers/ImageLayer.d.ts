import type { Bounds, BoundsLike } from '../common/Bounds';
import type { BaseLayer, CommonLayerOptions } from './BaseLayer';

export type ImageLayerOption = CommonLayerOptions & {
  /** 图片地址链接 */
  url: string;
  /** 图片的范围大小经纬度，如果传递数字数组类型: [minlng,minlat,maxlng,maxlat] */
  bounds?: BoundsLike;
};

export type ImageLayerEventType = 'complete' | string;

/**
 * 图片图层类，用户可以将一张静态图片作为图层添加在地图上，图片图层会随缩放级别而自适应缩放。
 * https://lbs.amap.com/api/javascript-api-v2/documentation#imagelayer
 *
 * @example new AMap.ImageLayer(opts: ImageLayerOptions)
 */
export declare class ImageLayer extends BaseLayer<ImageLayerEventType> {
  constructor(options: ImageLayerOption);
  /**
   * 获取图片地址
   * @returns {string}
   */
  getImageUrl(): string;
  /**
   * 设置图片的地址
   * @param {string} url
   */
  setImageUrl(url: string): void;
  /**
   * 获取 ImageLayer 显示的范围
   */
  getBounds(): Bounds;
  /**
   * 设置 ImageLayer显示的范围
   */
  setBounds(bounds: ImageLayerOption['bounds']): void;
}

export default ImageLayer;
