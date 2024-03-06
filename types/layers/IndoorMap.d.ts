import type { BaseLayer } from './BaseLayer';

export type IndoorMapLayerOptions = {
  /** 室内图层叠加的顺序值 */
  zIndex?: number;
  /** 图层的透明度，取值范围 [0,1] */
  opacity?: number;
  /** 指定鼠标悬停到店铺面时的鼠标样式 */
  cursor?: string;
  /** 是否隐藏楼层切换控件，默认值：false */
  hideFloorBar?: boolean;
};

type IndoorMapEventType = string;

/**
 * 室内图层，用于在适当级别展示室内地图，并提供显示商铺tip、切换楼层等功能。
 * https://lbs.amap.com/api/javascript-api-v2/documentation#indoormap
 */
export declare class IndoorMap extends BaseLayer<IndoorMapEventType> {
  constructor(opts: IndoorMapLayerOptions);
  /**
   * 显示指定 POI 的室内地图
   * @param {string} indoorId 建筑物 POIID (必填) [如何获取](https://lbs.amap.com/faq/js-api/map-js-api/layer/43601?_=1585657744106)
   * @param {number} floor 楼层
   * @param {string} shopId 商铺 ID
   */
  showIndoorMap(indoorId: string, floor?: number, shopId?: string): void;
  /**
   * 显示指定的楼层
   * @param {number} floor 楼层
   * @param {boolean} noMove 是否移动？文档未提及，验证后存在
   */
  showFloor(floor: number, noMove: boolean): void;
  /**
   * 显示楼层切换控件
   */
  showFloorBar(): void;
  /**
   * 隐藏楼层切换控件
   */
  hideFloorBar(): void;
  /**
   * 显示室内图层上的标注
   */
  showLabels(): void;
  /**
   * 隐藏室内图层上的标注
   */
  hideLabels(): void;
  /**
   * 获取被选中室内的 POIID
   */
  getSelectedBuildingId(): string | undefined;
  /**
   * 获取被选中的室内地图的一些基本信息，包含名称、当前楼层、所有楼层信息、POIID等
   * @name getSelectedBuilding
   */
  getSelectedBuilding(): string | undefined;
}

export default IndoorMap;
