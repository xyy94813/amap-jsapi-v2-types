import { LngLat, LngLatLike } from './common/LngLat';
import { Bounds, BoundsLike } from './common/Bounds';
import { Pixel, PixelLike } from './common/Pixel';
import { Size, SizeLike } from './common/Size';
import { Event, MapsEvent } from './common/Event';
import { MapOptions, MapEventType, Map } from './Map';

import BaseLayer from './layers/BaseLayer';
import {
  TileLayer,
  TileLayerOptions,
  TrafficLayerOptions,
  SatelliteLayerOptions,
  RoadNetLayerOptions,
  WMSLayerOptions,
  WMTSLayerOptions,
  FlexibleLayerOptions,
} from './layers/TileLayer';
import {
  Buildings,
  BuildingsStyleOptions,
  BuildingsLayerOptions,
} from './layers/BuildingsLayer';
import {
  DistrictLayer,
  DistrictLayerStyle,
  DistrictLayerOptions,
} from './layers/DistrictLayer';
import { VectorLayer, VectorLayerOption } from './layers/VectorLayer';
import { LabelsLayer, LabelsLayerOption } from './layers/LabelsLayer';
import { CustomLayer, CustomLayerOption } from './layers/CustomLayer';
import { ImageLayer, ImageLayerOption } from './layers/ImageLayer';
import { CanvasLayer, CanvasLayerOption } from './layers/CanvasLayer';
import { GLCustomLayer, GLCustomLayerOption } from './layers/GLCustomLayer';
import { HeatMap, HeatMapOption } from './layers/HeatMap';
import {
  MapboxVTLayerOptions,
  MapboxVectorTileLayer,
} from './layers/MapboxVectorTileLayer';

import {
  MoveAnimation,
  AnimationCallback,
  EasingCallback,
  MoveToOptions,
  MoveAlongOptions,
  MoveAlongObj,
} from './animates/MoveAnimation';

import { Overlay } from './overlays/Overlay';
import { Text, TextOptions, TextEventType } from './overlays/Text';
import { Icon, IconOptions } from './overlays/Icon';
import {
  LabelMarker,
  LabelMarkerOptions,
  LabelMarkerEventType,
  LabelMarkerTextOptions,
  LabelMarkerIconOptions,
} from './overlays/LabelMarker';
import {
  Marker,
  MarkerOptions,
  MarkerLabelOptions,
  MarkerEventType,
} from './overlays/Marker';
import {
  ElasticMarker,
  ElasticMarkerOptions,
  ElasticMarkerEventType,
  ElasticStyle,
} from './overlays/ElasticMarker';
import {
  MarkerCluster,
  MarkerClusterOptions,
  MarkerClusterEventType,
  MarkerClusterDataOption,
} from './overlays/MarkerCluster';
import {
  MassMarks,
  MassMarkersOptions,
  MassMarksEventType,
  MassMarkersStyleOption,
  MassMarkersDataOption,
} from './overlays/MassMarks';
import { Polygon, PolygonEventType, PolygonOptions } from './overlays/Polygon';
import {
  Polyline,
  PolylineOptions,
  PolylineEventType,
} from './overlays/Polyline';
import {
  BezierCurve,
  BezierCurveOptions,
  BezierCurveEventType,
} from './overlays/BezierCurve';
import { Circle, CircleOptions, CircleEventType } from './overlays/Circle';
import {
  CircleMarker,
  CircleMarkerOptions,
  CircleMarkerEventType,
} from './overlays/CircleMarker';
import { Ellipse, EllipseOptions, EllipseEventType } from './overlays/Ellipse';
import {
  Rectangle,
  RectangleOptions,
  RectangleEventType,
} from './overlays/Rectangle';
import {
  ContextMenu,
  ContextMenuOptions,
  ContextMenuEventType,
} from './overlays/ContextMenu';
import {
  InfoWindow,
  InfoWindowOptions,
  InfoWindowEventType,
} from './overlays/InfoWindow';

import { LayerGroup, LayerGroupEventType } from './layers/LayerGroup';
import { OverlayGroup, OverlayGroupEventType } from './overlays/OverlayGroup';
import { GeoJSON, GeoJSONOptions } from './overlays/GeoJSON';

import {
  RangingTool,
  RangingToolOptions,
  RangingToolEventType,
} from './tools/RangingTool';
import { MouseTool, MouseToolEventType } from './tools/MouseTool';
import {
  PolygonEditor,
  PolygonEditorOptions,
  PolygonEditorEventType,
} from './tools/PolygonEditor';
import {
  PolylineEditor,
  PolylineEditorOptions,
  PolylineEditorEventType,
} from './tools/PolylineEditor';
import {
  CircleEditor,
  CircleEditorOptions,
  CircleEditorEventType,
} from './tools/CircleEditor';
import {
  BezierCurveEditor,
  BezierCurveEditorOptions,
  BezierCurveEditorEventType,
} from './tools/BezierCurveEditor';
import {
  EllipseEditor,
  EllipseEditorOptions,
  EllipseEditorEventType,
} from './tools/EllipseEditor';
import {
  RectangleEditor,
  RectangleEditorOptions,
  RectangleEditorEventType,
} from './tools/RectangleEditor';

import { Control, CommonControlConfig } from './controls/Control';
import { ControlBar, ControlBarConfig } from './controls/ControlBar';
import { HawkEye, HawkEyeOptions } from './controls/HawkEye';
import { MapType, MapTypeOptions } from './controls/MapType';
import { Scale, ScaleConfig } from './controls/Scale';
import { ToolBar, ToolBarConfig } from './controls/ToolBar';

import GeometryUtil from './utils/GeometryUtil';
import DomUtil from './utils/DomUtil';
import Browser from './utils/Browser';
import Util from './utils/Util';

import SecurityConfig from './SecurityConfig';

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    AMap?: typeof AMap;
    _AMapSecurityConfig?: SecurityConfig;
  }

  /**
   * 高德地图 JS API v2 类型声明
   */
  namespace AMap {
    export {
      // 基础类
      LngLat,
      type LngLatLike,
      Bounds,
      type BoundsLike,
      Pixel,
      type PixelLike,
      Size,
      type SizeLike,
      Event,
      Map,
      type MapsEvent,
      type MapOptions,
      type MapEventType,

      // 官方图层
      TileLayer,
      type TileLayerOptions,
      type TrafficLayerOptions,
      type SatelliteLayerOptions,
      type RoadNetLayerOptions,
      type WMSLayerOptions,
      type WMTSLayerOptions,
      type FlexibleLayerOptions,
      Buildings,
      type BuildingsStyleOptions,
      type BuildingsLayerOptions,
      DistrictLayer,
      type DistrictLayerStyle,
      type DistrictLayerOptions,

      // 自有数据图层
      VectorLayer,
      type VectorLayerOption,
      LabelsLayer,
      type LabelsLayerOption,
      CustomLayer,
      type CustomLayerOption,
      ImageLayer,
      type ImageLayerOption,
      CanvasLayer,
      type CanvasLayerOption,
      GLCustomLayer,
      type GLCustomLayerOption,
      HeatMap,
      type HeatMapOption,
      MapboxVectorTileLayer,
      type MapboxVTLayerOptions,

      // animate
      type MoveAnimation,
      type AnimationCallback,
      type EasingCallback,
      type MoveToOptions,
      type MoveAlongOptions,
      type MoveAlongObj,

      // overlays
      Overlay, // 仅为了生成更合理的 UML
      Text,
      type TextOptions,
      type TextEventType,
      Icon,
      type IconOptions,
      LabelMarker,
      type LabelMarkerOptions,
      type LabelMarkerEventType,
      type LabelMarkerTextOptions,
      type LabelMarkerIconOptions,
      Marker,
      type MarkerOptions,
      type MarkerLabelOptions,
      type MarkerEventType,
      ElasticMarker,
      type ElasticMarkerOptions,
      type ElasticMarkerEventType,
      type ElasticStyle,
      MarkerCluster,
      type MarkerClusterOptions,
      type MarkerClusterEventType,
      type MarkerClusterDataOption,
      MassMarks,
      type MassMarkersOptions,
      type MassMarksEventType,
      type MassMarkersStyleOption,
      type MassMarkersDataOption,
      Polygon,
      type PolygonEventType,
      type PolygonOptions,
      Polyline,
      type PolylineOptions,
      type PolylineEventType,
      BezierCurve,
      type BezierCurveOptions,
      type BezierCurveEventType,
      Circle,
      type CircleOptions,
      type CircleEventType,
      CircleMarker,
      type CircleMarkerOptions,
      type CircleMarkerEventType,
      Ellipse,
      type EllipseOptions,
      type EllipseEventType,
      Rectangle,
      type RectangleOptions,
      type RectangleEventType,
      ContextMenu,
      type ContextMenuOptions,
      type ContextMenuEventType,
      InfoWindow,
      type InfoWindowOptions,
      type InfoWindowEventType,

      // group
      LayerGroup,
      type LayerGroupEventType,
      OverlayGroup,
      type OverlayGroupEventType,
      GeoJSON,
      type GeoJSONOptions,

      // tools
      RangingTool,
      type RangingToolOptions,
      type RangingToolEventType,
      MouseTool,
      type MouseToolEventType,
      PolygonEditor,
      type PolygonEditorOptions,
      type PolygonEditorEventType,
      PolylineEditor,
      type PolylineEditorOptions,
      type PolylineEditorEventType,
      CircleEditor,
      type CircleEditorOptions,
      type CircleEditorEventType,
      BezierCurveEditor,
      type BezierCurveEditorOptions,
      type BezierCurveEditorEventType,
      EllipseEditor,
      type EllipseEditorOptions,
      type EllipseEditorEventType,
      RectangleEditor,
      type RectangleEditorOptions,
      type RectangleEditorEventType,

      // 地图控件
      Control,
      type CommonControlConfig,
      ControlBar,
      type ControlBarConfig,
      HawkEye,
      type HawkEyeOptions,
      MapType,
      type MapTypeOptions,
      Scale,
      type ScaleConfig,
      ToolBar,
      type ToolBarConfig,

      // 工具
      // type GeometryUtil,
      // type Browser,
      // type Util,
      // type DomUtil,

      // others
      type SecurityConfig,
    };

    export const GeometryUtil: GeometryUtil;
    export const Browser: Browser;
    export const Util: Util;
    export const DomUtil: DomUtil;

    export const version: string;

    /** 默认图层. NebulaLayer??? */
    export function createDefaultLayer(opts?: any): BaseLayer | any;

    /** 加载插件 */
    export function plugin(pluginName: string, cb: Function): void;
    export function plugin(pluginNames: string[], cb: Function): void;

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
}

export default AMap;
