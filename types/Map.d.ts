import type Event from './common/Event.d';

export type MapEventType =
  /** 地图容器尺寸改变事件 */
  | 'resize'
  /** 地图资源加载完成后触发事件 */
  | 'complete'
  | 'click'
  | 'dblclick'
  /** 地图平移时触发事件 */
  | 'mapmove'
  | 'hotspotclick'
  | 'hotspotover'
  | 'hotspotout'
  | 'movestart'
  | 'moveend'
  | 'zoomchange'
  | 'zoomstart'
  | 'zoomend'
  | 'rotatechange'
  | 'rotatestart'
  | 'rotatestart'
  | 'mousemove'
  | 'mousewheel'
  | 'mouseover'
  | 'mouseout'
  | 'mouseup'
  | 'mousedown'
  | 'rightclick'
  | 'dragstart'
  | 'dragging'
  | 'dragend'
  | 'touchstart'
  | 'touchmove'
  | 'touchend'
  /** 支持自行扩展 */
  | string;

export declare class Map extends Event<MapEventType> {
  // TODO: 待完善
}

export default Map;
