/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import { Event } from '../common/Event';
import Map from '../Map';
import { Overlay } from './Overlay';

const overlay1 = new Overlay();
const overlay2 = new Overlay<Record<string, string>, 'overlayEventType'>();
expectType<Overlay>(overlay1);
expectAssignable<Event>(overlay1);
expectAssignable<Event<'overlayEventType'>>(overlay2);

// methods
expectType<Map | null | undefined>(overlay1.getMap());

expectType<void>(overlay1.setMap({} as any as Map));

expectType<void>(overlay1.setExtData({}));
expectType<void>(overlay2.setExtData({ a: '1' }));
expectError<void>(overlay2.setExtData({ a: 1 }));

expectType<any>(overlay1.getExtData());
// TODO: 返回值类型需要修改？
expectType<Record<string, string> | {}>(overlay2.getExtData());

expectType<void>(overlay1.setOptions({}));

expectType<any>(overlay1.getOptions());

expectType<void>(overlay1.show());

expectType<void>(overlay1.hide());

expectType<void>(overlay1.setHeight(1));
expectType<void>(overlay1.setHeight('1'));
expectType<void>(overlay1.setHeight());

expectType<string | number>(overlay1.getHeight());
