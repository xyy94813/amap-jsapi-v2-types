/* eslint-disable @typescript-eslint/no-invalid-void-type */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { expectAssignable, expectType } from 'tsd';
import Event from '../common/Event';
import Map from '../Map';
import {
  ControlPositionObject,
  ControlPosition,
  CommonControlConfig,
  ControlEventType,
  Control,
} from './Control';

expectAssignable<ControlPositionObject>({ left: '0', top: '0' });
expectAssignable<ControlPositionObject>({ right: '0', bottom: '0' });

expectAssignable<ControlPosition>('LT');
expectAssignable<ControlPosition>('RT');
expectAssignable<ControlPosition>('LB');
expectAssignable<ControlPosition>('RB');
expectAssignable<ControlPosition>({ left: '0', top: '0' });

expectAssignable<CommonControlConfig>({ position: 'LT', offset: [0, 0] });
expectAssignable<CommonControlConfig>({ position: {}, offset: [0, 0] });

expectAssignable<ControlEventType>('hide');
expectAssignable<ControlEventType>('show');

const control = new Control({});

expectType<Control>(control);
expectAssignable<Event<ControlEventType>>(control); // 继承检查

// properties
expectType<Map>(control.map);

// methods
expectType<void>(control.addTo({} as any as Map));

expectType<void>(control.remove());

expectType<void>(control.show());

expectType<void>(control.hide());

expectType<void>(control.removeFrom({} as any as Map));

// 事件相关
function eventCB(): void {}

expectType<Control>(control.on('show', eventCB));
expectType<Control>(control.off('show', eventCB));
expectType<Control>(control.emit('show', {}));
expectType<boolean>(control.hasEvents('show'));
expectType<Control>(control.clearEvents('show'));

expectType<Control>(control.on('hide', eventCB));
expectType<Control>(control.off('hide', eventCB));
expectType<Control>(control.emit('hide', {}));
expectType<boolean>(control.hasEvents('hide'));
expectType<Control>(control.clearEvents('hide'));
