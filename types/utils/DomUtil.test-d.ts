/* eslint-disable @typescript-eslint/no-invalid-void-type */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { expectType } from 'tsd';
import Pixel from '../common/Pixel';
import DomUtil from './DomUtil';

const domUtils = {} as any as DomUtil;

expectType<[number, number]>(domUtils.getViewport(document.body));

expectType<[number, number]>(domUtils.getViewportOffset(document.body));

expectType<HTMLElement>(domUtils.create('div', document.body));
expectType<HTMLElement>(domUtils.create('div', null, 'className', 'left'));
// TODO: 测试函数重载
// expectType<undefined>(void domUtils.hasClass());
// expectType<undefined>(domUtils.hasClass(document.body));
expectType<boolean>(domUtils.hasClass(document.body, 'className'));

expectType<void>(domUtils.addClass(document.body, 'className'));

expectType<void>(domUtils.setClass(document.body, 'className'));

expectType<void>(domUtils.removeClass(document.body, 'className'));

expectType<void>(domUtils.remove(document.body));

expectType<void>(domUtils.empty(document.body));

expectType<(target: HTMLElement, angle: number, center: Pixel) => void>(domUtils.rotate.bind(domUtils));

expectType<DomUtil>(domUtils.setCss(document.body, { width: '100vw' }));
expectType<DomUtil>(domUtils.setCss([document.body], { width: '100vw' }));

expectType<(el: HTMLElement, value: number) => void>(domUtils.setOpacity.bind(domUtils));

expectType<void>(domUtils.toggleClass(document.body, 'className', true));

expectType<typeof document.body>(domUtils.fillText(document.body, 'test'));
// TODO: 返回传入的 element 示例类型
// expectNotType<HTMLElement>(domUtils.fillText(document.createElement('div'), 'test'));

expectType<string>(domUtils.getStyle(document.body, 'test'));

expectType<any>(domUtils.mousePos(document.body, {}, {}));

expectType<any>(domUtils.watchSize(document.body, () => {}, {}));

expectType<any>(domUtils.watchSize2(document.body, () => {}, {}));
