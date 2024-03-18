import type { BaseLayer, CommonLayerOptions } from './BaseLayer';

export type TileLayerOptions = CommonLayerOptions & {
  tileUrl?: string;
  dataZooms?: [number, number];
  tileSize?: number;
};

type TileLayerEventType = 'complete' | string;

/**
 * 切片图层类，该类为基础类。
 * https://lbs.amap.com/api/javascript-api-v2/documentation#tilelayer
 *
 * @example new AMap.TileLayer(opts: TileLayerOptions)
 */
export declare class TileLayer extends BaseLayer<TileLayerEventType> {
  constructor(opts: TileLayerOptions);
  /**
   * 设置图层的取图地址
   * @param {string} url 瓦片图地址
   */
  setTileUrl(url: string): void;
  /**
   * 重新加载图层资源，重新渲染
   * @returns {void}
   * */
  reload(): void;

  // setzIndex // BaseLayer 里声明
  // getzIndex // BaseLayer 里声明
  // setOpacity // BaseLayer 里声明
  // getOpacity // BaseLayer 里声明
  // getOptions // BaseLayer 里声明
  // getZooms // BaseLayer 里声明
  // setZooms // BaseLayer 里声明
  // destroy // BaseLayer 里声明

  // static property
  static Traffic: TrafficLayer;
  static Satellite: SatelliteLayer;
  static RoadNet: RoadNetLayer;
  static WMS: WMSLayer;
  static WMTS: WMTSLayer;
  static Flexible: FlexibleLayer;
}

export type TrafficLayerOptions = CommonLayerOptions &
Pick<TileLayerOptions, 'tileSize'> & {
  /** 是否自动更新数据，默认开启 */
  autoRefresh?: boolean;
  /** 自动更新数据的间隔毫秒数，默认 180ms */
  interval?: number;
};

/**
 * 切片图层类，该类为基础类。
 * https://lbs.amap.com/api/javascript-api-v2/documentation#traffic
 *
 * @example new AMap.TileLayer.Traffic(opts: TrafficLayerOptions)
 */
declare class TrafficLayer extends TileLayer {
  constructor(opts?: TrafficLayerOptions);

  /**
   * 停止自动更新数据
   */
  stopFresh(): void;
}

export type SatelliteLayerOptions = CommonLayerOptions &
Pick<TileLayerOptions, 'tileSize'>;

/**
 * 卫星图层类
 * https://lbs.amap.com/api/javascript-api-v2/documentation#satellite
 *
 * @example new AMap.TileLayer.Satellite(opts: SatelliteLayerOptions)
 */
declare class SatelliteLayer extends TileLayer {
  constructor(opts?: SatelliteLayerOptions);
}

export type RoadNetLayerOptions = CommonLayerOptions &
Pick<TileLayerOptions, 'tileSize'>;

/**
 * 路网图层，展示道路信息
 * @example new AMap.TileLayer.RoadNet(opts: RoadNetLayerOptions)
 *
 * https://lbs.amap.com/api/javascript-api-v2/documentation#roadnet
 */
declare class RoadNetLayer extends TileLayer {
  constructor(opts?: RoadNetLayerOptions);
}

export type WMSLayerOptions = CommonLayerOptions & {
  /** wms服务的url地址，如' https://ahocevar.com/geoserver/wms' */
  url?: string;
  /** 地图级别切换时，不同级别的图片是否进行混合，如图层的图像内容为部分透明请设置为false */
  blend?: boolean;
  /** OGC标准的WMS地图服务的GetMap接口的参数 */
  param?: any;
};

/**
 * 用于加载OGC标准的WMS地图服务的一种图层类，仅支持EPSG3857坐标系统的WMS图层。
 * [查看 WMS 的 OGC 标准](http://www.opengeospatial.org/standards/wms)
 *
 * https://lbs.amap.com/api/javascript-api-v2/documentation#wms
 *
 */
declare class WMSLayer extends TileLayer {
  constructor(options?: WMSLayerOptions);

  /**
   * 设置OGC标准的WMS getMap接口的参数
   * @param {Object} params
   */
  setParams(params: Object): void;
  /**
   * 获取 OGC 标准的 WMS getMap 接口的参数
   * @returns {Object}
   */
  getParams(): Object;
  /**
   * 设置 WMS 服务地址
   * @param url
   */
  setUrl(url: string): void;
  /**
   * 获取 WMS 服务地址
   * @returns {string}
   */
  getUrl(): string;
}

export type WMTSLayerOptions = CommonLayerOptions & {
  /** wmts服务的url地址，如：' https://services.arcgisonline.com/arcgis/rest/services/'+ 'Demographics/USA_Population_Density/MapServer/WMTS/' */
  url?: string;
  /** 地图级别切换时，不同级别的图片是否进行混合，如图层的图像内容为部分透明请设置为false */
  blend?: boolean;
  /** OGC标准的WMTS地图服务的GetTile接口的参数 */
  param?: any;
};

declare class WMTSLayer extends WMSLayer {
  constructor(options?: WMTSLayerOptions);
}

export type FlexibleLayerOptions = CommonLayerOptions &
Pick<TileLayerOptions, 'tileSize'> & {
  /** 缓存贴图的数量 */
  cacheSize?: number;
  /**
     * 由开发者实现，由API自动调用，xyz分别为切片横向纵向编号和层级，切片大小 256。
     * 文档未明确说明。
     * @param x
     * @param y
     * @param z
     * @param success
     * @param fail
     */
  createTile?(
    x: number,
    y: number,
    z: number,
    success: () => void,
    fail: () => void,
  ): any;
};

declare class FlexibleLayer extends TileLayer {
  constructor(options?: FlexibleLayerOptions);
}

export default TileLayer;
