/* eslint-disable @typescript-eslint/no-invalid-void-type */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { expectType } from 'tsd';
import './index';

// 检查 window.AMap 类型是否正确
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const AMapAPI = window.AMap;

expectType<string>(AMapAPI.version);

expectType<AMap.LngLat>(new AMapAPI.LngLat(118, 23));
expectType<AMap.Bounds>(new AMapAPI.Bounds(new AMapAPI.LngLat(118, 23), new AMapAPI.LngLat(118, 23)));
expectType<AMap.Pixel>(new AMapAPI.Pixel(1, 1));
expectType<AMap.Size>(new AMapAPI.Size(1, 1));
// expectType<AMap.Event>(new AMapAPI.Event());
expectType<AMap.Map>(new AMapAPI.Map('id'));
expectType<AMap.TileLayer>(new AMapAPI.TileLayer({}));
expectType<AMap.Buildings>(new AMapAPI.Buildings({}));
expectType<AMap.DistrictLayer>(new AMapAPI.DistrictLayer({}));
expectType<AMap.VectorLayer>(new AMapAPI.VectorLayer());
expectType<AMap.LabelsLayer>(new AMapAPI.LabelsLayer({}));
expectType<AMap.CustomLayer>(new AMapAPI.CustomLayer(document.createElement('canvas'), {}));
expectType<AMap.ImageLayer>(new AMapAPI.ImageLayer({
  url: 'url',
}));
expectType<AMap.CanvasLayer>(new AMapAPI.CanvasLayer());
expectType<AMap.GLCustomLayer>(new AMapAPI.GLCustomLayer({}));
expectType<AMap.HeatMap>(new AMapAPI.HeatMap({} as any as AMap.Map));
expectType<AMap.MapboxVectorTileLayer>(new AMapAPI.MapboxVectorTileLayer());
expectType<AMap.Text>(new AMapAPI.Text());
expectType<AMap.Icon>(new AMapAPI.Icon({}));
expectType<AMap.LabelMarker>(new AMapAPI.LabelMarker({}));
expectType<AMap.Marker>(new AMapAPI.Marker({}));
expectType<AMap.ElasticMarker>(new AMapAPI.ElasticMarker());
expectType<AMap.MarkerCluster>(new AMapAPI.MarkerCluster());
expectType<AMap.MassMarks>(new AMapAPI.MassMarks());
expectType<AMap.Polygon>(new AMapAPI.Polygon());
expectType<AMap.Polyline>(new AMapAPI.Polyline());
expectType<AMap.BezierCurve>(new AMapAPI.BezierCurve());
expectType<AMap.Circle>(new AMapAPI.Circle());
expectType<AMap.CircleMarker>(new AMapAPI.CircleMarker());
expectType<AMap.Ellipse>(new AMapAPI.Ellipse());
expectType<AMap.Rectangle>(new AMapAPI.Rectangle());
expectType<AMap.ContextMenu>(new AMapAPI.ContextMenu());
expectType<AMap.InfoWindow>(new AMapAPI.InfoWindow());
expectType<AMap.LayerGroup>(new AMapAPI.LayerGroup());
expectType<AMap.OverlayGroup>(new AMapAPI.OverlayGroup());
expectType<AMap.GeoJSON>(new AMapAPI.GeoJSON({}));
expectType<AMap.RangingTool>(new AMapAPI.RangingTool({} as any as AMap.Map));
expectType<AMap.MouseTool>(new AMapAPI.MouseTool({} as any as AMap.Map));
expectType<AMap.PolygonEditor>(new AMapAPI.PolygonEditor({} as any as AMap.Map));
expectType<AMap.PolylineEditor>(new AMapAPI.PolylineEditor({} as any as AMap.Map));
expectType<AMap.CircleEditor>(new AMapAPI.CircleEditor({} as any as AMap.Map));
expectType<AMap.BezierCurveEditor>(new AMapAPI.BezierCurveEditor({} as any as AMap.Map));
expectType<AMap.EllipseEditor>(new AMapAPI.EllipseEditor({} as any as AMap.Map));
expectType<AMap.RectangleEditor>(new AMapAPI.RectangleEditor({} as any as AMap.Map));
expectType<AMap.Control>(new AMapAPI.Control({}));
expectType<AMap.ControlBar>(new AMapAPI.ControlBar());
expectType<AMap.HawkEye>(new AMapAPI.HawkEye());
expectType<AMap.MapType>(new AMapAPI.MapType());
expectType<AMap.Scale>(new AMapAPI.Scale());
expectType<AMap.ToolBar>(new AMapAPI.ToolBar());

// GeometryUtil
expectType<number>(AMapAPI.GeometryUtil.distance([118, 23], [118, 23]));
// Browser
expectType<boolean>(AMapAPI.Browser.any3d);
// Util
expectType<boolean>(AMapAPI.Util.isArray([]));
// DomUtil
expectType<void>(AMapAPI.DomUtil.remove(document.createElement('div')));

expectType<any>(AMapAPI.createDefaultLayer());
expectType<any>(AMapAPI.createDefaultLayer({}));

expectType<void>(AMapAPI.plugin('AMap.Polygon', () => {}));
expectType<void>(AMapAPI.plugin(['AMap.Polygon'], () => {}));

expectType<void>(AMapAPI.convertFrom([118, 23], 'baidu', (status: string, result: any) => {
  expectType<string>(status);
  expectType<any>(result);
}));
expectType<void>(AMapAPI.convertFrom([119, 24], 'gps', () => {}));
expectType<void>(AMapAPI.convertFrom(new AMap.LngLat(117, 24), 'mapbar', () => {}));

// 检查 window._AMapSecurityConfig 类型是否正确
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
expectType<AMap.SecurityConfig | undefined>(window._AMapSecurityConfig);
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
expectType<string>(window!._AMapSecurityConfig!.securityJsCode!);
