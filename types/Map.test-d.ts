/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectType, expectAssignable } from 'tsd';
import Bounds from './common/Bounds';
import LngLat from './common/LngLat';
import Size from './common/Size';
import Pixel from './common/Pixel';
import { BaseLayer } from './layers/BaseLayer';
import VectorLayer from './layers/VectorLayer';
import Buildings from './layers/BuildingsLayer';
import TileLayer from './layers/TileLayer';
import Marker from './overlays/Marker';
import Polygon from './overlays/Polygon';
import ControlBar from './controls/ControlBar';
import Scale from './controls/Scale';
import { MapStates, MapOptions, MapEventType, Map } from './Map';

const p1: [number, number] = [118, 23];
const p2 = new LngLat(119, 23);
const bounds1: [number, number, number, number] = [119, 23, 120, 24];
const bounds2 = new Bounds(p2, p2);
// const size1: [number, number] = [2, 2];
// const size2 = new Size(2, 2);

const pixel1: [number, number] = [1, 1];
const pixel2 = new Pixel(1, 1);

const overlayList = [
  {} as any as Polygon,
  {} as any as Marker,
];
const layersList = [
  {} as any as TileLayer,
  {} as any as Buildings,
];
const scaleCtl = {} as any as Scale;
const controlBar = {} as any as ControlBar;
// MapStates
expectAssignable<MapStates['dragEnable']>(true);
expectAssignable<MapStates['zoomEnable']>(true);
expectAssignable<MapStates['doubleClickZoom']>(true);
expectAssignable<MapStates['keyboardEnable']>(true);
expectAssignable<MapStates['jogEnable']>(true);
expectAssignable<MapStates['scrollWheel']>(true);
expectAssignable<MapStates['zoomSpeed']>(100);
expectAssignable<MapStates['animateEnable']>(true);
expectAssignable<MapStates['touchZoomCenter']>(10);
expectAssignable<MapStates['touchZoom']>(true);
expectAssignable<MapStates['pitchEnable']>(true);
expectAssignable<MapStates['rotateEnable']>(true);
expectAssignable<MapStates['showBuildingBlock']>(true);
expectAssignable<MapStates['isHotspot']>(true);
expectAssignable<MapStates['mapstyleUrl']>('amap://dark');
expectAssignable<MapStates['features']>('bg');
expectAssignable<MapStates['features']>(['bg', 'point', 'road', 'building']);
expectAssignable<MapStates['allBubble']>(true);
expectAssignable<MapStates['pickWhenMoving']>(true);

// MapOptions
expectAssignable<MapOptions>({});

// 以下继承自 MapStates
expectAssignable<MapOptions['dragEnable']>(true);
expectAssignable<MapOptions['zoomEnable']>(true);
expectAssignable<MapOptions['doubleClickZoom']>(true);
expectAssignable<MapOptions['keyboardEnable']>(true);
expectAssignable<MapOptions['jogEnable']>(true);
expectAssignable<MapOptions['scrollWheel']>(true);
expectAssignable<MapOptions['zoomSpeed']>(100);
expectAssignable<MapOptions['animateEnable']>(true);
expectAssignable<MapOptions['touchZoomCenter']>(10);
expectAssignable<MapOptions['touchZoom']>(true);
expectAssignable<MapOptions['pitchEnable']>(true);
expectAssignable<MapOptions['rotateEnable']>(true);
expectAssignable<MapOptions['showBuildingBlock']>(true);
expectAssignable<MapOptions['isHotspot']>(true);
expectAssignable<MapOptions['mapstyleUrl']>('amap://dark');
expectAssignable<MapOptions['allBubble']>(true);
expectAssignable<MapOptions['pickWhenMoving']>(true);

//
expectAssignable<MapOptions['center']>(p1);
expectAssignable<MapOptions['center']>(p2);
expectAssignable<MapOptions['zoom']>(12);
expectAssignable<MapOptions['rotation']>(45);
expectAssignable<MapOptions['pitch']>(45);
expectAssignable<MapOptions['viewMode']>('2D');
expectAssignable<MapOptions['viewMode']>('3D');
expectAssignable<MapOptions['features']>(['bg', 'point', 'road', 'building']);
expectAssignable<MapOptions['layers']>(layersList);
expectAssignable<MapOptions['zooms']>([2, 12]);
expectAssignable<MapOptions['showLabel']>(true);
expectAssignable<MapOptions['defaultCursor']>('pointer');
expectAssignable<MapOptions['mapStyle']>('amap://styles/dark');
expectAssignable<MapOptions['wallColor']>('yellow');
expectAssignable<MapOptions['wallColor']>([0, 0, 0]);
expectAssignable<MapOptions['roofColor']>('red');
expectAssignable<MapOptions['roofColor']>([255, 0, 0]);
expectAssignable<MapOptions['showBuildingBlock']>(true);
expectAssignable<MapOptions['showIndoorMap']>(true);
expectAssignable<MapOptions['skyColor']>('blue');
expectAssignable<MapOptions['skyColor']>([25, 25, 25]);

expectAssignable<MapOptions['mask']>([p1, p1, p1, p1]);
expectAssignable<MapOptions['mask']>([[p1, p1, p1, p1], [p2, p2, p2, p2]]);
expectAssignable<MapOptions['mask']>([
  [
    [p1, p1, p1, p1],
  ],
  [
    [p2, p2, p2, p2],
  ],
  [
    [p1, p1, p1, p1],
    [p2, p2, p2, p2],
  ],
]);

// MapEventType
expectAssignable<MapEventType>('resize');
expectAssignable<MapEventType>('complete');
expectAssignable<MapEventType>('click');
expectAssignable<MapEventType>('dblclick');
expectAssignable<MapEventType>('mapmove');
expectAssignable<MapEventType>('hotspotclick');
expectAssignable<MapEventType>('hotspotover');
expectAssignable<MapEventType>('hotspotout');
expectAssignable<MapEventType>('movestart');
expectAssignable<MapEventType>('moveend');
expectAssignable<MapEventType>('zoomchange');
expectAssignable<MapEventType>('zoomstart');
expectAssignable<MapEventType>('zoomend');
expectAssignable<MapEventType>('rotatechange');
expectAssignable<MapEventType>('rotatestart');
expectAssignable<MapEventType>('rotatestart');
expectAssignable<MapEventType>('mousemove');
expectAssignable<MapEventType>('mousewheel');
expectAssignable<MapEventType>('mouseover');
expectAssignable<MapEventType>('mouseout');
expectAssignable<MapEventType>('mouseup');
expectAssignable<MapEventType>('mousedown');
expectAssignable<MapEventType>('rightclick');
expectAssignable<MapEventType>('dragstart');
expectAssignable<MapEventType>('dragging');
expectAssignable<MapEventType>('dragend');
expectAssignable<MapEventType>('touchstart');
expectAssignable<MapEventType>('touchmove');
expectAssignable<MapEventType>('touchend');
expectAssignable<MapEventType>('custom event name');

// Map
const map = new Map('container');
expectType<Map>(map);
expectType<Map>(new Map('container', {} as any as MapOptions));

expectType<LngLat>(map.getCenter());

expectType<void>(map.setCenter(p1));
expectType<void>(map.setCenter(p2, true));
expectType<void>(map.setCenter(p1, true, 100));

expectType<Bounds>(map.getBounds());
expectType<void>(map.setBounds(bounds1));
expectType<void>(map.setBounds(bounds2));

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
expectType<Bounds>(map.getLimitBounds()!);
expectType<Bounds | undefined>(map.getLimitBounds());

expectType<void>(map.setLimitBounds(bounds1));
expectType<void>(map.setLimitBounds(bounds2));

expectType<void>(map.clearLimitBounds());

expectType<HTMLElement>(map.getContainer());

expectType<Size>(map.getSize());

expectType<[number, number]>(map.getZooms());
expectType<void>(map.setZooms([2, 18]));
expectType<number>(map.getZoom());
expectType<void>(map.setZoom(15));

expectType<void>(map.setZoomAndCenter(2, p1));
expectType<void>(map.setZoomAndCenter(20, p2, true));
expectType<void>(map.setZoomAndCenter(12, p2, false, 100));

expectType<void>(map.zoomIn());
expectType<void>(map.zoomOut());

expectType<Bounds | undefined>(map.setFitView());
expectType<Bounds | undefined>(map.setFitView([]));
expectType<Bounds | undefined>(map.setFitView(overlayList, true));
expectType<Bounds | undefined>(map.setFitView({} as any as VectorLayer, false, [60, 60, 60, 60]));
expectType<Bounds | undefined>(map.setFitView({} as any as VectorLayer, false, [], 12));

expectType<[number, LngLat] | undefined>(map.getFitZoomAndCenterByOverlays(overlayList));
expectType<[number, LngLat] | undefined>(map.getFitZoomAndCenterByOverlays(overlayList, [60, 60, 60, 60]));
expectType<[number, LngLat] | undefined>(map.getFitZoomAndCenterByOverlays(overlayList, [], 12));

expectType<number>(map.getPitch());
expectType<void>(map.setPitch(45));
expectType<number>(map.getRotation());

expectType<void>(map.setRotation(45));
expectType<void>(map.setRotation(45, true));
expectType<void>(map.setRotation(45, false, 100));

expectType<MapStates>(map.getStatus());

expectType<void>(map.setStatus({} as any as MapStates));

expectType<string>(map.getDefaultCursor());
expectType<void>(map.setDefaultCursor('pointer'));

expectType<string>(map.getMapStyle());
expectType<void>(map.setMapStyle('amap://styles/d6bf8c1d69cea9f5c696185ad4ac4c86'));

expectType<void>(map.getCity(() => {}, p1));
expectType<void>(map.getCity((result) => {
  expectType<any>(result);
}, p2));
expectType<void>(map.setCity('北京市'));
expectType<number>(map.getScale(100));

expectType<void>(map.addLayer(layersList[0]));
expectType<void>(map.addLayer(layersList[1]));

expectType<void>(map.removeLayer(layersList[0]));
expectType<void>(map.removeLayer(layersList[1]));

expectType<Array<BaseLayer<string>>>(map.getLayers());

expectType<void>(map.setLayers(layersList));

expectType<void>(map.add(overlayList));
expectType<void>(map.add(overlayList[0]));
expectType<void>(map.add(overlayList[1]));
expectType<void>(map.add(layersList));
expectType<void>(map.add(layersList[0]));
expectType<void>(map.add(layersList[1]));

expectType<void>(map.remove(overlayList));
expectType<void>(map.remove(overlayList[0]));
expectType<void>(map.remove(overlayList[1]));
expectType<void>(map.remove(layersList));
expectType<void>(map.remove(layersList[0]));
expectType<void>(map.remove(layersList[1]));

expectType<void>(map.addControl(scaleCtl));
expectType<void>(map.addControl(controlBar));

expectType<void>(map.removeControl(scaleCtl));
expectType<void>(map.removeControl(controlBar));

expectType<any[]>(map.getAllOverlays());
expectType<any[]>(map.getAllOverlays('marker'));
expectType<any[]>(map.getAllOverlays('polygon'));
expectType<any[]>(map.getAllOverlays('polyline'));

expectType<string | string[] | undefined>(map.getFeatures());
expectType<void>(map.setFeatures(['bg', 'point', 'road', 'building']));

expectType<void>(map.clearMap());
expectType<void>(map.clearInfoWindow());
expectType<void>(map.destroy());

expectType<void>(map.panTo(p1));
expectType<void>(map.panTo(p2, 100));

expectType<void>(map.panBy(100, 200));
expectType<void>(map.panBy(100, 200, 100));

expectType<[number, number]>(map.lngLatToCoords(p1));
expectType<[number, number]>(map.lngLatToCoords(p2));

expectType<LngLat>(map.coordsToLngLat(p1));

expectType<Pixel>(map.lngLatToContainer(p2));

expectType<LngLat>(map.containerToLngLat(pixel1));
expectType<LngLat>(map.containerToLngLat(pixel2));

expectType<[number, number]>(map.coordToContainer(p1));

expectType<[number, number]>(map.containerToCoord(pixel1));
expectType<[number, number]>(map.containerToCoord(pixel2));

expectType<LngLat>(map.pixelToLngLat(pixel1));
expectType<LngLat>(map.pixelToLngLat(pixel2));

expectType<Pixel>(map.lngLatToPixel(p1));
expectType<Pixel>(map.lngLatToPixel(p2));

expectType<number>(map.getResolution());
expectType<number>(map.getResolution(p2));

expectType<any>(map.getMapApprovalNumber());

// expectType<void>(map.setMask([116.176374, 39.585898, 116.17355, 39.585874, 116.172563, 39.585911, 116.172459, 39.585868]));
expectType<void>(map.setMask([p1, p1, p1, p1]));
expectType<void>(map.setMask([[p1, p1, p1, p1], [p2, p2, p2, p2]]));
expectType<void>(map.setMask([
  [
    [p1, p1, p1, p1],
  ],
  [
    [p2, p2, p2, p2],
  ],
  [
    [p1, p1, p1, p1],
    [p2, p2, p2, p2],
  ],
]));

expectType<void>(map.setLabelRejectMask());
expectType<void>(map.setLabelRejectMask(true));

expectType<void>(map.plugin('AMap.Polygon', () => {}));
expectType<void>(map.plugin(['AMap.Polygon'], () => {}));

expectType<void>(map.resize());

expectType<number>(map.getAltitude(p1));
expectType<number>(map.getAltitude(p2));

expectType<number>(map.getAltitudeByContainer(pixel1));
expectType<number>(map.getAltitudeByContainer(pixel2));
