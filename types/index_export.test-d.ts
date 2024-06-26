/* eslint-disable @typescript-eslint/no-invalid-void-type */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { expectType } from 'tsd';
import './index';

import { MapOptions, MapEventType, Map } from './Map';
import SecurityConfig from './SecurityConfig';
import MoveAnimation, { AnimationCallback, EasingCallback, MoveToOptions, MoveAlongOptions, MoveAlongObj } from './animates/MoveAnimation';
import Bounds, { BoundsLike } from './common/Bounds';
import { Event, MapsEvent } from './common/Event';
import LngLat, { LngLatLike } from './common/LngLat';
import Pixel, { PixelLike } from './common/Pixel';
import Size, { SizeLike } from './common/Size';
import { Control, CommonControlConfig } from './controls/Control';
import ControlBar, { ControlBarConfig } from './controls/ControlBar';
import HawkEye, { HawkEyeOptions } from './controls/HawkEye';
import { MapType, MapTypeOptions } from './controls/MapType';
import Scale, { ScaleConfig } from './controls/Scale';
import ToolBar, { ToolBarConfig } from './controls/ToolBar';
import Buildings, { BuildingsLayerOptions, BuildingsStyleOptions } from './layers/BuildingsLayer';
import CanvasLayer, { CanvasLayerOption } from './layers/CanvasLayer';
import CustomLayer, { CustomLayerOption } from './layers/CustomLayer';
import DistrictLayer, { DistrictLayerStyle, DistrictLayerOptions } from './layers/DistrictLayer';
import GLCustomLayer, { GLCustomLayerOption } from './layers/GLCustomLayer';
import HeatMap, { HeatMapOption } from './layers/HeatMap';
import ImageLayer, { ImageLayerOption } from './layers/ImageLayer';
import LabelsLayer, { LabelsLayerOption } from './layers/LabelsLayer';
import LayerGroup, { LayerGroupEventType } from './layers/LayerGroup';
import MapboxVectorTileLayer, { MapboxVTLayerOptions } from './layers/MapboxVectorTileLayer';
import TileLayer, { TileLayerOptions, TrafficLayerOptions, SatelliteLayerOptions, RoadNetLayerOptions, WMSLayerOptions, WMTSLayerOptions, FlexibleLayerOptions } from './layers/TileLayer';
import VectorLayer, { VectorLayerOption } from './layers/VectorLayer';
import { BezierCurve, BezierCurveOptions, BezierCurveEventType } from './overlays/BezierCurve';
import Circle, { CircleOptions, CircleEventType } from './overlays/Circle';
import CircleMarker, { CircleMarkerOptions, CircleMarkerEventType } from './overlays/CircleMarker';
import ContextMenu, { ContextMenuOptions, ContextMenuEventType } from './overlays/ContextMenu';
import ElasticMarker, { ElasticMarkerOptions, ElasticMarkerEventType, ElasticStyle } from './overlays/ElasticMarker';
import Ellipse, { EllipseOptions, EllipseEventType } from './overlays/Ellipse';
import GeoJSON, { GeoJSONOptions } from './overlays/GeoJSON';
import Icon, { IconOptions } from './overlays/Icon';
import InfoWindow, { InfoWindowOptions, InfoWindowEventType } from './overlays/InfoWindow';
import LabelMarker, { LabelMarkerOptions, LabelMarkerEventType, LabelMarkerTextOptions, LabelMarkerIconOptions } from './overlays/LabelMarker';
import Marker, { MarkerOptions, MarkerLabelOptions, MarkerEventType } from './overlays/Marker';
import MarkerCluster, { MarkerClusterOptions, MarkerClusterEventType, MarkerClusterDataOption } from './overlays/MarkerCluster';
import MassMarks, { MassMarkersOptions, MassMarksEventType, MassMarkersStyleOption, MassMarkersDataOption } from './overlays/MassMarks';
import Overlay from './overlays/Overlay';
import OverlayGroup, { OverlayGroupEventType } from './overlays/OverlayGroup';
import Polygon, { PolygonEventType, PolygonOptions } from './overlays/Polygon';
import Polyline, { PolylineOptions, PolylineEventType } from './overlays/Polyline';
import Rectangle, { RectangleOptions, RectangleEventType } from './overlays/Rectangle';
import { Text, TextOptions, TextEventType } from './overlays/Text';
import BezierCurveEditor, { BezierCurveEditorOptions, BezierCurveEditorEventType } from './tools/BezierCurveEditor';
import CircleEditor, { CircleEditorOptions, CircleEditorEventType } from './tools/CircleEditor';
import EllipseEditor, { EllipseEditorOptions, EllipseEditorEventType } from './tools/EllipseEditor';
import MouseTool, { MouseToolEventType } from './tools/MouseTool';
import PolygonEditor, { PolygonEditorOptions, PolygonEditorEventType } from './tools/PolygonEditor';
import PolylineEditor, { PolylineEditorOptions, PolylineEditorEventType } from './tools/PolylineEditor';
import RangingTool, { RangingToolOptions, RangingToolEventType } from './tools/RangingTool';
import RectangleEditor, { RectangleEditorOptions, RectangleEditorEventType } from './tools/RectangleEditor';

// 检查导出类型是否正确
expectType<AMap.LngLat>({} as any as LngLat);
expectType<AMap.LngLatLike>({} as any as LngLatLike);
expectType<AMap.Bounds>({} as any as Bounds);
expectType<AMap.BoundsLike>({} as any as BoundsLike);
expectType<AMap.Pixel>({} as any as Pixel);
expectType<AMap.PixelLike>({} as any as PixelLike);
expectType<AMap.Size>({} as any as Size);
expectType<AMap.SizeLike>({} as any as SizeLike);
expectType<AMap.Event>({} as any as Event);
expectType<AMap.Map>({} as any as Map);
expectType<AMap.MapsEvent>({} as any as MapsEvent);
expectType<AMap.MapOptions>({} as any as MapOptions);
expectType<AMap.MapEventType>({} as any as MapEventType);
expectType<AMap.TileLayer>({} as any as TileLayer);
expectType<AMap.TileLayerOptions>({} as any as TileLayerOptions);
expectType<AMap.TrafficLayerOptions>({} as any as TrafficLayerOptions);
expectType<AMap.SatelliteLayerOptions>({} as any as SatelliteLayerOptions);
expectType<AMap.RoadNetLayerOptions>({} as any as RoadNetLayerOptions);
expectType<AMap.WMSLayerOptions>({} as any as WMSLayerOptions);
expectType<AMap.WMTSLayerOptions>({} as any as WMTSLayerOptions);
expectType<AMap.FlexibleLayerOptions>({} as any as FlexibleLayerOptions);
expectType<AMap.Buildings>({} as any as Buildings);
const buildingsLayerOptions: BuildingsStyleOptions = {};
expectType<AMap.BuildingsStyleOptions>(buildingsLayerOptions);
expectType<AMap.BuildingsLayerOptions>({} as any as BuildingsLayerOptions);
expectType<AMap.DistrictLayer>({} as any as DistrictLayer);
expectType<AMap.DistrictLayerStyle>({} as any as DistrictLayerStyle);
expectType<AMap.DistrictLayerOptions>({} as any as DistrictLayerOptions);
expectType<AMap.VectorLayer>({} as any as VectorLayer);
expectType<AMap.VectorLayerOption>({} as any as VectorLayerOption);
expectType<AMap.LabelsLayer>({} as any as LabelsLayer);
expectType<AMap.LabelsLayerOption>({} as any as LabelsLayerOption);
expectType<AMap.CustomLayer>({} as any as CustomLayer);
expectType<AMap.CustomLayerOption>({} as any as CustomLayerOption);
expectType<AMap.ImageLayer>({} as any as ImageLayer);
expectType<AMap.ImageLayerOption>({} as any as ImageLayerOption);
expectType<AMap.CanvasLayer>({} as any as CanvasLayer);
expectType<AMap.CanvasLayerOption>({} as any as CanvasLayerOption);
expectType<AMap.GLCustomLayer>({} as any as GLCustomLayer);
expectType<AMap.GLCustomLayerOption>({} as any as GLCustomLayerOption);
expectType<AMap.HeatMap>({} as any as HeatMap);
expectType<AMap.HeatMapOption>({} as any as HeatMapOption);
expectType<AMap.MapboxVectorTileLayer>({} as any as MapboxVectorTileLayer);
expectType<AMap.MapboxVTLayerOptions>({} as any as MapboxVTLayerOptions);
expectType<AMap.MoveAnimation>({} as any as MoveAnimation);
expectType<AMap.AnimationCallback>({} as any as AnimationCallback);
expectType<AMap.EasingCallback>({} as any as EasingCallback);
expectType<AMap.MoveToOptions>({} as any as MoveToOptions);
expectType<AMap.MoveAlongOptions>({} as any as MoveAlongOptions);
const moveAlongObj: MoveAlongObj = {};
expectType<AMap.MoveAlongObj>(moveAlongObj);
expectType<AMap.Overlay>({} as any as Overlay);
expectType<AMap.Text>({} as any as Text);
expectType<AMap.TextOptions>({} as any as TextOptions);
expectType<AMap.TextEventType>({} as any as TextEventType);
expectType<AMap.Icon>({} as any as Icon);
expectType<AMap.IconOptions>({} as any as IconOptions);
expectType<AMap.LabelMarker>({} as any as LabelMarker);
expectType<AMap.LabelMarkerOptions>({} as any as LabelMarkerOptions);
expectType<AMap.LabelMarkerEventType>({} as any as LabelMarkerEventType);
expectType<AMap.LabelMarkerTextOptions>({} as any as LabelMarkerTextOptions);
expectType<AMap.LabelMarkerIconOptions>({} as any as LabelMarkerIconOptions);
expectType<AMap.Marker>({} as any as Marker);
expectType<AMap.MarkerOptions>({} as any as MarkerOptions);
expectType<AMap.MarkerLabelOptions>({} as any as MarkerLabelOptions);
expectType<AMap.MarkerEventType>({} as any as MarkerEventType);
expectType<AMap.ElasticMarker>({} as any as ElasticMarker);
expectType<AMap.ElasticMarkerOptions>({} as any as ElasticMarkerOptions);
expectType<AMap.ElasticMarkerEventType>({} as any as ElasticMarkerEventType);
expectType<AMap.ElasticStyle>({} as any as ElasticStyle);
expectType<AMap.MarkerCluster>({} as any as MarkerCluster);
expectType<AMap.MarkerClusterOptions>({} as any as MarkerClusterOptions);
expectType<AMap.MarkerClusterEventType>({} as any as MarkerClusterEventType);
expectType<AMap.MarkerClusterDataOption>({} as any as MarkerClusterDataOption);
expectType<AMap.MassMarks>({} as any as MassMarks);
expectType<AMap.MassMarkersOptions>({} as any as MassMarkersOptions);
expectType<AMap.MassMarksEventType>({} as any as MassMarksEventType);
expectType<AMap.MassMarkersStyleOption>({} as any as MassMarkersStyleOption);
expectType<AMap.MassMarkersDataOption>({} as any as MassMarkersDataOption);
expectType<AMap.Polygon>({} as any as Polygon);
expectType<AMap.PolygonEventType>({} as any as PolygonEventType);
expectType<AMap.PolygonOptions>({} as any as PolygonOptions);
expectType<AMap.Polyline>({} as any as Polyline);
expectType<AMap.PolylineOptions>({} as any as PolylineOptions);
expectType<AMap.PolylineEventType>({} as any as PolylineEventType);
expectType<AMap.BezierCurve>({} as any as BezierCurve);
expectType<AMap.BezierCurveOptions>({} as any as BezierCurveOptions);
expectType<AMap.BezierCurveEventType>({} as any as BezierCurveEventType);
expectType<AMap.Circle>({} as any as Circle);
expectType<AMap.CircleOptions>({} as any as CircleOptions);
expectType<AMap.CircleEventType>({} as any as CircleEventType);
expectType<AMap.CircleMarker>({} as any as CircleMarker);
expectType<AMap.CircleMarkerOptions>({} as any as CircleMarkerOptions);
expectType<AMap.CircleMarkerEventType>({} as any as CircleMarkerEventType);
expectType<AMap.Ellipse>({} as any as Ellipse);
expectType<AMap.EllipseOptions>({} as any as EllipseOptions);
expectType<AMap.EllipseEventType>({} as any as EllipseEventType);
expectType<AMap.Rectangle>({} as any as Rectangle);
expectType<AMap.RectangleOptions>({} as any as RectangleOptions);
expectType<AMap.RectangleEventType>({} as any as RectangleEventType);
expectType<AMap.ContextMenu>({} as any as ContextMenu);
expectType<AMap.ContextMenuOptions>({} as any as ContextMenuOptions);
expectType<AMap.ContextMenuEventType>({} as any as ContextMenuEventType);
expectType<AMap.InfoWindow>({} as any as InfoWindow);
expectType<AMap.InfoWindowOptions>({} as any as InfoWindowOptions);
expectType<AMap.InfoWindowEventType>({} as any as InfoWindowEventType);
expectType<AMap.LayerGroup>({} as any as LayerGroup);
expectType<AMap.LayerGroupEventType>({} as any as LayerGroupEventType);
expectType<AMap.OverlayGroup>({} as any as OverlayGroup);
expectType<AMap.OverlayGroupEventType>({} as any as OverlayGroupEventType);
expectType<AMap.GeoJSON>({} as any as GeoJSON);
expectType<AMap.GeoJSONOptions>({} as any as GeoJSONOptions);
expectType<AMap.RangingTool>({} as any as RangingTool);
expectType<AMap.RangingToolOptions>({} as any as RangingToolOptions);
expectType<AMap.RangingToolEventType>({} as any as RangingToolEventType);
expectType<AMap.MouseTool>({} as any as MouseTool);
expectType<AMap.MouseToolEventType>({} as any as MouseToolEventType);
expectType<AMap.PolygonEditor>({} as any as PolygonEditor);
expectType<AMap.PolygonEditorOptions>({} as any as PolygonEditorOptions);
expectType<AMap.PolygonEditorEventType>({} as any as PolygonEditorEventType);
expectType<AMap.PolylineEditor>({} as any as PolylineEditor);
expectType<AMap.PolylineEditorOptions>({} as any as PolylineEditorOptions);
expectType<AMap.PolylineEditorEventType>({} as any as PolylineEditorEventType);
expectType<AMap.CircleEditor>({} as any as CircleEditor);
expectType<AMap.CircleEditorOptions>({} as any as CircleEditorOptions);
expectType<AMap.CircleEditorEventType>({} as any as CircleEditorEventType);
expectType<AMap.BezierCurveEditor>({} as any as BezierCurveEditor);
expectType<AMap.BezierCurveEditorOptions>({} as any as BezierCurveEditorOptions);
expectType<AMap.BezierCurveEditorEventType>({} as any as BezierCurveEditorEventType);
expectType<AMap.EllipseEditor>({} as any as EllipseEditor);
expectType<AMap.EllipseEditorOptions>({} as any as EllipseEditorOptions);
expectType<AMap.EllipseEditorEventType>({} as any as EllipseEditorEventType);
expectType<AMap.RectangleEditor>({} as any as RectangleEditor);
expectType<AMap.RectangleEditorOptions>({} as any as RectangleEditorOptions);
expectType<AMap.RectangleEditorEventType>({} as any as RectangleEditorEventType);
expectType<AMap.Control>({} as any as Control);
expectType<AMap.CommonControlConfig>({} as any as CommonControlConfig);
expectType<AMap.ControlBar>({} as any as ControlBar);
expectType<AMap.ControlBarConfig>({} as any as ControlBarConfig);
expectType<AMap.HawkEye>({} as any as HawkEye);
expectType<AMap.HawkEyeOptions>({} as any as HawkEyeOptions);
expectType<AMap.MapType>({} as any as MapType);
expectType<AMap.MapTypeOptions>({} as any as MapTypeOptions);
expectType<AMap.Scale>({} as any as Scale);
expectType<AMap.ScaleConfig>({} as any as ScaleConfig);
expectType<AMap.ToolBar>({} as any as ToolBar);
expectType<AMap.ToolBarConfig>({} as any as ToolBarConfig);
expectType<AMap.SecurityConfig>({} as any as SecurityConfig);
