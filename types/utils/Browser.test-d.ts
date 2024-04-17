import { expectType } from 'tsd';
import Browser from './Browser';

const browser = {} as any as Browser;

expectType<string>(browser.ua);
expectType<boolean>(browser.mobile);
expectType<string>(browser.plat);
expectType<boolean>(browser.mac);
expectType<boolean>(browser.windows);
expectType<boolean>(browser.ios);
expectType<boolean>(browser.iPad);
expectType<boolean>(browser.iPhone);
expectType<boolean>(browser.android);
expectType<boolean>(browser.android23);
expectType<boolean>(browser.chrome);
expectType<boolean>(browser.firefox);
expectType<boolean>(browser.safari);
expectType<boolean>(browser.wechat);
expectType<boolean>(browser.uc);
expectType<boolean>(browser.qq);
expectType<boolean>(browser.ie);
expectType<boolean>(browser.ie6);
expectType<boolean>(browser.ie7);
expectType<boolean>(browser.ie8);
expectType<boolean>(browser.ie9);
expectType<boolean>(browser.ie10);
expectType<boolean>(browser.ie11);
expectType<boolean>(browser.edge);
expectType<boolean>(browser.ielt9);
expectType<boolean>(browser.baidu);
expectType<boolean>(browser.isLocalStorage);
expectType<boolean>(browser.isGeolocation);
expectType<boolean>(browser.mobileWebkit);
expectType<boolean>(browser.mobileWebkit3d);
expectType<boolean>(browser.mobileOpera);
expectType<boolean>(browser.retina);
expectType<boolean>(browser.touch);
expectType<boolean>(browser.msPointer);
expectType<boolean>(browser.pointer);
expectType<string>(browser.baseRender);
expectType<boolean>(browser.wasm);
expectType<boolean>(browser.webkit);
expectType<boolean>(browser.ie3d);
expectType<boolean>(browser.webkit3d);
expectType<boolean>(browser.gecko3d);
expectType<boolean>(browser.opera3d);
expectType<boolean>(browser.any3d);
expectType<boolean>(browser.isCanvas);
expectType<boolean>(browser.isSvg);
expectType<boolean>(browser.isVML);
expectType<boolean>(browser.isWorker);
expectType<boolean>(browser.isWebsocket);
expectType<boolean>(browser.isWebGL);
expectType<boolean>(browser.checkWebGL());