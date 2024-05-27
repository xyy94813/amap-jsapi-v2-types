import type Event from '../common/Event';
import type { LngLatLike } from '../common/LngLat';
import type { PixelLike } from '../common/Pixel';
import type { SizeLike } from '../common/Size';
import type Map from '../Map';

export type InfoWindowOptions = {
  /** 是否自定义窗体。设为true时，信息窗体外框及内容完全按照content所设的值添加（默认为false，即在系统默认的信息窗体外框中显示content内容） */
  isCustom?: boolean;
  /** 是否自动调整窗体到视野内（当信息窗体超出视野范围时，通过该属性设置是否自动平移地图，使信息窗体完全显示） */
  autoMove?: boolean;
  /** autoMove 为 true 时，自动平移到视野内后的上右下左的避让宽度。默认值： [20, 20, 20, 20] */
  avoid?: number[];
  /** 控制是否在鼠标点击地图后关闭信息窗体，默认false，鼠标点击地图后不关闭信息窗体 */
  closeWhenClickMap?: boolean;
  /** 显示内容，可以是HTML要素字符串或者HTMLElement对象，自定义窗体示例 */
  content?: string | HTMLElement;
  /** 信息窗体尺寸（isCustom为true时，该属性无效） */
  size?: SizeLike;
  /**
   * 信息窗体锚点
   * @default 'bottom-center' 默认值
   */
  anchor?:
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'middle-left'
  | 'center'
  | 'middle-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | string;
  /** 信息窗体显示位置偏移量。默认基准点为信息窗体的底部中心（若设置了anchor，则以anchor值为基准点）。 */
  offset?: PixelLike;
  /** 信息窗体显示基点位置 （自v1.2 新增） */
  position?: LngLatLike;
};

export type InfoWindowEventType = 'open' | 'close';

/**
 * 右键菜单.
 * 从实现来看，右键菜单作为一个地图覆盖物。很有可能继成自通用 Overlay.
 * @docs https://lbs.amap.com/api/javascript-api-v2/documentation#infowindow
 */
export declare class InfoWindow<ExtraData = any> extends Event<InfoWindowEventType> {
  constructor(opt?: InfoWindowOptions);
  /** 打开信息窗体 */
  open(map: Map, pos: LngLatLike, height?: number): void;
  /** 关闭信息窗体 */
  close(): void;
  /** 获取信息窗体是否打开 */
  getIsOpen(): boolean;
  /** 获取信息窗体大小 */
  getSize(): [number, number];
  /** 设置信息窗体大小（isCustom为false时有效） */
  setSize(size: SizeLike): void;
  /** 获取渲染内容 */
  getContent(): string | HTMLElement;
  /** 设置内容 */
  setContent(content: HTMLElement | string): void;
  /** 获取信息窗体锚点 */
  getAnchor(): string;
  /** 设置信息窗体锚点 默认值：'bottom-center'。 */
  setAnchor(anchor: InfoWindowOptions['anchor']): void;
  /**
   * 设置自定义数据
   * @param extData 自定义数据
   */
  setExtData(extData: ExtraData): void;
  /**
   * 获取自定义数据
   */
  getExtData(): ExtraData;
}

export default InfoWindow;
