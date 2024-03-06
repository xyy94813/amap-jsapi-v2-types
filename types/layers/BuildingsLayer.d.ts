import type { BaseLayer, CommonLayerOptions } from './BaseLayer';

export type BuildingsStyleOptions = any;

export type BuildingsLayerOptions = CommonLayerOptions & {
  /** 楼块侧面颜色，支持 rgba、rgb、十六进制等 */
  wallColor?: string | string[];
  /** 楼块顶面颜色，支持 rgba、rgb、十六进制等 */
  roofColor?: string | string[];
  /** 楼块的高度系数因子，默认为 1，也就是正常高度 */
  heightFactor?: number;
  /** 楼块的围栏和样式设置 */
  styleOpts?: BuildingsStyleOptions;
};

type BuildingsEventType = string;

/**
 * 建筑楼块 3D 图层
 * https://lbs.amap.com/api/javascript-api-v2/documentation#buildings
 */
export declare class Buildings extends BaseLayer<BuildingsEventType> {
  constructor(opts: BuildingsLayerOptions);
  setStyle(styleOpts: BuildingsStyleOptions): void;
}

export default Buildings;
