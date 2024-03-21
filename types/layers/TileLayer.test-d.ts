/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import BaseLayer from './BaseLayer';
import {
  TileLayerOptions,
  TileLayerEventType,
  TileLayer,

  TrafficLayerOptions,
  SatelliteLayerOptions,
  RoadNetLayerOptions,
  WMSLayerOptions,
  WMTSLayerOptions,
  FlexibleLayerOptions,
} from './TileLayer';

expectAssignable<TileLayerOptions>({});
// CommonLayerOptions
expectAssignable<TileLayerOptions['zooms']>([1, 1]);
expectAssignable<TileLayerOptions['opacity']>(1);
expectAssignable<TileLayerOptions['visible']>(true);
expectAssignable<TileLayerOptions['zIndex']>(1);
// 自定义
expectAssignable<TileLayerOptions['tileUrl']>('amap://dark');
expectAssignable<TileLayerOptions['dataZooms']>([1, 1]);
expectAssignable<TileLayerOptions['tileSize']>(1);

//
expectAssignable<TileLayerEventType>('complete');
expectAssignable<TileLayerEventType>('other types');

// TileLayer
const layer = new TileLayer({});
expectType<TileLayer>(layer);
expectAssignable<BaseLayer<TileLayerEventType>>(layer);

// methods
expectType<void>(layer.setTileUrl('amap://dark'));
expectType<void>(layer.reload());

// Traffic
expectAssignable<TrafficLayerOptions['zooms']>([1, 1]);
expectAssignable<TrafficLayerOptions['opacity']>(1);
expectAssignable<TrafficLayerOptions['visible']>(true);
expectAssignable<TrafficLayerOptions['zIndex']>(1);
expectAssignable<TrafficLayerOptions['tileSize']>(1);
expectAssignable<TrafficLayerOptions['autoRefresh']>(true);
expectAssignable<TrafficLayerOptions['interval']>(1);

const traffic = new TileLayer.Traffic();
expectAssignable<TileLayer>(traffic);

expectType<void>(traffic.stopFresh());

// Satellite
expectAssignable<SatelliteLayerOptions['zooms']>([1, 1]);
expectAssignable<SatelliteLayerOptions['opacity']>(1);
expectAssignable<SatelliteLayerOptions['visible']>(true);
expectAssignable<SatelliteLayerOptions['zIndex']>(1);
expectAssignable<SatelliteLayerOptions['tileSize']>(1);

const satellite = new TileLayer.Satellite();
expectAssignable<TileLayer>(satellite);

// RoadNet
expectAssignable<RoadNetLayerOptions['zooms']>([1, 1]);
expectAssignable<RoadNetLayerOptions['opacity']>(1);
expectAssignable<RoadNetLayerOptions['visible']>(true);
expectAssignable<RoadNetLayerOptions['zIndex']>(1);
expectAssignable<RoadNetLayerOptions['tileSize']>(1);

const roadNet = new TileLayer.RoadNet();
expectAssignable<TileLayer>(roadNet);

// WMS
expectAssignable<WMSLayerOptions['zooms']>([1, 1]);
expectAssignable<WMSLayerOptions['opacity']>(1);
expectAssignable<WMSLayerOptions['visible']>(true);
expectAssignable<WMSLayerOptions['zIndex']>(1);
expectAssignable<WMSLayerOptions['url']>('https://ahocevar.com/geoserver/wms');
expectAssignable<WMSLayerOptions['blend']>(true);
expectAssignable<WMSLayerOptions['param']>({});

const wms = new TileLayer.WMS();
expectAssignable<TileLayer>(wms);

expectType<void>(wms.setParams({}));
expectType<Object>(wms.getParams());
expectType<void>(wms.setUrl('https://ahocevar.com/geoserver/wms'));
expectType<string>(wms.getUrl());

// WMTS
expectAssignable<WMTSLayerOptions['zooms']>([1, 1]);
expectAssignable<WMTSLayerOptions['opacity']>(1);
expectAssignable<WMTSLayerOptions['visible']>(true);
expectAssignable<WMTSLayerOptions['zIndex']>(1);
expectAssignable<WMTSLayerOptions['url']>('https://ahocevar.com/geoserver/wms');
expectAssignable<WMTSLayerOptions['blend']>(true);
expectAssignable<WMTSLayerOptions['param']>({});

const wmts = new TileLayer.WMTS();
expectAssignable<TileLayer>(wmts);
expectAssignable<typeof wms>(new TileLayer.WMTS({}));

// Flexible
expectAssignable<FlexibleLayerOptions['zooms']>([1, 1]);
expectAssignable<FlexibleLayerOptions['opacity']>(1);
expectAssignable<FlexibleLayerOptions['visible']>(true);
expectAssignable<FlexibleLayerOptions['zIndex']>(1);
expectAssignable<FlexibleLayerOptions['tileSize']>(1);
expectAssignable<FlexibleLayerOptions['cacheSize']>(1);
expectAssignable<FlexibleLayerOptions['createTile']>(() => {});
expectAssignable<FlexibleLayerOptions['createTile']>((x, y, z, success, fail) => {
  expectType<number>(x);
  expectType<number>(y);
  expectType<number>(z);
  expectType<() => void>(success);
  expectType<() => void>(fail);
});

const flexible = new TileLayer.Flexible();
expectAssignable<TileLayer>(flexible);
expectAssignable<TileLayer>(new TileLayer.Flexible({}));
