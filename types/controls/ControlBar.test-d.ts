import { expectAssignable, expectType } from 'tsd';
import { Control } from './Control';
import {
  ControlBarConfig,
  ControlBar,
} from './ControlBar';

expectAssignable<ControlBarConfig>({});
expectAssignable<ControlBarConfig>({ position: 'LT', showControlButton: true, offset: [0, 0] });
expectAssignable<ControlBarConfig>({ position: { left: '0', top: '0' } });

const control = new ControlBar({});

expectType<ControlBar>(control);
expectAssignable<Control>(control); // 继承检查

// properties
expectType<ControlBarConfig>(control._config);
expectType<HTMLDivElement>(control._container);
expectType<HTMLDivElement>(control._compass);
expectType<HTMLDivElement>(control._luopan);
expectType<HTMLDivElement>(control._pitchDown);
expectType<HTMLDivElement>(control._pitchUp);
expectType<HTMLDivElement>(control._pointers);
expectType<HTMLDivElement>(control._rotateLeft);
expectType<HTMLDivElement>(control._rotateRight);
