import type { Control, CommonControlConfig } from './Control';

export type ControlBarConfig = CommonControlConfig & {
  showControlButton?: boolean;
};

/**
 * 组合了旋转、倾斜、复位在内的地图控件。
 * https://lbs.amap.com/api/javascript-api-v2/documentation#controlbar
 */
export declare class ControlBar extends Control {
  /** 以下为私有属性 */
  _config: ControlBarConfig;
  _container: HTMLDivElement;
  _compass: HTMLDivElement;
  _luopan: HTMLDivElement;
  _pitchDown: HTMLDivElement;
  _pitchUp: HTMLDivElement;
  _pointers: HTMLDivElement;
  _rotateLeft: HTMLDivElement;
  _rotateRight: HTMLDivElement;

  constructor(opts?: ControlBarConfig);
}

export default ControlBar;
