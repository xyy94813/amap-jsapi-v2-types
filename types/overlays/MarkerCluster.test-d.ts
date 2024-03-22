/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import Event from '../common/Event';
import Pixel from '../common/Pixel';
import Size from '../common/Size';
import LngLat from '../common/LngLat';
import Map from '../Map';
import Marker from './Marker';
import {
  MarkerClusterDataOption,
  MarkerClusterOptions,
  MarkerCluster,
} from './MarkerCluster';

const p1: [number, number] = [118, 23];
const p2 = new LngLat(119, 23);
const pixel2 = new Pixel(1, 1);
const size2 = new Size(200, 100);
const mockMap = {} as any as Map;
const mockMarker = {} as any as Marker;

// MarkerClusterDataOption
expectAssignable<MarkerClusterDataOption>({ lnglat: p1 });
expectAssignable<MarkerClusterDataOption['lnglat']>(p2);
expectAssignable<MarkerClusterDataOption['weight']>(1);

// MarkerClusterOptions
expectAssignable<MarkerClusterOptions>({ });
expectAssignable<MarkerClusterOptions['gridSize']>(1);
expectAssignable<MarkerClusterOptions['maxZoom']>(18);
expectAssignable<MarkerClusterOptions['averageCenter']>(true);
expectAssignable<MarkerClusterOptions['clusterByZoomChange']>(true);
expectAssignable<MarkerClusterOptions['styles']>([]);
expectAssignable<MarkerClusterOptions['styles']>([{ url: 'amap://dark', size: size2 }]);
expectAssignable<MarkerClusterOptions['styles']>([{
  url: 'amap://dark',
  size: size2,
  offset: pixel2,
  imageOffset: pixel2,
  textColor: 'red',
  textSize: 12,
}]);
expectAssignable<MarkerClusterOptions['renderClusterMarker']>(() => mockMarker);
expectAssignable<MarkerClusterOptions['renderClusterMarker']>((opts) => {
  expectType<number>(opts.count);
  expectType<Marker>(opts.marker);
  return mockMarker;
});
expectAssignable<MarkerClusterOptions['renderMarker']>(() => mockMarker);
expectAssignable<MarkerClusterOptions['renderMarker']>((opts) => {
  expectType<Marker>(opts.marker);
  return mockMarker;
});

// MarkerCluster
const markerCluster = new MarkerCluster();
expectType<MarkerCluster>(markerCluster);
expectType<MarkerCluster>(new MarkerCluster(mockMap));
expectType<MarkerCluster>(new MarkerCluster(mockMap, []));
expectType<MarkerCluster>(new MarkerCluster(mockMap, [{ lnglat: p1 }], {}));
expectAssignable<Event>(markerCluster);

// MarkerCluster methods
expectType<void>(markerCluster.addData([{ lnglat: p1 }]));
expectType<void>(markerCluster.addData([{ lnglat: p2, weight: 1 }]));

expectType<void>(markerCluster.setData([{ lnglat: p1 }]));
expectType<void>(markerCluster.setData([{ lnglat: p2, weight: 1 }]));

expectType<number>(markerCluster.getClustersCount());
expectType<number>(markerCluster.getGridSize());
expectType<void>(markerCluster.setGridSize(1));
expectType<number>(markerCluster.getMaxZoom());
expectType<void>(markerCluster.setMaxZoom(1));
// TODO: 待测试
// expectType<void>(markerCluster.getStyles());
expectType<void>(markerCluster.setStyles([]));
expectType<void>(markerCluster.setStyles([{ url: 'amap://dark', size: size2 }]));
expectType<void>(markerCluster.setStyles([{
  url: 'amap://dark',
  size: size2,
  offset: pixel2,
  imageOffset: pixel2,
  textColor: 'red',
  textSize: 12,
}]));

expectType<Map | undefined>(markerCluster.getMap());
expectType<void>(markerCluster.setMap(null));
expectType<void>(markerCluster.setMap(mockMap));
expectType<boolean>(markerCluster.isAverageCenter());
expectType<void>(markerCluster.setAverageCenter(true));
