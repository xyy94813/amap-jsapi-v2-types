import type { LngLat, LngLatLike } from './common/LngLat';
import type Bounds from './common/Bounds';
import type Pixel from './common/Pixel';
import type Size from './common/Size';
import type { Event, MapsEvent } from './common/Event';

import type {
  TileLayer,
  TileLayerOptions,
  TrafficLayerOptions,
  SatelliteLayerOptions,
  RoadNetLayerOptions,
  WMSLayerOptions,
  WMTSLayerOptions,
  FlexibleLayerOptions,
} from './layers/TileLayer';
import type {
  Buildings,
  BuildingsStyleOptions,
  BuildingsLayerOptions,
} from './layers/BuildingsLayer';
import type {
  DistrictLayer,
  DistrictLayerStyle,
  DistrictLayerOptions,
} from './layers/DistrictLayer';
import type { VectorLayer, VectorLayerOption } from './layers/VectorLayer';
import type { CustomLayer, CustomLayerOption } from './layers/CustomLayer';
import type { ImageLayer, ImageLayerOption } from './layers/ImageLayer';
import type { CanvasLayer, CanvasLayerOption } from './layers/CanvasLayer';
import type {
  GLCustomLayer,
  GLCustomLayerOption,
} from './layers/GLCustomLayer';
import type { HeatMap, HeatMapOption } from './layers/HeatMap';
import type {
  MapboxVTLayerOptions,
  MapboxVectorTileLayer,
} from './layers/MapboxVectorTileLayer';

import type GeometryUtil from './utils/GeometryUtil';
import type DomUtil from './utils/DomUtil';
import type Browser from './utils/Browser';
import type Util from './utils/Util';

/**
 * 高德地图 JS API v2 类型声明
 */
declare namespace AMap {
  export {
    // 基础类
    LngLat,
    LngLatLike,
    Bounds,
    Pixel,
    Size,
    Event,
    MapsEvent,

    // 官方图层
    TileLayer,
    TileLayerOptions,
    TrafficLayerOptions,
    SatelliteLayerOptions,
    RoadNetLayerOptions,
    WMSLayerOptions,
    WMTSLayerOptions,
    FlexibleLayerOptions,
    Buildings,
    BuildingsStyleOptions,
    BuildingsLayerOptions,
    DistrictLayer,
    DistrictLayerStyle,
    DistrictLayerOptions,

    // 自有数据图层
    VectorLayer,
    VectorLayerOption,
    CustomLayer,
    CustomLayerOption,
    ImageLayer,
    ImageLayerOption,
    CanvasLayer,
    CanvasLayerOption,
    GLCustomLayer,
    GLCustomLayerOption,
    HeatMap,
    HeatMapOption,
    MapboxVectorTileLayer,
    MapboxVTLayerOptions,

    // 工具
    GeometryUtil,
    Browser,
    Util,
    DomUtil,
  };
}

declare global {
  interface Window {
    AMap: typeof AMap;
  }
}

export { AMap };
