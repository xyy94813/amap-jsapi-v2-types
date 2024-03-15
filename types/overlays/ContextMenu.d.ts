import type Event from '../common/Event';
import type { LngLatLike } from '../common/LngLat';
import type Map from '../Map';

export type ContextMenuOptions = {
  position?: LngLatLike;
  content?: string | HTMLElement;
};

export type ContextMenuEventType = 'open' | 'close';

/**
 * 右键菜单。
 * 从实现来看，右键菜单作为一个地图覆盖物。很有可能继成自通用 Overlay
 * @docs https://lbs.amap.com/api/javascript-api-v2/documentation#contextmenu
 */
export declare class ContextMenu extends Event<ContextMenuEventType> {
  constructor(opt?: ContextMenuOptions);
  /**
   * 打开右键菜单
   * @param {Map} map
   * @param {LngLatLike} position
   */
  open(map: Map, position: LngLatLike): void;
  /**
   * 关闭右键菜单
   */
  close(): void;
  /**
   * 菜单添加一条内容
   * @param {string} text
   * @param {EventListener} fn
   * @param {number} num
   */
  addItem(text: string, fn: EventListener, num: number): void;
  /**
   * 菜单移除一条内容
   * @param {string} text
   * @param {EventListener} fn
   */
  removeItem(text: string, fn: EventListener): void;

  /**
   * 获取内容
   * @warning 文档未提及，但实际存在
   **/
  getContent(): string | HTMLElement;
  /**
   * 设置内容
   * @warning 文档未提及，但实际存在
   **/
  setContent(content: string | HTMLElement): void;
}

export default ContextMenu;
