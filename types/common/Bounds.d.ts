import { LngLat, LngLatLike } from './LngLat.d';
/**
 * 地物对象的经纬度矩形范围。
 *
 * https://lbs.amap.com/api/javascript-api-v2/documentation#bounds
 *
 */
export class Bounds {
  className: string;
  southWest: LngLat;
  northEast: LngLat;

  /**
   * @param southWest 西南角经纬度
   * @param northEast 东北角经纬度值
   */
  constructor(southWest: LngLat, northEast: LngLat);
  /**
   * 获取西南角坐标。
   * @return {LngLat}
   */
  getSouthWest(): LngLat;
  /**
   * 获取东北角坐标
   * @return {LngLat}
   */
  getNorthEast(): LngLat;
  /**
   * 获取西北角坐标
   * @return {LngLat}
   */
  getNorthWest(): LngLat;
  /**
   * 获取东南角坐标
   * @return {LngLat}
   */
  getSouthEast(): LngLat;
  /**
   * 指定点坐标是否在矩形范围内
   * @example bounds.contains(new AMap.LngLat(116,39));
   *
   * @param {LngLat} obj
   * @return {Boolean}
   */
  contains(center: LngLatLike): boolean;

  /**
   * 获取当前Bounds的中心点经纬度坐标。
   * @return {LngLat}
   */
  getCenter(): LngLat;

  /**
   * 以字符串形式返回地图对象的矩形范围
   * @return {String}
   */
  toString(): string;
  /**
   * 文档中未提到，但是存在.
   * @returns {[number, number, number, number]} [lng1, lat1, lng2, lat2]
   */
  toJSON(): number[];
  /**
   * 文档中未提到，但是存在. 不清楚具体用途
   * @returns {number}
   */
  getWidth(): number;
  /**
   * 文档中未提到，但是存在. 不清楚具体用途
   * @returns {number}
   */
  getHeight(): number;

  /**
   * 复制一个经纬度矩形范围.
   * 文档中未提到，但是存在.
   *
   * @param {Bounds} bounds
   * @returns {Bounds}
   */
  static from(bounds: Bounds): Bounds;

  // 以下验证不存在 v2 中
  // static fromPolyline(originPath?: LngLatLike[]): Bounds | undefined;
  // static fromMultiPolyline(originPath?: LngLatLike[][]): Bounds | undefined;
  // static fromPolygon(originPath?: LngLatLike[] | LngLatLike[][]): Bounds | undefined;
  // static fromMultiPolygon(originPath?: LngLatLike[][][]): Bounds | undefined;
}

export default Bounds;
