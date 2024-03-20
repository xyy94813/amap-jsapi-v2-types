/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { expectType, expectError } from 'tsd';
import { Event } from './Event';

class A extends Event {}
const a = new A();

function eventCB(): void {};

expectType<Event>(a);
expectType<A>(a);
expectType<A>(a.on('eventType', eventCB));
expectType<A>(a.on('eventType', eventCB, a));
expectType<A>(a.on('eventType', eventCB, a, true));
expectType<A>(a.on('eventType', eventCB, a, false));
expectType<A>(a.off('eventType', eventCB));
expectType<A>(a.off('eventType', eventCB, a));
expectType<A>(a.emit('eventType', {}));
expectType<boolean>(a.hasEvents('eventType'));
expectType<A>(a.clearEvents('eventType'));

// 范型
class B extends Event<'eType'> {}
const b = new B();
expectType<Event<'eType'>>(b);
expectType<B>(b);
expectType<B>(b.on('eType', eventCB));
expectType<B>(b.off('eType', eventCB));
expectType<B>(b.emit('eType', {}));
expectType<boolean>(b.hasEvents('eType'));
expectType<B>(b.clearEvents('eType'));

// 未定义的类型
// TODO: eslint format and ignore ts error
expectError<B>(b.on('eventType', eventCB));
expectError<B>(b.off('eventType', eventCB));
expectError<B>(b.emit('eventType', {}));
expectError<boolean>(b.hasEvents('eventType'));
expectError<B>(b.clearEvents('eventType'));
