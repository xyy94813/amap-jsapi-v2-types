/**
 * 高德地图 JS API v2 类型声明
 */
declare namespace AMap {}

declare global {
    interface Window {
        AMap: typeof AMap;
    }
}

export {
    AMap,
}
