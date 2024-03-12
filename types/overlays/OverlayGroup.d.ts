import type Event from '../common/Event';
import type Map from '../Map';
import type Overlay from './Overlay';

export type OverlayGroupEventType = string;

/**
 * OverlayGroup 用来包装其它图层类的实例，对实例集合做批量操作，避免开发者对多个需要设置同样属性的图层实例做循环处理。
 *
 * @docs https://lbs.amap.com/api/javascript-api-v2/documentation#layergroup
 */
export declare class OverlayGroup<
  OverlayType extends Overlay | OverlayGroup = any,
> extends Event<OverlayGroupEventType> {
  constructor(layers?: OverlayType[]);
  /** 添加到地图上面 */
  setMap(map?: Map): this;
  /** 添加单个覆盖物到集合中，不支持添加重复的覆盖物 */
  addOverlay(overlay: OverlayType): void;
  /** 添加覆盖物数组到集合中，不支持添加重复的覆盖物 */
  addOverlays(overlays: OverlayType[]): void;
  /** 返回当前集合中所有的覆盖物 */
  getOverlays(): OverlayType[];
  /** 判断传入的覆盖物实例是否在集合中 */
  hasOverlay(overlay: OverlayType): boolean;
  /** 从集合中删除传入的覆盖物实例 */
  removeOverlay(overlay: OverlayType): void;
  /** 从集合中删除传入的覆盖物实例数组 */
  removeOverlays(overlays: OverlayType[]): void;
  /** 清空集合 */
  clearOverlays(): void;
  /** 对集合中的覆盖物做迭代操作 */
  eachOverlay(
    fn?: (
      overlay: OverlayType,
      index: number,
      collections: OverlayType[],
    ) => any,
  ): void;
  /** 设置图层隐藏 */
  hide(): void;
  /** 设置图层可见 */
  show(): void;
  /** 修改图层属性(包括线样式、样色等等) */
  setOptions(opts: any): void;
}

export default OverlayGroup;
