import type Pixel from '../common/Pixel';
import type Event from '../common/Event';
import type { MarkerOptions } from '../overlays/Marker';
import type { PolylineOptions } from '../overlays/Polyline';
import type Map from '../Map';

export type RangingToolOptions = {
  /** 设置量测起始点标记属性对象，包括点标记样式、大小等，参考   MarkerOptions  列表 */
  startMarkerOptions?: MarkerOptions;
  /** 设置量测中间点标记属性对象 */
  midMarkerOptions?: MarkerOptions;
  /** 设置量测结束点标记属性对象 */
  endMarkerOptions?: MarkerOptions;
  /** 设置距离量测线的属性对象，包括线样式、颜色等，参考  PolylineOptions 列表 */
  lineOptions?: PolylineOptions;
  /** 设置距离量测过程中临时量测线的属性对象 */
  tmpLineOptions?: PolylineOptions;
  /** 设置量测起始点标签的文字内容，默认为“起点” */
  startLabelText?: string;
  /** 设置量测中间点处标签的文字内容，默认为当前量测结果值 */
  midLabelText?: string;
  /** 设置量测结束点处标签的文字内容，默认为当前量测结果值 */
  endLabelText?: string;
  /** 设置量测起始点标签的偏移量。默认值：Pixel(-6, 6) */
  startLabelOffset?: Pixel | [number, number];
  /** 设置量测中间点标签的偏移量。默认值：Pixel(-6, 6) */
  midLabelOffset?: Pixel | [number, number];
  /** 设置量测结束点标签的偏移量。默认值：Pixel(-6, 6) */
  endLabelOffset?: Pixel | [number, number];
};

export type RangingToolEventType = 'addnode' | 'removenode' | 'end';
/**
 * 构造一个距离量测插件对象。参数map为地图实例。 opts属性参考 RangingToolOptions 列表中的说明
 * @docs https://lbs.amap.com/api/javascript-api-v2/documentation#rangingtool
 */
export declare class RangingTool extends Event<RangingToolEventType> {
  constructor(map: Map, opt?: RangingToolOptions);
  /** 动测距工具 */
  turnOn(): void;
  /**
   * 关闭测距工具
   * @param {boolean} removeOverlays 是否删除测距过程产生的覆盖物
   */
  turnOff(removeOverlays: boolean): void;
}

export default RangingTool;
