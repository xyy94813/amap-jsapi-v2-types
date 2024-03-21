/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import TileLayer from './TileLayer';
import {
  DistrictLayerStyle,
  DistrictLayerOptions,
  DistrictLayer,
} from './DistrictLayer';

expectAssignable<DistrictLayerStyle['stroke-width']>(1);
expectAssignable<DistrictLayerStyle['stroke-width']>(() => 1);
expectAssignable<DistrictLayerStyle['zIndex']>(1);
expectAssignable<DistrictLayerStyle['zIndex']>(() => 1);
expectAssignable<DistrictLayerStyle['coastline-stroke']>('1');
expectAssignable<DistrictLayerStyle['coastline-stroke']>(['1']);
expectAssignable<DistrictLayerStyle['coastline-stroke']>(() => '1');
expectAssignable<DistrictLayerStyle['coastline-stroke']>(() => ['1']);
expectAssignable<DistrictLayerStyle['nation-stroke']>('1');
expectAssignable<DistrictLayerStyle['nation-stroke']>(['1']);
expectAssignable<DistrictLayerStyle['nation-stroke']>(() => '1');
expectAssignable<DistrictLayerStyle['nation-stroke']>(() => ['1']);
expectAssignable<DistrictLayerStyle['province-stroke']>('1');
expectAssignable<DistrictLayerStyle['province-stroke']>(['1']);
expectAssignable<DistrictLayerStyle['province-stroke']>(() => '1');
expectAssignable<DistrictLayerStyle['province-stroke']>(() => ['1']);
expectAssignable<DistrictLayerStyle['city-stroke']>('1');
expectAssignable<DistrictLayerStyle['city-stroke']>(['1']);
expectAssignable<DistrictLayerStyle['city-stroke']>(() => '1');
expectAssignable<DistrictLayerStyle['city-stroke']>(() => ['1']);
expectAssignable<DistrictLayerStyle['county-stroke']>('1');
expectAssignable<DistrictLayerStyle['county-stroke']>(['1']);
expectAssignable<DistrictLayerStyle['county-stroke']>(() => '1');
expectAssignable<DistrictLayerStyle['county-stroke']>(() => ['1']);
expectAssignable<DistrictLayerStyle['fill']>('red');
expectAssignable<DistrictLayerStyle['fill']>(['1', '1', '1', '1']);
expectAssignable<DistrictLayerStyle['fill']>(() => 'red');
expectAssignable<DistrictLayerStyle['fill']>(() => ['1', '1', '1', '1']);

expectAssignable<DistrictLayerOptions>({});
// CommonLayerOptions
expectAssignable<DistrictLayerOptions['zooms']>([1, 1]);
expectAssignable<DistrictLayerOptions['opacity']>(1);
expectAssignable<DistrictLayerOptions['visible']>(true);
expectAssignable<DistrictLayerOptions['zIndex']>(1);
// 自定义
expectAssignable<DistrictLayerOptions['adcode']>('adcode');
expectAssignable<DistrictLayerOptions['SOC']>('SOC');
expectAssignable<DistrictLayerOptions['depth']>(1);
expectAssignable<DistrictLayerOptions['styles']>({});
expectAssignable<DistrictLayerOptions['styles']>({} as any as DistrictLayerOptions);

const layer = new DistrictLayer({});

expectType<DistrictLayer>(layer);
expectAssignable<TileLayer>(layer);

// properties
expectType<string>(layer.CLASS_NAME);

// methods
expectType<void>(layer.setSOC('soc'));

expectType<void>(layer.setDistricts(460300));
expectType<void>(layer.setDistricts('460300'));
expectType<void>(layer.setDistricts([460300]));
expectType<void>(layer.setDistricts(['460300']));

expectType<any>(layer.getDistricts());

expectType<void>(layer.setAdcode(460300));
expectType<void>(layer.setAdcode('460300'));
expectType<void>(layer.setAdcode([460300]));
expectType<void>(layer.setAdcode(['460300']));

expectType<void>(layer.setStyles({} as any as DistrictLayerStyle));
expectType<DistrictLayerStyle | undefined>(layer.getStyle());

// Sub class
const wordLayer = new DistrictLayer.Word({});
expectAssignable<DistrictLayer>(wordLayer);

const countryLayer = new DistrictLayer.Country({});
expectAssignable<DistrictLayer>(countryLayer);

const provinceLayer = new DistrictLayer.Province({});
expectAssignable<DistrictLayer>(provinceLayer);
