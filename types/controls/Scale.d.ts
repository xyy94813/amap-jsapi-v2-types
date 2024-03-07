import type { Control, CommonControlConfig } from './Control.d.ts';

export type ScaleConfig = CommonControlConfig;

/**
 * 比例尺插件。
 * https://lbs.amap.com/api/javascript-api-v2/documentation#scale
 */
export declare class Scale extends Control {
  /** 以下为私有属性 */
  _container: HTMLElement;
  constructor(opts?: ScaleConfig);
}

export default Scale;
