/**
 * 经纬度坐标，用来描述地图上的一个点位置, 目前高德地图使用的是 GCJ-02 坐标，如果你采集的是 WGS84 坐标，请先进行坐标转换
 *
 * https://lbs.amap.com/api/javascript-api-v2/documentation#lnglat
 *
 */
export class LngLat {
  className: string;

  /**
   * 纬度
   */
  readonly lat: number;
  /**
   * 经度
   */
  readonly lng: number;

  /**
   * 墨卡托坐标
   *
   * @type {[number, number]}
   */
  pos: [number, number];

  /**
   *
   * @param {number} lng 经度
   * @param {number} lat 纬度
   * @param {boolean} noWrap 默认为 false，false 时将相减的结果经度值修正到 [-180,180] 区间内
   */
  constructor(lng: number, lat: number, noWrap?: boolean);

  /**
   * 设置经度值
   * @param {number} lng 经度
   * @returns {this}
   */
  setLng(lng: number): this;
  /**
   * 设置纬度值
   * @param {number} lat
   * @returns {this}
   */
  setLat(lat: number): this;
  /**
   * 获取经度值
   * @return {number}
   */
  getLng(): number;
  /**
   * 获取纬度值
   * @return {number}
   */
  getLat(): number;
  /**
   * 判断经纬度坐标和另外一个经纬度坐标是否相等
   * @param {LngLat} another 另外一个经纬度坐标
   * @return {Boolean} 是否相等
   */
  equals(another: LngLat): boolean;
  /**
   * 与另外一个经纬度相加
   * @param {LngLat} another 另外一个经纬度坐标
   * @param {boolean} noWrap 是否将相加的结果经度值修正到 [-180,180] 区间内
   * @return {LngLat} 两个经纬度相加的结果
   */
  add(another: LngLat, noWrap?: boolean): LngLat;
  /**
   * 与另外一个经纬度相减
   * @param {LngLat} another 另外一个经纬度坐标
   * @param {boolean} noWrap 默认为 false，false 时将相减的结果经度值修正到 [-180,180] 区间内
   * @return {LngLat} 两个经纬度相减的结果
   */
  subtract(another: LngLat, noWrap?: boolean): LngLat;
  /**
   * 经纬度除以一个系数，返回一个新的经纬度对象。
   * 文档中未提到，但是存在.
   *
   * @param {Number} num
   * @param {Boolean} noWrap 默认为 false，false 时将相减的结果经度值修正到 [-180,180] 区间内
   * @return {LngLat}
   */
  divideBy(num: number, noWrap?: boolean): LngLat;
  /**
   * 经纬度乘以一个系数，返回一个新的经纬度对象。
   * 文档中未提到，但是存在。
   *
   * @param {Number} num
   * @param {Boolean} noWrap 默认为 false，false 时将相减的结果经度值修正到 [-180,180] 区间内
   * @return {LngLat}
   */
  multiplyBy(num: number, noWrap?: boolean): LngLat;
  /**
   * 获取从当前经纬度位置向东移动 E 米，向北移动 N 米的坐标位置
   * @param {Number} E  经度方向移动，向东为正
   * @param {Number} N  维度方向移动，向北为正
   * @return {LngLat} 移动后的新经纬度
   */
  offset(E: number, N: number): LngLat;
  /**
   * LngLat对象以字符串的形式返回
   *
   * @returns {string} 格式如'lng值,lat值'的字符串
   */
  toString(): string;
  /**
   * LngLat对象以数组形式返回
   *
   * @returns {[number, number]}
   */
  toArray(): [number, number];
  /**
   * 文档中未提到，但是存在.
   *
   * @returns {[number, number]}
   */
  toJSON(): [number, number];
  /**
   * 计算当前经纬度距离另一个经纬度的距离
   * [相关示例](https://lbs.amap.com/api/javascript-api/example/calcutation/calculate-distance-between-two-markers/)
   * @param {LngLatLike} another
   * @returns {number} 距离值，单位为米
   */
  distance(another: LngLatLike): number;
  /**
   * 等同于方法 distance.
   * 文档中未提到，但是存在.
   * @param another
   */
  distanceTo(another: LngLatLike): number;
  /**
   * 复制一个经纬度对象
   *
   * @param {LngLatLike} point
   * @returns {LngLat}
   */
  static from(point: LngLatLike): LngLat;
}

export type LngLatLike = LngLat | [number, number];

export default LngLat;
