import { expectAssignable, expectType } from 'tsd';
import { Control } from './Control';
import {
  ScaleConfig,
  Scale,
} from './Scale';

expectAssignable<ScaleConfig>({});
expectAssignable<ScaleConfig>({ position: 'LT', offset: [0, 0] });
expectAssignable<ScaleConfig>({ position: { left: '0', top: '0' } });

const control = new Scale({});

expectType<Scale>(control);
expectAssignable<Control>(control); // 继承检查

// properties
expectType<HTMLElement>(control._container);
