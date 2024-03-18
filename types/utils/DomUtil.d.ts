import Pixel from '../common/Pixel';
/**
 * DOM 辅助工具
 *
 * https://lbs.amap.com/api/javascript-api-v2/documentation#domutil
 */
export type DomUtil = {
  /**
   * 获取 DOM 元素的大小
   * @param obj [width, height]
   */
  getViewport(obj: HTMLElement): [number, number];

  /**
   * 获取DOM元素距离窗口左上角的距离
   *
   * @param {HTMLElement} element
   * @returns {[number, number]} [x, y]
   */
  getViewportOffset(element: HTMLElement): [number, number];

  /**
   * 在parentNode内部创建一个className类名的tagName元素
   * @param {string} tagName 节点类型
   * @param {HTMLElement} container 上级节点对象
   * @param {string} className
   * @param {string} position 插入位置
   * @returns {HTMLElement}
   */
  create(
    tagName: string,
    container: HTMLElement | null,
    className?: string,
    position?: string,
  ): HTMLElement;

  /**
   * DOM 元素是否包含 className
   * @param {HTMLElement} el
   * @param {string} name
   * @returns {boolean}
   */
  hasClass(el: HTMLElement, name: string): boolean;
  hasClass(): undefined;
  hasClass(el: HTMLElement): undefined;
  /**
   * 给 DOM 元素添加一个 className
   * @param {HTMLElement} el
   * @param {string} name
   */
  addClass(el: HTMLElement, name: string): void;
  /**
   * 给 DOM 元素设置为 className 样式
   * @param {HTMLElement} el
   * @param {string} name
   */
  setClass(el: HTMLElement, name: string): void;
  /**
   * 给 DOM 元素删除一个 className
   * @param {HTMLElement} el
   * @param {string} name
   */
  removeClass(el: HTMLElement, name: string): void;
  /**
   * 将 DOM 元素从父节点删除
   *
   * @param {HTMLElement} el
   */
  remove(el: HTMLElement): void;
  /**
   * 清空DOM元素
   *
   * @param {HTMLElement} el
   */
  empty(el: HTMLElement): void;
  /**
   * 给DOM元素旋转一个角度，以 center 为中心，center 以元素左上角为坐标原点
   * @param {HTMLElement} target
   * @param {number} angle
   * @param {Pixel} center
   */
  rotate(target: HTMLElement, angle: number, center: Pixel): void;
  /**
   * 给 DOM 元素删除一组样式，Object 同样式表
   * @param {HTMLElement | HTMLElement[]} obj
   * @param {Object} css
   * @returns {DomUtil}
   *
   * @example AMap.DomUtil.setCss(container, { width: '100vw'})
   */
  setCss(obj: HTMLElement | HTMLElement[], css: any): DomUtil;
  /**
   * 给DOM元素设定一个透明度
   *
   * @param {HTMLElement} el
   * @param {number} value
   */
  setOpacity(el: HTMLElement, value: number): void;

  /**
   * 基于 on 的结果，添加或删除一个 className。
   * 文档中未提及，但是存在。
   * @param {HTMLElement} el
   * @param {string} name
   * @param {boolean} on
   * @returns {void}
   */
  toggleClass(el: HTMLElement, name: string, on: boolean): void;

  /**
   * 给 DOM 节点填充文本。
   * 文档中未提及，但是存在。
   * @param {HTMLElement} el
   * @param {string} name
   * @returns {typeof el}
   */
  fillText(el: HTMLElement, name: string): typeof el;
  /**
   * 获取 DOM 节点的样式的值。
   * 文档中未提及，但是存在。
   * @param {HTMLElement} el
   * @param {string} property css 属性名
   * @returns {string}
   *
   * @example AMap.DomUtil.getStyle(ele, 'opacity')
   */
  getStyle(el: HTMLElement, property: string): string;
  /**
   * 文档中未提及，但是存在。暂不清楚其功能。
   */
  mousePos(el: HTMLElement, event: any, n: any): any;
  /**
   * 文档中未提及，但是存在。暂不清楚其功能。
   */
  watchSize(el: HTMLElement, fn: Function, event: any): any;
  /**
   * 文档中未提及，但是存在。暂不清楚其功能。
   */
  watchSize2(el: HTMLElement, fn: Function, event: any): any;
};

export default DomUtil;
