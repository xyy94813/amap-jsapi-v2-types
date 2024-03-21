/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import LngLat from '../common/LngLat';
import { BaseLayer } from './BaseLayer';
import {
  MapboxVTLayerOptions,
  MapboxVectorTileLayer,
} from './MapboxVectorTileLayer';

expectAssignable<MapboxVTLayerOptions>({ styles: {} });
// CommonLayerOptions
expectAssignable<MapboxVTLayerOptions['zooms']>([1, 1]);
expectAssignable<MapboxVTLayerOptions['opacity']>(1);
expectAssignable<MapboxVTLayerOptions['visible']>(true);
expectAssignable<MapboxVTLayerOptions['zIndex']>(1);

//
expectAssignable<MapboxVTLayerOptions['url']>('amap://dark');
expectAssignable<MapboxVTLayerOptions['dataZooms']>([2, 20]);
expectAssignable<MapboxVTLayerOptions['styles']>({});
expectAssignable<MapboxVTLayerOptions['styles']['polygon']>({});
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polygon']>['sourceLayer']>('');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polygon']>['injection']>([]);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polygon']>['injection']>([{}]);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polygon']>['injection']>(() => {});
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polygon']>['visible']>(true);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polygon']>['visible']>(() => true);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polygon']>['color']>('#fff');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polygon']>['color']>(() => '#fff');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polygon']>['borderWidth']>(1);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polygon']>['borderWidth']>(() => 1);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polygon']>['dash']>([2, 20]);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polygon']>['dash']>(() => [2, 20]);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polygon']>['borderColor']>('red');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polygon']>['borderColor']>(() => 'red');
expectAssignable<MapboxVTLayerOptions['styles']['line']>({});
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['line']>['sourceLayer']>('');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['line']>['injection']>([]);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['line']>['injection']>([{}]);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['line']>['injection']>(() => {});
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['line']>['visible']>(true);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['line']>['visible']>(() => true);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['line']>['color']>('#fff');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['line']>['color']>(() => '#fff');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['line']>['lineWidth']>(1);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['line']>['lineWidth']>(() => 1);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['line']>['dash']>([2, 20]);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['line']>['dash']>(() => [2, 20]);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['line']>['borderColor']>('red');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['line']>['borderColor']>(() => 'red');
expectAssignable<MapboxVTLayerOptions['styles']['point']>({});
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['point']>['sourceLayer']>('');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['point']>['injection']>([]);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['point']>['injection']>([{}]);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['point']>['injection']>(() => {});
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['point']>['visible']>(true);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['point']>['visible']>(() => true);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['point']>['radius']>('1px');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['point']>['radius']>(() => '1px');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['point']>['color']>('red');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['point']>['color']>(() => 'red');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['point']>['borderWidth']>(1);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['point']>['borderWidth']>(() => 1);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['point']>['borderColor']>('red');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['point']>['borderColor']>(() => 'red');
expectAssignable<MapboxVTLayerOptions['styles']['polyhedron']>({});
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polyhedron']>['sourceLayer']>('');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polyhedron']>['injection']>([]);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polyhedron']>['injection']>([{}]);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polyhedron']>['injection']>(() => {});
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polyhedron']>['visible']>(true);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polyhedron']>['visible']>(() => true);
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polyhedron']>['topColor']>('red');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polyhedron']>['topColor']>(() => 'red');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polyhedron']>['sideColor']>('red');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polyhedron']>['sideColor']>(() => 'red');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polyhedron']>['texture']>('texture');
expectAssignable<NonNullable<MapboxVTLayerOptions['styles']['polyhedron']>['texture']>(() => 'texture');

const layer = new MapboxVectorTileLayer();
expectType<MapboxVectorTileLayer>(layer);
expectAssignable<BaseLayer>(layer);

// methods
expectType<void>(layer.setStyles({} as any as MapboxVTLayerOptions['styles']));
expectType<NonNullable<MapboxVTLayerOptions['styles']>>(layer.getStyles());

const p1: [number, number] = [1, 1];
const p2 = new LngLat(1, 1);
const ring1 = [p1, p1, p1, p1];
const ring2 = [p2, p2, p2, p2];
expectType<any[]>(layer.filterByRect(ring1));
expectType<any[]>(layer.filterByRect(ring2, 'all'));
expectType<any[]>(layer.filterByRect(ring2, 'line'));
expectType<any[]>(layer.filterByRect(ring2, 'point'));
expectType<any[]>(layer.filterByRect(ring2, 'polygon'));
