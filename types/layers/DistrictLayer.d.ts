import type { CommonLayerOptions } from './BaseLayer';
import type TileLayer from './TileLayer';

export type DistrictLayerStyle = {
  'stroke-width'?: number | Function;
  zIndex?: number | Function;
  'coastline-stroke'?: string[] | string | Function;
  'nation-stroke'?: string[] | string | Function;
  'province-stroke'?: string[] | string | Function;
  'city-stroke'?: string[] | string | Function;
  'county-stroke'?: string[] | string | Function;
  fill?: string[] | string | Function;
};

export type DistrictLayerOptions = CommonLayerOptions & {
  /** 行政区的编码 adcode与省市行政区对照表 */
  adcode?: string;
  /** (default 'CHN') 设定显示的国家 SOC 国家代码、名称、Bounds对照表下载 */
  SOC?: string;
  /** (default 0) 设定数据的层级深度，depth为0的时候只显示国家面，depth为1的时候显示省级， 当国家为中国时设置depth为2的可以显示市一级 */
  depth?: number;
  /**
   * 为简易行政区图设定各面的填充颜色和描边颜色。 styles各字段的值可以是颜色值，也可以是一个返回颜色值* 的回调函数function。支持的颜色格式有：
   * 1. #RRGGBB，如：'#FFFFFF'
   * 2. rgba()，如：'rgba(255,255,255,1)'
   * 3. rgb()，如：'rgb(255,255,255)'
   * 4. [r,g,b,a] ，如： [1,1,1,1]
   * 5. ''，代表不赋予颜色 *
   */
  styles?: DistrictLayerStyle;
};

/**
 * 行政区域图层
 * https://lbs.amap.com/api/javascript-api-v2/documentation#districtlayer
 */
export declare class DistrictLayer extends TileLayer {
  constructor(opts: DistrictLayerOptions);

  /**
   * 设定显示的国家 SOC
   * @param {String} SOC SOC
   */
  setSOC(SOC: string): void;
  /**
   * 设置 adcodes 值
   * @param {any[] | string | number} adcodes adcodes
   */
  setDistricts(adcodes: any[] | string | number): void;
  /**
   * 获取 adcodes
   * @name getDistricts
   * @returns {any} adcodes
   */
  getDistricts(): any;
  /**
   * 设置 adcodes 值. 等同于 setDistricts
   * @param {any[] | string | number} adcodes adcodes
   */
  setAdcode(adcodes: any[] | string | number): void;
  /**
   * 设置样式信息
   * @param {DistrictLayerStyle} styles 样式信息
   */
  setStyles(styles: DistrictLayerStyle): void;
  /**
   * 获取样式信息
   * @returns {DistrictLayerStyle} 样式
   */
  getStyle(): DistrictLayerStyle | undefined;

  static Word: WordLayer;
  static Country: CountryLayer;
  static Province: ProvinceLayer;
}

declare class WordLayer extends DistrictLayer {}
declare class CountryLayer extends DistrictLayer {}
declare class ProvinceLayer extends DistrictLayer {}

export default DistrictLayer;
