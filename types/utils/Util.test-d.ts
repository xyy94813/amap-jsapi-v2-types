import { expectType } from 'tsd';
import Util from './Util';

const utils = {} as any as Util;

expectType<boolean>(utils.isDOM({}));
expectType<boolean>(utils.isDOM(null));
expectType<boolean>(utils.isDOM(document.body));

expectType<string>(utils.colorNameToHex('red'));

expectType<string>(utils.rgbHex2Rgba('#FFFF'));

expectType<string>(utils.argbHex2Rgba('#FFFFFF'));

expectType<boolean>(utils.isEmpty({}));
expectType<boolean>(utils.isEmpty([]));
expectType<boolean>(utils.isEmpty(null));
expectType<boolean>(utils.isEmpty(undefined));
expectType<boolean>(utils.isEmpty(NaN));
expectType<boolean>(utils.isEmpty(''));

const array = [1, 2, 3];
// TODO: 返回类型应为第一个参数的类型
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
expectType<any>(utils.deleteItemFromArray(array, 1));
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
expectType<any>(utils.deleteItemFromArray(undefined, 1));

// TODO: 返回类型应为第一个参数的类型
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
expectType<any>(utils.deleteItemFromArrayByIndex(array, 1));
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
expectType<any>(utils.deleteItemFromArrayByIndex(undefined, 1));

expectType<number>(utils.indexOf(array, 1));

expectType<number>(utils.format(1));
expectType<number>(utils.format(1, 2));

expectType<boolean>(utils.isArray([]));
expectType<boolean>(utils.isArray({}));
expectType<boolean>(utils.isArray(1));
expectType<boolean>(utils.isArray('1'));
expectType<boolean>(utils.isArray(() => {}));
expectType<boolean>(utils.isArray(null));
expectType<boolean>(utils.isArray(NaN));
expectType<boolean>(utils.isArray(undefined));

// includes
expectType<boolean>(utils.includes([], 1));
expectType<boolean>(utils.includes([], '1' as any));

expectType<number>(utils.requestIdleCallback(() => {}));
expectType<number>(utils.requestIdleCallback(() => {}, {}));

// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression, @typescript-eslint/no-invalid-void-type
expectType<void>(utils.cancelIdleCallback(1));

expectType<number>(utils.requestAnimFrame(() => {}));
expectType<number>(utils.requestAnimFrame(() => {}, window));
expectType<number>(utils.requestAnimFrame(() => {}, window, true));
expectType<number>(utils.requestAnimFrame(() => {}, window, true));
expectType<number>(utils.requestAnimFrame(() => {}, window, false, document.body));

// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression, @typescript-eslint/no-invalid-void-type
expectType<void>(utils.cancelAnimFrame(1));
