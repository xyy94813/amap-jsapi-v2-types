/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import Event from '../common/Event';
import Pixel from '../common/Pixel';
import Size from '../common/Size';
import LngLat from '../common/LngLat';
import Map from '../Map';
import {
  MassMarkersStyleOption,
  MassMarkersOptions,
  MassMarkersDataOption,
  MassMarksEventType,
  MassMarks,
} from './MassMarks';

const p1: [number, number] = [118, 23];
const p2 = new LngLat(119, 23);
const pixel2 = new Pixel(1, 1);
const size2 = new Size(200, 100);
const mockMap = {} as any as Map;

// MassMarkersStyleOption
expectAssignable<MassMarkersStyleOption>({});
expectAssignable<MassMarkersStyleOption['url']>('amap://dark');
expectAssignable<MassMarkersStyleOption['size']>(size2);
expectAssignable<MassMarkersStyleOption['anchor']>(pixel2);
expectAssignable<MassMarkersStyleOption['zIndex']>(1);
expectAssignable<MassMarkersStyleOption['rotation']>(1);

// MassMarkersOptions
expectAssignable<MassMarkersOptions>({});
expectAssignable<MassMarkersOptions['zIndex']>(1);
expectAssignable<MassMarkersOptions['opacity']>(1);
expectAssignable<MassMarkersOptions['zooms']>([1, 2]);
expectAssignable<MassMarkersOptions['style']>({ url: 'amap://dark' });
expectAssignable<MassMarkersOptions['style']>([]);
expectAssignable<MassMarkersOptions['style']>([{ url: 'amap://dark' }]);

// MassMarkersDataOption
expectAssignable<MassMarkersDataOption>({ lnglat: p1 });
expectAssignable<MassMarkersDataOption['lnglat']>(p2);
expectAssignable<MassMarkersDataOption['style']>(1);

// MassMarksEventType
expectAssignable<MassMarksEventType>('complete');
expectAssignable<MassMarksEventType>('click');
expectAssignable<MassMarksEventType>('dbclick');
expectAssignable<MassMarksEventType>('mousemove');
expectAssignable<MassMarksEventType>('mouseover');
expectAssignable<MassMarksEventType>('mouseout');
expectAssignable<MassMarksEventType>('mousedown');
expectAssignable<MassMarksEventType>('mouseup');
expectAssignable<MassMarksEventType>('touchstart');
expectAssignable<MassMarksEventType>('touchend');

// MassMarks
const markerCluster = new MassMarks();
expectType<MassMarks>(markerCluster);
expectType<MassMarks>(new MassMarks([]));
expectType<MassMarks>(new MassMarks([], []));
expectType<MassMarks>(new MassMarks([], {}));
expectType<MassMarks>(new MassMarks([{ lnglat: p1 }], [{}]));
expectAssignable<Event>(markerCluster);

// MassMarks methods
expectType<void>(markerCluster.addData([{ lnglat: p1 }]));
expectType<void>(markerCluster.addData([{ lnglat: p2, weight: 1 }]));

expectType<void>(markerCluster.setData([{ lnglat: p1 }]));
expectType<void>(markerCluster.setData([{ lnglat: p2, weight: 1 }]));

expectType<Map | undefined>(markerCluster.getMap());
expectType<void>(markerCluster.setMap(mockMap));
expectType<MassMarkersStyleOption[]>(markerCluster.getStyle());

expectType<void>(markerCluster.setStyle({ url: 'amap://dark' }));
expectType<void>(markerCluster.setStyle([]));
expectType<void>(markerCluster.setStyle([{ url: 'amap://dark' }]));

expectType<number>(markerCluster.getOpacity());
expectType<void>(markerCluster.setOpacity(1));
expectType<number>(markerCluster.getzIndex());
expectType<void>(markerCluster.setzIndex(1));
expectType<[number, number]>(markerCluster.getZooms());
expectType<void>(markerCluster.setZooms([2, 12]));
expectType<void>(markerCluster.clear());
