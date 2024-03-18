/**
 * 工具
 *
 * https://lbs.amap.com/api/javascript-api-v2/documentation#util
 */
export type Util = {
  /**
   * 判断参数是否为DOM元素
   * @param {any} obj
   * @returns {boolean}
   */
  isDOM(obj: any): boolean;
  /**
   * 返回颜色名对应的十六进制
   *
   * @param {string} colorName 例如：red
   * @returns {string}
   *
   * @example colorNameToHex('red')
   *
   */
  colorNameToHex(colorName: string): string;
  /**
   * 将 16进制 RGB 转为 rgba(R,G,B,A)
   * @param {string} hex
   * @returns {string}
   *
   */
  rgbHex2Rgba(hex: string): string;
  /**
   * 将 16进制 RGB 转为 rgba(R,G,B,A)
   * @param {string} hex
   * @returns {string}
   */
  argbHex2Rgba(hex: string): string;
  /**
   * 判断一个对象是否为空
   * @param {any} obj
   * @returns {boolean}
   * */
  isEmpty(obj: any): boolean;
  /**
   * 从数组删除元素
   * @param {any} array
   * @param {any} item
   * @returns {any}
   */
  deleteItemFromArray(array: any, item: any): typeof array;
  /**
   * 按索引删除数组元素
   * @param {any} array
   * @param {number} index
   * @returns {any}
   */
  deleteItemFromArrayByIndex(array: any, index: number): typeof array;
  /**
   * 返回元素索引
   * @param {any} array
   * @param {any} item
   * @returns {number}
   */
  indexOf(array: any, item: any): number;
  /**
   * 保留小数点后 digits 位，会四舍五入
   * @param {number} num
   * @param {number|string} digits 默认为 0, 支持字符串数字
   * @returns {number}
   */
  format(num: number, digits?: any): number;
  /**
   * 判断是否数组
   * @param {any} obj
   * @returns {boolean}
   */
  isArray(array: any): boolean;

  /**
   * 判断数组是否包含某个元素
   * @param {any} array
   * @param {any} item
   * @returns {boolean}
   */
  includes(arr: any, item: any): boolean;
  /**
   * 同原生 requestIdleCallback
   * @param {Function} fn 回调函数
   * @param {any} options 可选的配置参数。具体参考 MDN
   * @returns {number} job id
   */
  requestIdleCallback(fn: Function, options?: any): number;
  /**
   * 同原生 cancelIdleCallback
   * @param {number} id
   * @returns {void}
   */
  cancelIdleCallback(id: number): void;
  /**
   * 同原生 Util.requestAnimFrame
   * @param {Function} fn
   * @param {any} context
   * @param {any} immediate
   * @param {any} element
   * @returns
   */
  requestAnimFrame(
    fn: Function,
    context?: any,
    immediate?: any,
    element?: any,
  ): number;
  /**
   * 同原生 Util.cancelAnimFrame
   * @param id
   */
  cancelAnimFrame(id: number): void;
};

export default Util;
