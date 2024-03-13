import type { LngLatLike } from '../common/LngLat';
import type { PixelLike } from '../common/Pixel';
import type Map from '../Map.d';
import type { Marker, MarkerEventType } from './Marker';

export type TextOptions<ExtraData = any> = {
  /** 要显示该marker的地图对象 */
  map?: Map;
  /** 点标记在地图上显示的位置 */
  position?: LngLatLike;
  /** 标记显示的文本内容 */
  text?: string;
  /** 鼠标滑过点标记时的文字提示 */
  title?: string;
  /** 点标记是否可见，默认为true */
  visible?: boolean;
  /** 点标记的叠加顺序 */
  zIndex?: number;
  /** 点标记显示位置偏移量，默认值 [0, 0] 。 图解说明 */
  offset?: PixelLike;
  /** 设置点标记锚点。默认值：'center'。可选值：'top-left'|'top-center'|'top-right'|'middle-left'|'center'|'middle-right'|'bottom-left'|'bottom-center'|'bottom-right' */
  anchor?: string | number[];
  /** 点标记的旋转角度。默认值：0 。注：angle属性是使用CSS3来实现的，支持IE9及以上版本 */
  angle?: number;
  /** 点标记是否可点击。默认值: true */
  clickable?: boolean;
  /** 设置点标记是否可拖拽移动。默认值：false */
  draggable?: boolean;
  /** 事件是否冒泡，默认值：false */
  bubble?: boolean;
  /** 点标记显示的层级范围，超过范围不显示。默认值：zooms: [2, 20] 。 */
  zooms?: [number, number];
  /** 指定鼠标悬停时的鼠标样式。 */
  cursor?: string;
  /** 鼠标点击时marker是否置顶，默认值: false */
  topWhenClick?: boolean;
  /** 用户自定义属性 ，支持JavaScript API任意数据类型，如 Marker的id等。可将自定义数据保存在该属性上，方便后续操作使用。 */
  extData?: ExtraData;
  /** 设置文本样式，Object 同 css 样式表，如:{'background-color':'red'} */
  style?: CSSStyleDeclaration;
  // 文本标注的内容，该属性为直接显示在标注上的文本内容。
  content?: HTMLElement | string;
  // 文本标注方位。若设置了 icon，则 direction 是以 icon 为中心的偏移，若未设置 icon，则相对 position 偏移。 可选值：'top' | 'right' | 'bottom' | 'left' | 'center'。默认值: right
  direction?: 'top' | 'right' | 'bottom' | 'left' | 'center';
};

export type TextEventType = MarkerEventType;

/**
 * 文本标记.
 * 验证后继成自 Marker
 * https://lbs.amap.com/api/javascript-api-v2/documentation#text
 */
export declare class Text<ExtraData = any> extends Marker<ExtraData> {
  constructor(opts?: TextOptions<ExtraData>);
  /**
   * 获取文本内容
   */
  getText(): string | undefined;
  /**
   * 设置文本标记内容
   * @param text
   */
  setText(text: string): void;
  /**
   * 修改文本标记样式。Object同css样式表，
   * @param {CSSStyleDeclaration} style
   */
  setStyle(style: CSSStyleDeclaration): void;
}
