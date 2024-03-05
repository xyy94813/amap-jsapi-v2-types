/**
 * 浏览器信息
 *
 * https://lbs.amap.com/api/javascript-api-v2/documentation#browser
 */
export interface Browser {
  ua: string;
  mobile: boolean;
  plat: string;
  mac: boolean;
  windows: boolean;
  ios: boolean;
  iPad: boolean;
  iPhone: boolean;
  android: boolean;
  android23: boolean;
  chrome: boolean;
  firefox: boolean;
  safari: boolean;
  wechat: boolean;
  uc: boolean;
  qq: boolean;
  ie: boolean;
  ie6: boolean;
  ie7: boolean;
  ie8: boolean;
  ie9: boolean;
  ie10: boolean;
  ie11: boolean;
  edge: boolean;
  ielt9: boolean;
  baidu: boolean;
  isLocalStorage: boolean;
  isGeolocation: boolean;
  mobileWebkit: boolean;
  mobileWebkit3d: boolean;
  mobileOpera: boolean;
  retina: boolean;
  touch: boolean;
  msPointer: boolean;
  pointer: boolean;
  baseRender: string;
  wasm: boolean;
  webkit: boolean;
  ie3d: boolean;
  webkit3d: boolean;
  gecko3d: boolean;
  opera3d: boolean;
  any3d: boolean;
  isCanvas: boolean;
  isSvg: boolean;
  isVML: boolean;
  isWorker: boolean;
  isWebsocket: boolean;
  isWebGL: boolean;
  checkWebGL: () => boolean;
}

export default Browser;
