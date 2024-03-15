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

import { Text, TextOptions, TextEventType } from './overlays/Text';
import { Icon, IconOptions, IconEventType } from './overlays/Icon';
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
      ContextMenu,
      ContextMenuOptions,
      ContextMenuEventType,

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

      // others
      SecurityConfig,
    };

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
