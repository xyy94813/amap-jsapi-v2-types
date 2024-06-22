import type { LabelMarker } from '../overlays/LabelMarker';

import type { BaseLayer, CommonLayerOptions } from './BaseLayer';

export type LabelsLayerOption = CommonLayerOptions & {
  /** 标注层内的标注是否避让 */
  collision?: boolean;
  /** 标注层内的标注是否允许其它标注层对它避让 */
  allowCollision?: boolean;
};

/**
 * 标注图层
 * https://lbs.amap.com/api/javascript-api-v2/documentation#labelslayer
 *
 * @example new AMap.LabelsLayer(opts: LabelsLayerOptions)
 */
export declare class LabelsLayer<
  TOverlayType extends LabelMarker = LabelMarker
> extends BaseLayer {
  constructor(options?: LabelsLayerOption);

  /**
   * 获取该标注是否被避让，从而没有显示
   * @name getCollision
   * @returns {boolean}
   */
  getCollision(): boolean;
  /**
   * 设置标注层是否支持内部标注避让
   * @param {boolean} collision
   */
  setCollision(collision: boolean): void;
  /**
   * 获取标注层是否允许其它层标注避让
   */
  getAllowCollision(): boolean;
  /**
   * 设置标注层是否允许其它层标注避让，开启该功能可实现地图标注对 LabelMarker 的避让
   * @param {boolean} allowCollision
   */
  setAllowCollision(allowCollision: boolean): void;
  /**
   * 将 labelMarker 添加到标注层上
   * @param {TOverlayType | TOverlayType[]} labelMarkers
   */
  add(labelMarkers: TOverlayType | TOverlayType[]): void;
  /**
   * 将 labelMarker 从标注层上移除
   * @param {TOverlayType | TOverlayType[]} labelMarkers
   */
  remove(labelMarkers: TOverlayType | TOverlayType[]): void;
  /**
   * 获取标注层内的所有标注对象
   */
  getAllOverlays(): TOverlayType[] | undefined;
  /**
   * 清空 VectorLayer
   */
  clear(): void;
}

export default LabelsLayer;
