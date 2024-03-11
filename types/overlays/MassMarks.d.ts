import type { LngLatLike } from '../common/LngLat';
import type Pixel from '../common/Pixel';
import type Size from '../common/Size';
import type Event from '../common/Event';
import type Map from '../Map';

export type MassMarkersStyleOption = {
  /** 图标 url */
  url?: string;
  /** 图标显示大小 */
  size?: [number, number] | Size;
  /** 锚点位置 */
  anchor?: Pixel;
  /** 点展示优先级，默认为使用样式的索引值。 */
  zIndex?: number;
  /** 旋转角度 */
  rotation?: number;
};

export type MassMarkersOptions = {
  /** 图标叠加层级，值越大层级越高 */
  zIndex?: number;
  /** 图标显示透明度，默认值：1 */
  opacity?: number;
  /** 海量点显示层级范围，范围外不显示。默认值: [2, 20] */
  zooms?: [number, number];
  /** 海量点样式列表。 */
  style?: MassMarkersStyleOption | MassMarkersStyleOption[];
};

export type MassMarkersDataOption = Record<string | number | symbol, any> & {
  lnglat: LngLatLike[];
  weight?: number;
};

export type MassMarksEventType =
  | 'complete'
  | 'click'
  | 'dbclick'
  | 'mousemove'
  | 'mouseover'
  | 'mouseout'
  | 'mousedown'
  | 'mouseup'
  | 'touchstart'
  | 'touchend';

/** 海量点类 */
export declare class MassMarks extends Event<MassMarksEventType> {
  /** 官方文档示例，https://a.amap.com/jsapi/static/doc/index.html#massmarks **/
  constructor(
    data?: MassMarkersDataOption[],
    opts?: MassMarkersOptions[] | MassMarkersOptions,
  );
  /** 获取地图对象 */
  getMap(): Map | undefined;
  /** 设置地图对象 */
  setMap(map: Map | null): void;
  /** 在原数据基础上添加数据，格式同 dataOptions */
  addData(dataOptions: MassMarkersDataOption[]): void;
  /** 设置数据，格式同 dataOptions.  */
  setData(dataOptions: MassMarkersDataOption[]): void;
  /** 获取MassMark的显示样式 */
  getStyle(): MassMarkersStyleOption[];
  /** 设置MassMark的显示样式，可设置单个样式或样式列表，每条数据通过设置的样式索引值获取对应样式 */
  setStyle(style: MassMarkersStyleOption | MassMarkersStyleOption[]): void;
  /** 获取海量点图层的透明度 */
  getOpacity(): number;
  /** 设置海量点图层的透明度 */
  setOpacity(opacity: number): void;
  /** 获取海量点图层叠加顺序 */
  getzIndex(): number;
  /** 设置海量点图层叠加顺序 */
  setzIndex(zIndex: number): void;
  /** 获取海量点图层可见层级范围 */
  getZooms(): [number, number];
  /** 设置海量点图层可见层级范围 */
  setZooms(zooms: [number, number]): void;
  /** 清除海量点 */
  clear(): void;
}

export default MassMarks;
