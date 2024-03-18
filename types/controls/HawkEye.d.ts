import type { Control } from './Control';

/** 鹰眼的初始化参数 */
export type HawkEyeOptions = {
  /** 是否随主图视口变化移动 */
  autoMove?: boolean;
  /** 是否显示视口矩形 */
  showRectangle?: boolean;
  /** 是否显示打开关闭的按钮 */
  showButton?: boolean;
  /** 默认是否展开 */
  isOpen?: boolean;
  /** 缩略图要显示的地图自定义样式，如'amap://styles/dark' */
  mapStyle?: string;
  /** 缩略图要显示的图层类型，默认为普通矢量地图 */
  layers?: any[];
  /** 缩略图的宽度，同CSS，如'200px' */
  width?: string;
  /** 缩略图的高度，同CSS，如'200px' */
  height?: string;
  /** 缩略图距离地图右下角的像素距离，如 [2,2] */
  offset?: [number, number];
  /** 缩略图的边框样式，同CSS，如"double solid solid double" */
  borderStyle?: string;
  /** 缩略图的高度，同CSS，如'silver' */
  borderColor?: string;
  /** 缩略图的高度，同CSS，如'5px' */
  borderRadius?: string;
  /** 缩略图的高度，同CSS，如'2px' */
  borderWidth?: string;
  /** 箭头按钮的像素尺寸，同CSS，如'12px' */
  buttonSize?: string;
};

/**
 * 鹰眼控件，用于显示缩略地图，显示于地图右下角，可以随主图的视口变化而变化，也可以配置成固定位置实现类似于南海附图的效果
 * https://lbs.amap.com/api/javascript-api-v2/documentation#hawkeye
 */
export declare class HawkEye extends Control {
  constructor(options?: HawkEyeOptions);

  /**
   * 展开
   * @warning 文档未提及但是存在
   */
  open(): void;
  /**
   * 收起
   * @warning 文档未提及但是存在
   */
  close(): void;
}

export default HawkEye;
