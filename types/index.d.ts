import type { LngLat, LngLatLike } from './common/LngLat';
import type Bounds from './common/Bounds';
import type Pixel from './common/Pixel';
import type Size from './common/Size';
/**
 * 高德地图 JS API v2 类型声明
 */
declare namespace AMap {
  export {
    // 基础类
    LngLat,
    LngLatLike,
    Bounds,
    Pixel,
    Size,
  };
}

declare global {
  interface Window {
    AMap: typeof AMap;
  }
}

export { AMap };
