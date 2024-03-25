/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import Event from '../common/Event';
import Map from '../Map';
import {
  HeatMap3DOptions,
  HeatMapOption,
  HeatMap,
} from './HeatMap';

expectAssignable<HeatMap3DOptions['gridSize']>(1);
expectAssignable<HeatMap3DOptions['heightBezier']>([1]);
expectAssignable<HeatMap3DOptions['heightScale']>(1);

expectAssignable<HeatMapOption>({});

expectAssignable<HeatMapOption['radius']>(1);
expectAssignable<HeatMapOption['gradient']>({});
expectAssignable<HeatMapOption['3d']>({} as any as HeatMap3DOptions);

expectAssignable<HeatMapOption['zooms']>([1, 1]);
expectAssignable<HeatMapOption['opacity']>(1);
expectAssignable<HeatMapOption['visible']>(true);
expectAssignable<HeatMapOption['zIndex']>(1);

expectAssignable<HeatMapOption['blur']>(1);
expectAssignable<HeatMapOption['rejectMapMask']>(true);
expectAssignable<HeatMapOption['renderOnZooming']>(true);

// expectType<HeatMapDataSet['max']>(1);
// expectType<HeatMapDataSet['data']>([]);
// expectType<HeatMapDataSet['data']>([{}]);

const layer = new HeatMap({} as any as Map);
const layer2 = new HeatMap<{ max: number; data: number[]; other: string }>({} as any as Map);
expectType<HeatMap>(layer);
expectType<HeatMap>(new HeatMap({} as any as Map, {} as any as HeatMapOption));
expectAssignable<Event>(layer);

// properties
expectType<string>(layer.CLASS_NAME);

// methods
expectType<void>(layer.setDataSet({ max: 100 }));
expectType<void>(layer.setDataSet({ data: [], max: 100 }));
expectType<void>(layer2.setDataSet({ max: 100, data: [1], other: '1' }));
expectError<void>(layer2.setDataSet({ max: 100, data: [1] }));

expectType<{ max: number; data?: any[] }>(layer.getDataSet());
expectType<{ max: number; data: number[]; other: string }>(layer2.getDataSet());

expectType<void>(layer.show());
expectType<void>(layer.hide());
expectType<void>(layer.setzIndex(1));
expectType<number>(layer.getzIndex());
expectType<void>(layer.setOptions({} as any as HeatMapOption));
expectType<HeatMapOption>(layer.getOptions());
expectType<void>(layer.setMap({} as any as Map));
expectType<Map>(layer.getMap());
