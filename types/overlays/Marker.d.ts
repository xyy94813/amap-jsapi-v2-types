import type { LngLatLike, LngLat } from '../common/LngLat';
import type { Pixel } from '../common/Pixel';
import type { SizeLike } from '../common/Size';
import type Overlay from './Overlay';
import type { Icon } from './Icon';
import type Map from '../Map';
import { MoveAnimation } from '../animates/MoveAnimation';
import Bounds from '../common/Bounds';

export type MarkerLabelOptions = {
  /** 文本标注的内容 */
  content?: HTMLElement | string;
  /** 文本标注方位 可选值，默认值: `right`。 */
  direction?: 'top' | 'right' | 'bottom' | 'left' | 'center';
  /** 为偏移量。如设置了 direction，以 direction 方位为基准点进行偏移。 */
  offset?: Pixel | [number, number];
};

export type MarkerOptions<ExtraData = any> = {
  map?: Map;
  position?: LngLatLike;
  content?: string | HTMLElement;
  title?: string;
  visible?: boolean;
  zIndex?: number;
  offset?: Pixel | [number, number];
  anchor?: string | [number, number];
  angle?: number;
  clickable?: boolean;
  draggable?: boolean;
  bubble?: boolean;
  zooms?: [number, number];
  cursor?: string;
  topWhenClick?: boolean;
  // 3D mode
  height?: number;
  /**
   * 用户自定义属性，支持JavaScript API任意数据类型，如Marker的id等
   */
  extData?: ExtraData;
  /**
   * 添加文本标注。content 为文本标注的内容。
   * direction 为文本标注方位（自 v1.4.14 新增属性），可选值：'top'|'right'|'bottom'|'left'|'center'，默认值：'top' 。
   * offset 为偏移量（默认基准点为图标左上角），如设置了 direction，以 direction 方位为基准点进行偏移。相关示例
   */
  label?: MarkerLabelOptions;
};

export type MarkerEventType =
  | 'click'
  | 'dblclick'
  | 'rightclick'
  | 'mousemove'
  | 'mouseover'
  | 'mouseout'
  | 'mousedown'
  | 'mouseup'
  | 'dragstart'
  | 'dragging'
  | 'dragend'
  | 'moving'
  | 'moveend'
  | 'movealong'
  | 'touchend'
  | 'touchmove'
  | 'touchstart';

/**
 * 点标记
 * https://lbs.amap.com/api/javascript-api-v2/documentation#marker
 */
export declare class Marker<ExtraData = any>
  extends Overlay<ExtraData, MarkerEventType>
  implements MoveAnimation
{
  CLASS_NAME: string;
  constructor(opts: MarkerOptions);
  /** 获取位置 */
  getPosition(): LngLat | null;
  /** 设置位置 */
  setPosition(position: LngLatLike): void;
  /** 获取点标记的文字提示 */
  getTitle(): string | undefined;
  /** 鼠标滑过点标时的文字提示 */
  setTitle(title: string): void;
  /** 当点标记未自定义图标时，获取Icon内容 */
  getIcon(): Icon | string | undefined;
  /** 当点标记未自定义图标时，获取Icon内容 */
  setIcon(icon: Icon | string): void;
  /** 获取点标记文本标签内容 */
  getLabel(): MarkerLabelOptions;
  /** 设置点标记文本标签内容相关示例（https://lbs.amap.com/api/javascript-api/example/marker/set-marker-text-label/） */
  setLabel(opts: MarkerLabelOptions): void;
  /** 获取点标记是否支持鼠标单击事件Boolean */
  getClickable(): boolean;
  /** 设置点标记是支持鼠标单击事件clickable:Boolean */
  setClickable(clickable: boolean): void;
  /** 获取点标记对象是否可拖拽移动Boolean */
  getDraggable(): boolean;
  /** 设置点标记对象是否可拖拽移动draggable:Boolean */
  setDraggable(draggable: boolean): void;
  /** 获取该点标记是否置顶 */
  getTop(): boolean;
  /** 地图上有多个marker时，设置是否置顶该点标记 */
  setTop(isTop: boolean): void;
  /** 获取鼠标悬停时的光标设置 */
  getCursor(): string;
  /** 设置鼠标悬停时的光标 */
  setCursor(cursor: string): void;
  /** 获取覆盖物锚点 */
  getAnchor(): string | [number, number] | undefined;
  /** 设置信息窗体锚点 默认值：'bottom-center'。 */
  setAnchor(anchor: MarkerOptions['anchor']): void;
  /** 获取覆盖物偏移量 */
  getOffset(): [number, number] | Pixel;
  /** 设置信息窗体偏移量 */
  setOffset(offset: MarkerOptions['offset']): void;
  /** 获取覆盖物旋转角度 */
  getAngle(): number;
  /** 设置尺寸 */
  setAngle(angle: number): void;
  /** 如设置了尺寸，获取设置的尺寸 */
  getSize(): [number, number];
  /** 设置尺寸 */
  setSize(size: SizeLike): void;
  /** 获取尺寸 */
  getSize(): [number, number];
  /** 设置尺寸 */
  setSize(size: SizeLike): void;
  /** 获取点标记的叠加顺序 */
  getzIndex(): number | undefined;
  /** 设置点标记的叠加顺序，默认最先添加的点标记在最底层 */
  setzIndex(zIndex: number): void;
  /** 获取内容 */
  getContent(): string | HTMLElement | undefined;
  /** 设置点标记显示内容，可以是HTML要素字符串或者HTML DOM对象 */
  setContent(content: HTMLElement | string): void;
  /** 获取点标记范围 */
  getBounds(): Bounds;
  /** 移除点标记   */
  remove(): void;
  /**
   * 获取像素纵坐标, 3D 模式下有效
   * @return {number}
   */
  getHeight(): number;

  // MoveAnimation implementation
  moveTo: MoveAnimation['moveTo'];
  moveAlong: MoveAnimation['moveAlong'];
  startMove: MoveAnimation['startMove'];
  stopMove: MoveAnimation['stopMove'];
  pauseMove: MoveAnimation['pauseMove'];
  resumeMove: MoveAnimation['resumeMove'];

  // 以下是否需要抽象至通用接口
  /** 获取地图 */
  getMap(): Map | undefined;
  /**
   * 设置地图
   * @param {Map | null} map 等同于 addTo(map). `null` 时，从地图上移除
   */
  setMap(map: Map | null): void;
  addTo(map: Map): void;
  add(map: Map): void;
}

export default Marker;
