import type Map from '../Map';
import type { LngLatLike } from '../common/LngLat';
import type { PixelLike } from '../common/Pixel';
import type { Marker, MarkerEventType } from './Marker';

export type ElasticStyle = {
  icon?: {
    /** 图标 url */
    img?: string;
    /** 图标显示大小 */
    size?: number[];
    /** 图标锚点 */
    anchor?: string | PixelLike;
    /** 图片偏移量 */
    imageOffset?: number[];
    /** 图片大小 */
    imageSize?: number;
    /** 最合适的级别，在此级别下显示为原始大小 */
    fitZoom?: number;
    /** 地图放大一级的缩放比例系数 */
    scaleFactor?: number;
    /** 最大放大比例 */
    maxScale?: number;
    /** 最小放大比例 */
    minScale?: number;
  };
  label?: {
    /** 文本内容. 文档未说明 */
    content?: any;
    /** 文本位置相对于图标的基准点，可选值：BL、BM、BR、ML、MR、TL、TM、TR分别代表左下角、底部中央、右下角、左侧中央、右侧中央、左上角、顶部中央、右上角 */
    position?: 'BL' | 'BM' | 'BR' | 'ML' | 'MR' | 'TL' | 'TM' | 'TR';
    /** 相对position的偏移量。文档未说明 */
    offset?: any;
    /** label的最小显示级别。文档未说明 */
    minZoom?: any;
  };
};

export type ElasticMarkerOptions<ExtraData = any> = {
  map?: Map;
  position?: LngLatLike;
  visible?: boolean;
  zIndex?: number;
  offset?: PixelLike;
  clickable?: boolean;
  draggable?: boolean;
  bubble?: boolean;
  cursor?: string;
  topWhenClick?: boolean;
  zoomStyleMapping?: Record<string, number>;
  extData?: ExtraData;
  styles?: ElasticStyle[];
};

export type ElasticMarkerEventType = MarkerEventType;

/**
 * 灵活点标记
 * 验证后继成自 Marker
 * https://lbs.amap.com/api/javascript-api-v2/documentation#elasticmarker
 */
export declare class ElasticMarker<ExtraData = any> extends Marker<ExtraData> {
  constructor(opts?: ElasticMarkerOptions<ExtraData>);
}

export default ElasticMarker;
