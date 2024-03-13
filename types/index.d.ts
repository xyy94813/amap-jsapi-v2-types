import type { LngLat, LngLatLike } from './common/LngLat';
import type { Bounds, BoundsLike } from './common/Bounds';
import type { Pixel, PixelLike } from './common/Pixel';
import type { Size, SizeLike } from './common/Size';
import type { Event, MapsEvent } from './common/Event';
import type { MapOptions, MapEventType, Map } from './Map';

import type BaseLayer from './layers/BaseLayer';
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

import type {
  MoveAnimation,
  AnimationCallback,
  EasingCallback,
  MoveToOptions,
  MoveAlongOptions,
  MoveAlongObj,
} from './animates/MoveAnimation';

import type { Text, TextOptions, TextEventType } from './overlays/Text';
import type { Icon, IconOptions, IconEventType } from './overlays/Icon';
import type {
  LabelMarker,
  LabelMarkerOptions,
  LabelMarkerEventType,
  LabelMarkerTextOptions,
  LabelMarkerIconOptions,
} from './overlays/LabelMarker';
import type {
  Marker,
  MarkerOptions,
  MarkerLabelOptions,
  MarkerEventType,
} from './overlays/Marker';
import type {
  ElasticMarker,
  ElasticMarkerOptions,
  ElasticMarkerEventType,
  ElasticStyle,
} from './overlays/ElasticMarker';
import type {
  MarkerCluster,
  MarkerClusterOptions,
  MarkerClusterEventType,
  MarkerClusterDataOption,
} from './overlays/MarkerCluster';
import type {
  MassMarks,
  MassMarkersOptions,
  MassMarksEventType,
  MassMarkersStyleOption,
  MassMarkersDataOption,
} from './overlays/MassMarks';
import type {
  Polygon,
  PolygonEventType,
  PolygonOptions,
} from './overlays/Polygon';
import type {
  Polyline,
  PolylineOptions,
  PolylineEventType,
} from './overlays/Polyline';
import type {
  BezierCurve,
  BezierCurveOptions,
  BezierCurveEventType,
} from './overlays/BezierCurve';
import type { Circle, CircleOptions, CircleEventType } from './overlays/Circle';
import type {
  CircleMarker,
  CircleMarkerOptions,
  CircleMarkerEventType,
} from './overlays/CircleMarker';
import type {
  Ellipse,
  EllipseOptions,
  EllipseEventType,
} from './overlays/Ellipse';
import type {
  Rectangle,
  RectangleOptions,
  RectangleEventType,
} from './overlays/Rectangle';

import type { LayerGroup, LayerGroupEventType } from './layers/LayerGroup';
import type {
  OverlayGroup,
  OverlayGroupEventType,
} from './overlays/OverlayGroup';
import type { GeoJSON, GeoJSONOptions } from './overlays/GeoJSON';

import type {
  RangingTool,
  RangingToolOptions,
  RangingToolEventType,
} from './tools/RangingTool.d.ts';
import type { MouseTool, MouseToolEventType } from './tools/MouseTool.d.ts';
import type {
  PolygonEditor,
  PolygonEditorOptions,
  PolygonEditorEventType,
} from './tools/PolygonEditor';
import type {
  PolylineEditor,
  PolylineEditorOptions,
  PolylineEditorEventType,
} from './tools/PolylineEditor';
import type {
  CircleEditor,
  CircleEditorOptions,
  CircleEditorEventType,
} from './tools/CircleEditor';
import type {
  BezierCurveEditor,
  BezierCurveEditorOptions,
  BezierCurveEditorEventType,
} from './tools/BezierCurveEditor';
import type {
  EllipseEditor,
  EllipseEditorOptions,
  EllipseEditorEventType,
} from './tools/EllipseEditor';
import type {
  RectangleEditor,
  RectangleEditorOptions,
  RectangleEditorEventType,
} from './tools/RectangleEditor';

import type { Control, CommonControlConfig } from './controls/Control.d.ts';
import type { ControlBar, ControlBarConfig } from './controls/ControlBar.d.ts';
import type { HawkEye, HawkEyeOptions } from './controls/HawkEye.d.ts';
import type { MapType, MapTypeOptions } from './controls/MapType.d.ts';
import type { Scale, ScaleConfig } from './controls/Scale.d.ts';
import type { ToolBar, ToolBarConfig } from './controls/ToolBar.d.ts';

import type GeometryUtil from './utils/GeometryUtil';
import type DomUtil from './utils/DomUtil';
import type Browser from './utils/Browser';
import type Util from './utils/Util';

import type SecurityConfig from './SecurityConfig';

/**
 * 高德地图 JS API v2 类型声明
 */
declare namespace AMap {
  export {
    // 基础类
    LngLat,
    LngLatLike,
    Bounds,
    BoundsLike,
    Pixel,
    PixelLike,
    Size,
    SizeLike,
    Event,
    Map,
    MapsEvent,
    MapOptions,
    MapEventType,

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

    // animate
    MoveAnimation,
    AnimationCallback,
    EasingCallback,
    MoveToOptions,
    MoveAlongOptions,
    MoveAlongObj,

    // overlays
    Text,
    TextOptions,
    TextEventType,
    Icon,
    IconOptions,
    IconEventType,
    LabelMarker,
    LabelMarkerOptions,
    LabelMarkerEventType,
    LabelMarkerTextOptions,
    LabelMarkerIconOptions,
    Marker,
    MarkerOptions,
    MarkerLabelOptions,
    MarkerEventType,
    ElasticMarker,
    ElasticMarkerOptions,
    ElasticMarkerEventType,
    ElasticStyle,
    MarkerCluster,
    MarkerClusterOptions,
    MarkerClusterEventType,
    MarkerClusterDataOption,
    MassMarks,
    MassMarkersOptions,
    MassMarksEventType,
    MassMarkersStyleOption,
    MassMarkersDataOption,
    Polygon,
    PolygonEventType,
    PolygonOptions,
    Polyline,
    PolylineOptions,
    PolylineEventType,
    BezierCurve,
    BezierCurveOptions,
    BezierCurveEventType,
    Circle,
    CircleOptions,
    CircleEventType,
    CircleMarker,
    CircleMarkerOptions,
    CircleMarkerEventType,
    Ellipse,
    EllipseOptions,
    EllipseEventType,
    Rectangle,
    RectangleOptions,
    RectangleEventType,

    // group
    LayerGroup,
    LayerGroupEventType,
    OverlayGroup,
    OverlayGroupEventType,
    GeoJSON,
    GeoJSONOptions,

    // tools
    RangingTool,
    RangingToolOptions,
    RangingToolEventType,
    MouseTool,
    MouseToolEventType,
    PolygonEditor,
    PolygonEditorOptions,
    PolygonEditorEventType,
    PolylineEditor,
    PolylineEditorOptions,
    PolylineEditorEventType,
    CircleEditor,
    CircleEditorOptions,
    CircleEditorEventType,
    BezierCurveEditor,
    BezierCurveEditorOptions,
    BezierCurveEditorEventType,
    EllipseEditor,
    EllipseEditorOptions,
    EllipseEditorEventType,
    RectangleEditor,
    RectangleEditorOptions,
    RectangleEditorEventType,

    // 地图控件
    Control,
    CommonControlConfig,
    ControlBar,
    ControlBarConfig,
    HawkEye,
    HawkEyeOptions,
    MapType,
    MapTypeOptions,
    Scale,
    ScaleConfig,
    ToolBar,
    ToolBarConfig,

    // 工具
    GeometryUtil,
    Browser,
    Util,
    DomUtil,
  };

  export const version: string;

  /** 默认图层. NebulaLayer??? */
  export const createDefaultLayer: (opts?: any) => BaseLayer | any;

  /** 加载插件 */
  export function plugin(pluginName: string, cb: () => void): void;
  export function plugin(pluginNames: string[], cb: () => void): void;

  /**
   * 为坐标转换类，支持将其他坐标系的坐标点转换为高德坐标系。坐标转换方法
   * @param {LngLatLike} lnglat
   * @param {string} type
   * @param {Function} callBack
   */
  export function convertFrom(
    lnglat: LngLatLike,
    type: 'gps' | 'baidu' | 'mapbar',
    callBack: (status: string, result: any) => void,
  ): void;
}

declare global {
  interface Window {
    AMap: typeof AMap;
    _AMapSecurityConfig?: SecurityConfig;
  }
}

// 非 AMap 上的类型
// 通过声明顺序控制 window.AMap 将不带以下类型
declare namespace AMap {
  export { SecurityConfig };
}

export { AMap, SecurityConfig };
