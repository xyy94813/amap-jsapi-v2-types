import type Bounds from './common/Bounds';
import type Size from './common/Size';
import type { Pixel, PixelLike } from './common/Pixel';
import type Event from './common/Event';
import type { LngLat, LngLatLike } from './common/LngLat';
import type BaseLayer from './layers/BaseLayer';
import type VectorLayer from './layers/VectorLayer';
import type Overlay from './overlays/Overlay';
import type { Control } from './controls/Control';

export type MapStates = Record<string, any> & {
  dragEnable: boolean;
  zoomEnable: boolean;
  doubleClickZoom: boolean;
  keyboardEnable: boolean;
  jogEnable: boolean;
  scrollWheel: boolean;
  zoomSpeed: number;
  animateEnable: boolean;
  touchZoomCenter: number;
  touchZoom: boolean;
  pitchEnable: boolean;
  rotateEnable: boolean;
  showBuildingBlock?: boolean;
  isHotspot: boolean;
  mapstyleUrl: string;
  features?: string | string[];
  allBubble: boolean;
  pickWhenMoving: boolean;
};

export type MapOptions = Partial<MapStates> & {
  /** 初始中心经纬度 */
  center?: LngLatLike;
  /** 地图显示的缩放级别，可以设置为浮点数；若center与level未赋值，地图初始化默认显示用户所在城市范围。 */
  zoom?: number;
  /**  地图顺时针旋转角度，取值范围 [0-360]，默认值：0 */
  rotation?: number;
  /**  俯仰角度，默认 0，最大值根据地图当前 zoom 级别不断增大，2D地图下无效。 */
  pitch?: number;
  /** 地图视图模式, 默认为‘2D’，可选’3D’，选择‘3D’会显示 3D 地图效果。*/
  viewMode?: '2D' | '3D';
  /** 设置地图上显示的元素种类, 支持'bg'（地图背景）、'point'（POI点）、'road'（道路）、'building'（建筑物）*/
  features?: string[];
  /**
   * 地图图层数组，数组可以是图层中的一个或多个，默认为普通二维地图。
   * 当叠加多个图层时，普通二维地图需通过实例化一个 TileLayer 类实现。
   * 如果你希望创建一个默认底图图层，使用 AMap.createDefaultLayer()
   **/
  layers?: BaseLayer[];
  /** 地图显示的缩放级别范围, 默认为 [2, 20] ，取值范围 [2 ~ 20] */
  zooms?: [number, number];
  /** 是否展示地图文字和 POI 信息。*/
  showLabel?: boolean;
  /** 地图默认鼠标样式。参数 defaultCursor 应符合 CSS 的 cursor 属性规范。 */
  defaultCursor?: string;
  /** 设置地图的显示样式，目前支持两种地图样式 */
  mapStyle?: string;
  /** 地图楼块的侧面颜色 */
  wallColor?: string | number[];
  /** 地图楼块的顶面颜色 */
  roofColor?: string | number[];
  /** 是否展示地图 3D 楼块，默认 true */
  showBuildingBlock?: boolean;
  /** 是否自动展示室内地图，默认是 false */
  showIndoorMap?: boolean;
  /** 天空颜色，3D 模式下带有俯仰角时会显示 */
  skyColor?: string | number[];
  /** 为 Map 实例指定掩模的路径，各图层将只显示路径范围内图像，3D视图下有效。 格式为一个经纬度的一维、二维或三维数组。 */
  mask?: number[];
};

export type MapEventType =
  /** 地图容器尺寸改变事件 **/
  | 'resize'
  /** 地图资源加载完成后触发事件 **/
  | 'complete'
  | 'click'
  | 'dblclick'
  /** 地图平移时触发事件 **/
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
  /** 支持自行扩展 **/
  | string;

export declare class Map extends Event<MapEventType> {
  constructor(ele: string | HTMLElement, opts?: MapOptions);
  /**
   * 获取地图中心点经纬度坐标值。
   * @returns {LngLat} 中心点
   **/
  getCenter(): LngLat;
  /**
   * 设置中心点
   * @param {LngLatLike} center 中心点经纬度
   * @param {boolean} immediately 是否立即过渡到目标位置
   * @param {number} duration 如果使用动画过度，动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
   **/
  setCenter(center: LngLatLike, immediately?: boolean, duration?: number): void;
  /**
   * 获取当前地图视图范围/可视区域。
   * @returns {Bounds} 边界经纬度
   **/
  getBounds(): Bounds;
  /**
   * 指定当前地图显示范围，参数 bounds 为指定的范围
   * @param {Bounds | [number, number, number, number]} bounds 经纬度范围
   **/
  setBounds(bounds: Bounds | [number, number, number, number]): void;
  /**
   * 获取Map的限制区域
   * @returns {Bounds | undefined}
   **/
  getLimitBounds(): Bounds | undefined;
  /**
   * 设置 Map 的限制区域，设定区域限制后，传入参数为限制的 Bounds。
   * 地图仅在区域内可拖拽
   * @exampleUrl https://lbs.amap.com/api/jsapi-v2/example/map/limit-map-show-range
   * @param {Bounds | [number, number, number, number]} bounds
   **/
  setLimitBounds(bounds: Bounds | [number, number, number, number]): void;
  /**
   * 清除 Map 的限制区域
   **/
  clearLimitBounds(): void;
  /**
   * 返回地图对象的容器
   * @returns {HTMLElement}
   **/
  getContainer(): HTMLElement;
  /**
   * 获取地图容器尺寸，单位：像素
   * @returns {Size}
   **/
  getSize(): Size;
  /**
   * 获取地图缩放等级范围
   * @returns {[number, number]}
   **/
  getZooms(): [number, number];
  /**
   * 设置地图缩放等级范围
   * @param {[number, number]} zooms
   **/
  setZooms(zooms: [number, number]): void;
  /**
   * 获取当前地图缩放级别, 默认取值范围为[2, 20]
   * @param {number} digits zoom 级别的小数位精度，缺省为2
   **/
  getZoom(digits?: number): number;
  /**
   * 设置地图显示的缩放级别，参数 zoom 可设范围受 getZooms() 结果影响
   * @param {number} zoom
   * @param {boolean} immediately
   * @param {number} duration
   **/
  setZoom(zoom: number, immediately?: boolean, duration?: number): void;
  /**
   * 地图缩放至指定级别并以指定点为地图显示中心点
   * @param {number} zoom 缩放等级
   * @param {LngLatLike} center 地图中心点位置
   * @param {boolean} immediately 是否立即过渡到目位置
   * @param {number} duration 如果使用动画过度，动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
   **/
  setZoomAndCenter(
    zoom: number,
    center: LngLatLike,
    immediately?: boolean,
    duration?: number,
  ): void;
  /**
   * 地图放大一级显示
   **/
  zoomIn(): void;
  /**
   * 地图缩小一级显示
   **/
  zoomOut(): void;
  /**
   * 根据地图上添加的覆盖物分布情况，自动缩放地图到合适的视野级别，参数均可缺省。
   *
   * @param {VectorLayer | Overlay[]} overlays 覆盖物
   * @param {boolean} immediately 是否立即过渡. 默认 false
   * @param {number[]} avoid 四周边距，上、下、左、右。默认：[60, 60, 60, 60]
   * @param {number} maxZoom 最大 zoom 级别。默认：getZooms()[1]
   * @returns {Bounds} bounds 新的地图视口范围.
   *
   * @example
   * var map = new AMap.Map({
   *     zoom: 10,
   * });
   * var marker = new AMap.Marker({
   *     map: map,
   *     position: [112, 30],
   * });
   * var marker1 = new AMap.Marker({
   *     map: map,
   *     position: [110, 31],
   * });
   * map.setFitView(
   *     [marker, marker1],  // 覆盖物数组
   *     false,  // 动画过渡到制定位置
   *     [60, 60, 60, 60],  // 周围边距，上、下、左、右
   *     10,  // 最大 zoom 级别
   * );
   **/
  setFitView(
    overlays?: VectorLayer | Overlay[],
    immediately?: boolean,
    avoid?: number[],
    maxZoom?: number,
  ): Bounds | undefined;
  /**
   * 根据 overlays 计算出合适的中心点和 zoom 级别
   *
   * @param {Overlay[]} overlays 覆盖物
   * @param {number[]} avoid 四周边距，上、下、左、右
   * @param {number} maxZoom 最大 zoom 级别
   * @returns {[number, LngLat]} zoom 级别和中心点经纬度
   **/
  getFitZoomAndCenterByOverlays(
    overlayList: Overlay[],
    avoid?: number[],
    maxZoom?: number,
  ): [number, LngLat] | undefined;
  /**
   * 根据 bounds 计算出合适的中心点和 zoom 级别
   *
   * @param {(number[] | Bounds)} bounds 需要计算的范围
   * @param {number[]} avoid 四周边距，上、下、左、右
   * @param {number} maxZoom 最大 zoom 级别
   * @returns {[number, LngLat]} [zoom , 中心点经纬度]
   **/
  getFitZoomAndCenterByBounds(
    bounds: number[] | Bounds,
    avoid?: number[],
    maxZoom?: number,
  ): [number, LngLat] | undefined;
  /**
   * 获取地图当前俯仰角
   **/
  getPitch(): number;
  /**
   * 设置地图俯仰角。
   * @warning 3D 模式下才生效
   * @param {number} pitch 角度
   * @param {boolean} immediately 是否立即过渡到目标位置
   * @param {number} duration 如果使用动画过度，动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
   **/
  setPitch(pitch: number, immediately?: boolean, duration?: number): void;
  /**
   * 获取地图顺时针旋转角度, 范围: [0 ~ 360]
   * @returns {number}
   **/
  getRotation(): number;
  /**
   * 设置地图顺时针旋转角度, 旋转原点为地图容器中心点, 取值范围: [0 ~ 360]
   * @param {}number rotation 旋转角度
   * @param {}boolean immediately 是否立即过渡到目标位置
   * @param {}number duration 动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
   **/
  setRotation(
    rotation: number,
    immediately?: boolean,
    duration?: number,
  ): number;
  /**
   * 获取当前地图状态信息，包括是否可鼠标拖拽移动地图、地图是否可缩放、地图是否可旋转（rotateEnable）、 是否可双击放大地图、是否可以通过键盘控制地图旋转（keyboardEnable）等
   * @returns {MapStates} 地图状态信息映射集合
   **/
  getStatus(): MapStates;
  /**
   * 设置当前地图显示状态
   * @exampleUrl https://lbs.amap.com/api/javascript-api/example/map/set-map-status
   * @param {MapStates} opts 地图状态值映射集合
   **/
  setStatus(opts: MapStates): void;
  /**
   * 获取地图默认鼠标指针样式
   * @returns {string} 地图鼠标指针样式
   **/
  getDefaultCursor(): string;
  /**
   * 设置地图默认鼠标指针样式
   * @param {string} cursor 设置鼠标指针默认样式
   **/
  setDefaultCursor(cursor: string): void;
  /**
   * 获取地图显示样式
   * @returns {string} 例如：'amap://styles/normal'
   **/
  getMapStyle(): string;
  /**
   * 设置地图的显示样式，目前支持两种地图样式：
   * - 第一种：自定义地图样式，如 "amap://styles/d6bf8c1d69cea9f5c696185ad4ac4c86" 可前往地图自定义平台定制自己的个性地图样式；
   * - 第二种：官方样式模版,如 "amap://styles/grey"。
   *
   * 其他模版样式及自定义地图的使用说明见:
   * https://lbs.amap.com/api/jsapi-v2/guide/map/map-style
   *
   * @exampleUrl https://lbs.amap.com/api/jsapi-v2/example/personalized-map/set-theme-style
   * @param {string} value
   **/
  setMapStyle(value: string): void;
  /**
   * 获取地图中心点所在区域，回调函数返回对象属性分别对应为{省，市，区/县}
   * @param {Function} cb 查询成功的回调函数
   * @param {LngLatLike} lnglat 查询的经纬度
   * @returns
   **/
  getCity(cbk: (result: any) => void, lnglat: LngLatLike): void;
  /**
   * 按照行政区名称或adcode来设置地图显示的中心点。
   * 行政区名称支持中国、省、市、区/县名称，如遇重名的情况，会按城市编码表顺序返回第一个。
   * adcode 请在城市编码表中查询。
   * @warning 建议 `center/setCenter()` 和 `setCity()` 不要同时使用，如一起使用将以 `setCity()` 作为最后结果。
   * @param {string} cityName 城市名称
   **/
  setCity(cityName: string): void;
  /**
   * 获取当前地图比例尺。表示当前屏幕距离一米代表实际距离多少米
   * @param {number} dpi
   * @returns {number} 比例尺的值
   **/
  getScale(dpi: number): number;
  /**
   * 添加图层到地图上
   * @param {BaseLayer} layer 地图图层对象
   **/
  addLayer(layer: BaseLayer): void;
  /**
   * 从地图上移除图层
   * @param {BaseLayer} layer 地图图层
   **/
  removeLayer(layer: BaseLayer): void;
  /**
   * 获取地图图层数组，数组为一个或多个图层
   * @returns {BaseLayer[]} 地图图层数组
   **/
  getLayers(): BaseLayer[];
  /**
   * 将多个图层一次替代地图上原有图层，会移除地图原有图层
   * @param {BaseLayer[]} layers 地图图层数组
   **/
  setLayers(layers: BaseLayer[]): void;
  /**
   * 添加覆盖物/图层。
   *
   * @param {Overlay | BaseLayer | Array<Overlay | BaseLayer>} features 覆盖物对象或者数组
   *
   **/
  add(features: Overlay | BaseLayer | Array<Overlay | BaseLayer>): void;
  /**
   * 删除覆盖物/图层。
   * @param {Overlay | BaseLayer | Array<Overlay | BaseLayer>} features 覆盖物对象或者数组
   *
   **/
  remove(features: Overlay | BaseLayer | Array<Overlay | BaseLayer>): void;
  /**
   * 添加控件。如：ToolBar、OverView、Scale等
   * @param {Control} control 控件对象
   **/
  addControl(control: Control): void;
  /**
   * 移除地图上的指定控件
   * @param {Control} control 控件对象
   **/
  removeControl(control: Control): void;
  /**
   * 返回添加的覆盖物对象，可选类型包括 marker、circle、polyline、polygon；
   * 返回结果不包含官方覆盖物等，比如定位marker，周边搜索圆等
   *
   * @exampleUrl https://lbs.amap.com/api/jsapi-v2/example/common/get-all-overlays/
   * @param {string} type 可选，覆盖物类型
   * @returns {Overlay[]} 覆盖物数组
   **/
  getAllOverlays(type?: string): any[];
  /**
   * 获取地图显示元素种类
   * @returns {string[]} 返回 features 的集合，可能有 bg（地图背景）、point（兴趣点）、road（道路）、building（建筑物）
   **/
  getFeatures(): string | string[] | undefined;
  /**
   * 设置地图上显示的元素种类，支持 bg（地图背景）、point（兴趣点）、road（道路）、building（建筑物）
   *
   * @exampleUrl https://lbs.amap.com/api/jsapi-v2/example/personalized-map/set-map-cotent/
   * @param {string[]} features 类型数组
   *
   **/
  setFeatures(features: string[]): void;
  /**
   * 删除地图上所有的覆盖物
   **/
  clearMap(): void;
  /**
   * 清除地图上的信息窗体。
   **/
  clearInfoWindow(): void;
  /**
   * 销毁地图对象
   **/
  destroy(): void;
  /**
   * 地图中心点平移至指定点位置
   *
   * @param {LngLatLike} lnglat
   * @param {number} duration 动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
   **/
  panTo(lnglat: LngLatLike, duration?: number): void;
  /**
   * 以像素为单位, 沿 x 方向和 y 方向移动地图, x 向右为正, y 向下为正
   *
   * @param {number} x 横轴方向
   * @param {number} y 纵轴方向
   * @param {number} duration 如果使用动画过度，动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
   **/
  panBy(x: number, y: number, duration?: number): void;
  /**
   * 经纬度转莫卡托坐标（单位：米）
   * @param {LngLatLike} lnglat 经纬度
   * @returns {[number, number]} 莫卡托坐标（单位：米）
   **/
  lngLatToCoords(lnglat: LngLatLike): [number, number];
  /**
   * 莫卡托坐标（单位：米）转经纬度
   * @param {([number, number])} coords 莫卡托坐标（单位：米）
   * @returns {LngLat} 经纬度
   **/
  coordsToLngLat(coords: [number, number]): LngLat;
  /**
   * 地图经纬度坐标转为地图容器像素坐标
   *
   * @exampleUrl https://lbs.amap.com/api/jsapi-v2/example/axis/transformate-between-coordinates-of-lnglat-and-map-container/
   * @param {LngLatLike} lnglat 经纬度
   * @returns {Pixel} 容器像素坐标
   **/
  lngLatToContainer(lnglat: LngLatLike): Pixel;
  /**
   * 地图容器坐标转换成经纬度
   *
   * @exampleUrl https://lbs.amap.com/api/jsapi-v2/example/axis/transformate-between-coordinates-of-lnglat-and-map-container/
   * @param {PixelLike} pixel 容器像素坐标
   * @returns {LngLat} 转换成功的经纬度
   **/
  containerToLngLat(pixel: PixelLike): LngLat;
  /**
   * 莫卡托（单位：米）转成地图容器坐标
   * @param {[number, number]} coord 莫卡托坐标（单位：米）
   * @returns {[number, number]} 容器像素坐标
   *
   **/
  coordToContainer(coord: [number, number]): [number, number];
  /**
   * 地图容器坐标转成莫卡托（单位：米）
   *
   * @param {PixelLike} pixel 容器像素坐标
   * @returns {[number, number]} 莫卡托坐标（单位：米）
   **/
  containerToCoord(pixel: PixelLike): [number, number];
  /**
   * 平面地图像素坐标转换为地图经纬度坐标
   *
   * @param {PixelLike} pixel 像素坐标
   * @param {number} zoom 某个地图级别
   * @returns {LngLat}
   **/
  pixelToLngLat(pixel: PixelLike, zoom?: number): LngLat;
  /**
   * 经纬度坐标转换成平面地图像素坐标
   *
   * @param {LngLatLike} lnglat 经纬度
   * @param {number} zoom 某个地图级别，默认是地图当前级别
   * @returns {Pixel} 转换后的平面像素坐标
   **/
  lngLatToPixel(lnglat: LngLatLike, z?: number): Pixel;
  /**
   * 获取指定位置的地图分辨率，单位：米/像素。
   * 参数point有指定值时，返回指定点地图分辨率，point缺省时，默认返回当前地图中心点位置的分辨率
   *
   * @returns {number} 分辨率
   **/
  getResolution(point?: LngLat): number;
  /**
   * 获取审图号
   **/
  getMapApprovalNumber(): any;
  /**
   * 设置掩模范围
   *
   * @param {number[][]} maskPath 掩模范围
   **/
  setMask(maskPath: number[][]): void;
  /**
   * 设置文字是否拒绝掩模，true：不进行掩模，false：掩模
   *
   * @param {boolean} reject 是否拒绝掩模
   **/
  setLabelRejectMask(reject?: boolean): void;

  /** 加载插件 */
  plugin(pluginName: string, cb: () => void): any;
  plugin(pluginNames: string[], cb: () => void): any;

  /**
   * 重新计算容器大小
   * @warning 文档提及，但是未验证其存在
   **/
  resize(): void;
  /**
   * 获取当前位置的海拔高度并返回 ：altitude 空间高度.
   * @warning  文档提及，但是未验证其存在
   * @version v2.1Beta
   * @param {LngLatLike} lnglat
   **/
  getAltitude(lnglat: LngLatLike): number;
  /**
   * 根据像素坐标获取海拔高度
   * @warning  文档提及，但是未验证其存在
   * @version v2.1Beta
   * @param {PixelLike} pixel
   **/
  getAltitudeByContainer(pixel: PixelLike): number;
}

export default Map;
