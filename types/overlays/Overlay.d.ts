import type { Event } from '../common/Event';
import type { Map } from '../Map';

export declare class Overlay<
  ExtraData = any,
  EventType = string,
> extends Event<EventType> {
  /**
   * 获取所属地图
   */
  getMap(): Map | null | undefined;
  /**
   * 设置所属地图
   * @param map 地图
   */
  setMap(map: Map | null): void;
  /**
   * 设置自定义数据
   * @param extData 自定义数据
   */
  setExtData(extData: ExtraData): void;
  /**
   * 获取自定义数据
   */
  getExtData(): ExtraData | {};
  /**
   * OverlayGroup 类用来包装其它覆盖物类的实例，对实例集合做整体操作
   * 其中能够批量 setOptions 大概率该方法是现在抽象的类别里
   */
  setOptions(options: any): void;
  /**
   * 获取配置
   */
  getOptions(): any;
  /**
   * 显示
   * OverlayGroup 类用来包装其它覆盖物类的实例，对实例集合做整体操作
   * 其中能够批量 setOptions 大概率该方法是现在抽象的类别里
   */
  show(): void;
  /**
   * 隐藏
   * OverlayGroup 类用来包装其它覆盖物类的实例，对实例集合做整体操作
   * 其中能够批量 setOptions 大概率该方法是现在抽象的类别里
   */
  hide(): void;
  // internal, 3D 模式下有效
  setHeight(height?: number | string): void;
  getHeight(): number | string;
}

export default Overlay;
