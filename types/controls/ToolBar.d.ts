import type { Control, CommonControlConfig } from './Control.d.ts';

export type ToolBarConfig = CommonControlConfig;

/**
 * 地图操作工具条插件。可支持方向导航、位置定位、视野级别缩放、视野级别选择等操作。
 * 继承自 AMap.Control
 * https://lbs.amap.com/api/javascript-api-v2/documentation#toolbar
 */
export declare class ToolBar extends Control {
  /** 以下为私有属性 */
  _container: HTMLElement;
  constructor(opts?: ToolBarConfig);
}

export default ToolBar;
