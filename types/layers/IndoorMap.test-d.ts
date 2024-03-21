/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import { BaseLayer } from './BaseLayer';
import {
  IndoorMapLayerOptions,
  IndoorMap,
} from './IndoorMap';

expectAssignable<IndoorMapLayerOptions>({});

expectAssignable<IndoorMapLayerOptions['zIndex']>(1);
expectAssignable<IndoorMapLayerOptions['opacity']>(1);
expectAssignable<IndoorMapLayerOptions['cursor']>('pointer');
expectAssignable<IndoorMapLayerOptions['hideFloorBar']>(true);

const layer = new IndoorMap({} as any as IndoorMapLayerOptions);
expectType<IndoorMap>(layer);
expectAssignable<BaseLayer>(layer);

// methods
expectType<void>(layer.showIndoorMap('indoorId'));
expectType<void>(layer.showIndoorMap('indoorId', 1));
expectType<void>(layer.showIndoorMap('indoorId', 1, 'shopId'));

expectType<void>(layer.showFloor(1, true));

expectType<void>(layer.showFloorBar());
expectType<void>(layer.hideFloorBar());

expectType<void>(layer.showLabels());
expectType<void>(layer.hideLabels());

expectType<string | undefined>(layer.getSelectedBuildingId());
expectType<string | undefined>(layer.getSelectedBuilding());
