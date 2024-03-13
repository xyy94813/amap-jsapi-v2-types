import type { LngLatLike } from '../common/LngLat.js';
import type Pixel from '../common/Pixel.js';
import type Size from '../common/Size';
import type { Event } from '../common/Event';
import type { Map } from '../Map';
import type Marker from './Marker';

/** 需要进行聚合显示的点数据结构 */
export type MarkerClusterDataOption = Record<string | number | symbol, any> & {
  lnglat: LngLatLike[];
  weight?: number;
};

export type MarkerClusterOptions = {
  /** 聚合计算时网格的像素大小，默认60 */
  gridSize?: number;
  /** 最大的聚合级别，大于该级别就不进行相应的聚合。默认值为 18，即小于 18 级的级别均进行聚合，18 及以上级别不进行聚合 */
  maxZoom?: number;
  /** 聚合点的图标位置是否是所有聚合内点的中心点。默认为 true。数据中如果含有权重值，以权重高的点为中心进行聚合 */
  averageCenter?: boolean;
  /** 地图缩放过程中是否聚合。默认值 false。 */
  clusterByZoomChange?: boolean;
  /**
   * 指定聚合后的点标记的图标样式，可缺省，缺省时为默认样式数据元素分别对应聚合量在1-10,11-100,101-1000…的聚合点的样式；
   * 当用户设置聚合样式少于实际叠加的点数，未设置部分按照系统默认样式显示；
   * */
  styles?: Array<{
    /** 图标显示图片的url地址 */
    url: string;
    /** 图标显示图片的大小（必选） */
    size: Size;
    /** 图标定位在地图上的位置相对于图标左上角的偏移值。默认为(0,0),不偏移（可选） */
    offset?: Pixel;
    /** 图片相对于可视区域的偏移值，此功能的作用等同CSS中的background-position属性。默认为(0,0)，不偏移（可选） */
    imageOffset?: Pixel;
    /** 文字的颜色，默认为"#000000"（可选） */
    textColor?: string;
    /** 文字的大小，默认为10（可选） */
    textSize?: number;
  }>;
  /**
   * 该方法用来实现聚合点的自定义绘制，由开发者自己实现，API 将在绘制每个聚合点的时候调用这个方法，可以实现聚合点样式的灵活设定，指定了 renderClusterMarker 后 styles 无效。
   * 该函数的入参为一个Object，包含如下属性：
   * 1. count: 当前聚合点下聚合的 Marker 的数量
   * 2. marker: 当前聚合点显示的 Marker
   */
  renderClusterMarker?: (opts: { count: number; marker: Marker }) => any;
  /**
   * 该方法用来实现非聚合点的自定义绘制，由开发者自己实现，API 将在绘制每个非聚合点的时候调用这个方法
   * 该函数的入参为一个Object，包含如下属性：
   * - marker: 非聚合点 Marker 对象
   */
  renderMarker?: (opts: { marker: Marker }) => any;
};

export type MarkerClusterEventType = string;

/**
 * 用于展示大量点标记，将点标记按照距离进行聚合，以提高绘制性能。点聚合支持用户自定义样式，以插件形式调用。
 * https://lbs.amap.com/api/javascript-api-v2/documentation#markercluster
 */
export declare class MarkerCluster extends Event<string> {
  constructor(
    map?: Map,
    dataOptions?: MarkerClusterDataOption[],
    MarkerClusterOptions?: MarkerClusterOptions,
  );
  /** 在原数据基础上添加数据，格式同 dataOptions */
  addData(dataOptions: MarkerClusterDataOption[]): void;
  /** 设置数据，格式同 dataOptions.  */
  setData(dataOptions: MarkerClusterDataOption[]): void;
  /** 获取聚合点的总数量 */
  getClustersCount(): number;
  /** 获取聚合网格的像素大小 */
  getGridSize(): number;
  /** 设置聚合网格的像素大小 */
  setGridSize(size: number): void;
  /** 获取地图中点标记的最大聚合级别 */
  getMaxZoom(): number;
  /** 设置地图中点标记的最大聚合级别 */
  setMaxZoom(zoom: number): void;
  /** 获取样式 */
  getStyles(): MarkerClusterOptions['styles'];
  /** 设置样式聚合点，格式同 opts.styles */
  setStyles(styles: MarkerClusterOptions['styles']): void;
  /** 获取地图对象 */
  getMap(): Map | undefined;
  /** 设置地图对象 */
  setMap(map: Map | null): void;
  /** 获取单个聚合点位置是否是聚合内所有标记的平均中心 */
  isAverageCenter(): boolean;
  /** 设置聚合点位置是否是所有聚合点的中心 */
  setAverageCenter(averageCenter: boolean): void;
}

export default MarkerCluster;
