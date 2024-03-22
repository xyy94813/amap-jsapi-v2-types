import type { Pixel, PixelLike } from '../common/Pixel';
import type { Size, SizeLike } from '../common/Size';

export type IconOptions = {
  image?: string;
  size?: SizeLike;
  imageSize?: SizeLike;
  imageOffset?: PixelLike;
};

/**
 * Icon类 表示点标记的图标 用于添加复杂点标记，即在普通点标记的基础上，
 * 添加Icon类，通过在Icon表示的大图上截取其中一部分作为标注的图标
 * 构造点覆盖物图标，通过IconOptions设置图标属性
 * https://lbs.amap.com/api/javascript-api-v2/documentation#icon
 */
export declare class Icon {
  CLASS_NAME: string;
  constructor(opts: IconOptions);
  /**
   * 设置图标图片大小
   * @param {SizeLike} size
   */
  setImageSize(size: SizeLike): void;
  /**
   * 获取图标图片大小
   */
  getImageSize(): [number, number];
  /**
   * 设置图标尺寸，默认值(36,36)
   * @param {SizeLike} size
   */
  setSize(size: SizeLike): void;
  /**
   * 获取图标尺寸
   * @returns {Size | [number, number]} 经验证，返回类型取决于上一次 setSize 的传入值
   */
  getSize(): Size | [number, number];
  /**
   * 设置图标图片偏移
   * @param {PixelLike} offset
   */
  setImageOffset(offset: PixelLike): void;
  /**
   * 获取图标取图偏移量。
   * 当 image 中指定了一个大图时，可通过 size 和 imageOffset 配合，显示图标的指定范围
   */
  getImageOffset(): Pixel;
  /**
   * 获取图标
   */
  getImage(): string;
  /**
   * 设置 Icon 图片 URL
   * @param {string} image
   */
  setImage(image: string): void;
  /**
   * 设置原始尺寸
   * @warning 文档提及，未验证其存在
   * @deprecated
   * @param size
   */
  setOriginSize(size: SizeLike): void;
  /**
   * 获取原始尺寸
   * @warning 文档提及，未验证其存在
   * @deprecated
   */
  getOriginSize(): Size | [number, number];
}

export default Icon;
