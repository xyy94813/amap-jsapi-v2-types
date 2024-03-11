import type Pixel from '../common/Pixel';
import type Size from '../common/Size';
import type { LngLatLike, LngLat } from '../common/LngLat';
import type { MoveAnimation } from '../animates/MoveAnimation';
import type { Overlay } from './Overlay';
import type Bounds from '../common/Bounds';

type TextStyleOptions = {
  /** 文字大小，默认值： 12 */
  fontSize?: number;
  /** 文字颜色 */
  fillColor?: string;
  /** 文字描边颜色 */
  strokeColor?: string;
  /** 文字 padding。默认值： [3, 3, 3, 3] */
  padding?: string | Array<string | number>;
  /** 文字背景颜色 */
  backgroundColor?: string;
  /** 文字背景描边颜色 */
  borderColor?: string;
  /** 文字背景描边粗细 */
  borderWidth?: number;
  /** 文字是否折行（6个字一折行） */
  fold?: boolean;
};
export type LabelMarkerTextOptions = {
  content?: string;
  direction?: string;
  offset?: [number, number] | Pixel;
  zooms?: [number, number];
  style?: TextStyleOptions;
};

export type LabelMarkerIconOptions = {
  image?: string;
  size?: Size | [number, number];
  offset?: Pixel | [number, number];
  anchor?: string | number[] | Pixel;
  /**
   * 图标所在图片偏移位置，默认值: [0, 0]
   * @waring 未验证文档是否有误
   */
  clipOrigin: [number, number] | Pixel;
  /**
   * 图标所在图片裁剪大小，若未设置，则使用图片大小
   * @waring 未验证文档是否有误
   */
  clipSize: [number, number] | Size;
};

export type LabelMarkerOptions<ExtraData = any> = {
  /** 标注名称，作为标注标识，并非最终在地图上显示的文字内容，显示文字内容请设置 opts.text.content */
  name?: string;
  /** 	标注位置 */
  position?: LngLatLike;
  /** 标注显示级别范围， 可选值： [2,20] */
  zooms?: [number, number];
  /** 标注透明度，默认值: 1 */
  opacity?: number;
  /** 避让优先级，获取标注的优先级，该优先级用于 labelsLayer 支持避让时，rank 值大的标注会避让掉 rank 值低的标注。默认值：1 */
  rank?: number;
  /** 同一 LabelsLayer 内标注显示层级，数字越大越靠前，默认值: 1 */
  zIndex?: number;
  /** 标注是否可见， 默认值: true */
  visible?: boolean;
  /** 用户自定义类型数据，可将自定义数据保存在该属性上，方便后续操作使用。 */
  extData?: ExtraData;
  /** 未验证文档是否有误 */
  icon?: LabelMarkerIconOptions;
  text?: LabelMarkerTextOptions;
};

export type LabelMarkerEventType =
  | 'click'
  | 'mousemove'
  | 'mouseover'
  | 'mouseout'
  | 'mousedown'
  | 'mouseup'
  | 'touchstart'
  | 'touchmove'
  | 'touchend';

/**
 * 标注类
 * https://lbs.amap.com/api/javascript-api-v2/documentation#labelmarker
 */
export declare class LabelMarker<ExtraData = any>
  extends Overlay<ExtraData, LabelMarkerEventType>
  implements MoveAnimation
{
  constructor(options: LabelMarkerOptions<ExtraData>);
  /**
   * 获取标注的名称，作为标注标识，并非最终在地图上显示的文字内容
   * @returns {string | undefined}
   */
  getName(): string | undefined;
  /**
   * 设置标注的名称，作为标注标识，并非最终在地图上显示的文字内容
   * @param {string} name
   */
  setName(name: string): void;
  /**
   * 获取标注的显示位置
   * @returns {LngLat}
   */
  getPosition(): LngLat;
  /**
   * 设置标注的位置
   * @param {LngLat | [number] | string} position
   */
  setPosition(position: LngLatLike | string): void;
  /**
   * 获取标注显示级别范围
   * @returns {[number, number]}
   */
  getZooms(): [number, number];
  /**
   * 设置显示级别范围
   * @param {[number, number]} zooms
   */
  setZooms(zooms: [number, number]): void;
  /**
   * 获取标注透明度值
   * @returns {number}
   */
  getOpacity(): number;
  /**
   * 设置标注透明度
   * @param {number} opacity
   */
  setOpacity(opacity: number): void;
  /**
   * 获取标注的叠加顺序
   * @returns {number}
   */
  getzIndex(): number;
  /**
   * 设置标注的叠加顺序
   * @param {number} zIndex
   */
  setzIndex(zIndex: number): void;
  /**
   * 获取标注的优先级，该优先级用于 labelsLayer 支持避让时，rank 值大的标注会避让掉 rank 值低的标注。
   * @returns {number}
   */
  getRank(): number;
  /**
   * 设置标注的优先级，该优先级用于 labelsLayer 支持避让时，rank 值大的标注会避让掉 rank 值低的标注。
   * @param {number} rank
   */
  setRank(rank: number): void;
  /**
   * 获取标注的文本设置
   * @returns {LabelMarkerTextOptions | null}
   */
  getText(): LabelMarkerTextOptions | null;
  /**
   * 设置标注的文本设置，可设置显示的文字内容和文字样式等
   * @param {LabelMarkerTextOptions} textOpts
   */
  setText(textOpts: LabelMarkerTextOptions): void;
  /**
   * 获取标注的图标设置
   * @returns {LabelMarkerIconOptions | null}
   */
  getIcon(): LabelMarkerIconOptions | null;
  /**
   * 设置标注的图标设置，可设置显示的标注图片
   * @param {LabelMarkerIconOptions} iconOpts
   */
  setIcon(iconOpts: LabelMarkerIconOptions): void;
  /**
   * 是否设置置顶标注，设置为 true 表示该标注会显示在所有标注之前
   * @param {boolean} isTop
   */
  setTop(isTop: boolean): void;
  /**
   * 获取该标注的可见性
   * @returns {boolean}
   */
  getVisible(): boolean;
  /**
   * 获取该标注是否被避让，从而没有显示
   * @returns {boolean}
   */
  getCollision(): boolean;
  /**
   * @returns {Bounds}
   */
  getBounds(): Bounds;

  // MoveAnimation implementation
  moveTo: MoveAnimation['moveTo'];
  moveAlong: MoveAnimation['moveAlong'];
  startMove: MoveAnimation['startMove'];
  stopMove: MoveAnimation['stopMove'];
  pauseMove: MoveAnimation['pauseMove'];
  resumeMove: MoveAnimation['resumeMove'];
}

export default LabelMarker;
