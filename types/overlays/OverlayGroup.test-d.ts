/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import { Event } from '../common/Event';
import Map from '../Map';
import Marker from './Marker';
import Polyline from './Polyline';
import Polygon from './Polygon';
import { OverlayGroupEventType, OverlayGroup } from './OverlayGroup';

expectAssignable<OverlayGroupEventType>('click');

const mockMark = {} as any as Marker;
const mockPolyline = {} as any as Polyline;
const mockPolygon = {} as any as Polygon;
const mockMap = {} as any as Map;

const overlayGroup1 = new OverlayGroup();
expectType<OverlayGroup>(overlayGroup1);
// TODO: 范型继承自 A or B
// expectType<OverlayGroup<any>>(new OverlayGroup([]));
expectAssignable<Event>(overlayGroup1);
expectAssignable<Event<'overlayEventType'>>(overlayGroup1);

const overlayGroup2 = new OverlayGroup<Polyline | Polygon | OverlayGroup>([mockPolyline, mockPolygon, overlayGroup1]);
expectError<OverlayGroup<OverlayGroup>>(new OverlayGroup<OverlayGroup>([mockMark]));

// methods
expectType<typeof overlayGroup1>(overlayGroup1.setMap());
expectType<typeof overlayGroup2>(overlayGroup2.setMap(mockMap));

expectType<void>(overlayGroup1.addOverlay(mockMark));
expectError<void>(overlayGroup2.addOverlay(mockMark));
expectType<void>(overlayGroup2.addOverlay(mockPolyline));
expectType<void>(overlayGroup2.addOverlay(mockPolygon));
expectType<void>(overlayGroup2.addOverlay(overlayGroup1));

expectType<void>(overlayGroup1.addOverlays([mockMark]));
expectError<void>(overlayGroup2.addOverlays([mockMark]));
expectType<void>(overlayGroup2.addOverlays([mockPolyline, mockPolygon, overlayGroup1]));

expectType<any[]>(overlayGroup1.getOverlays());
expectType<Array<Polyline<any> | Polygon<any> | OverlayGroup>>(overlayGroup2.getOverlays());

expectType<boolean>(overlayGroup1.hasOverlay(mockMark));
expectError<boolean>(overlayGroup2.hasOverlay(mockMark));
expectType<boolean>(overlayGroup2.hasOverlay(mockPolyline));
expectType<boolean>(overlayGroup2.hasOverlay(mockPolygon));
expectType<boolean>(overlayGroup2.hasOverlay(overlayGroup1));

expectType<void>(overlayGroup1.removeOverlay(mockMark));
expectError<void>(overlayGroup2.removeOverlay(mockMark));
expectType<void>(overlayGroup2.removeOverlay(mockPolyline));
expectType<void>(overlayGroup2.removeOverlay(mockPolygon));
expectType<void>(overlayGroup2.removeOverlay(overlayGroup1));

expectType<void>(overlayGroup1.removeOverlays([mockMark]));
expectError<void>(overlayGroup2.removeOverlays([mockMark]));
expectType<void>(overlayGroup2.removeOverlays([mockPolyline, mockPolygon, overlayGroup1]));

expectType<void>(overlayGroup1.clearOverlays());

expectType<void>(overlayGroup1.eachOverlay(() => {}));
expectType<void>(overlayGroup1.eachOverlay((overlay, index, collections) => {
  expectType<any>(overlay);
  expectType<number>(index);
  expectType<any[]>(collections);
}));
expectType<void>(overlayGroup2.eachOverlay((overlay, index, collections) => {
  expectType<Polyline | Polygon | OverlayGroup>(overlay);
  expectType<number>(index);
  expectType<Array<Polyline | Polygon | OverlayGroup>>(collections);
}));

expectType<void>(overlayGroup1.hide());

expectType<void>(overlayGroup1.show());

expectType<void>(overlayGroup1.setOptions({}));
