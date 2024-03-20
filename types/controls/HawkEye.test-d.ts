/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import { Control } from './Control';
import {
  HawkEyeOptions,
  HawkEye,
} from './HawkEye';
import BaseLayer from '../layers/BaseLayer';

expectAssignable<HawkEyeOptions>({});
expectAssignable<HawkEyeOptions['autoMove']>(true);
expectAssignable<HawkEyeOptions['autoMove']>(true);
expectAssignable<HawkEyeOptions['autoMove']>(false);
expectAssignable<HawkEyeOptions['showRectangle']>(false);
expectAssignable<HawkEyeOptions['showButton']>(false);
expectAssignable<HawkEyeOptions['isOpen']>(false);
expectAssignable<HawkEyeOptions['mapStyle']>('amap://styles/dark');
expectAssignable<HawkEyeOptions['layers']>([]);
expectAssignable<HawkEyeOptions['layers']>([{} as any as BaseLayer]);
expectAssignable<HawkEyeOptions['width']>('1px');
expectAssignable<HawkEyeOptions['height']>('1px');
expectAssignable<HawkEyeOptions['offset']>([1, 1]);
expectAssignable<HawkEyeOptions['borderStyle']>('double solid solid double');
expectAssignable<HawkEyeOptions['borderColor']>('red');
expectAssignable<HawkEyeOptions['borderRadius']>('1px');
expectAssignable<HawkEyeOptions['borderWidth']>('1px');
expectAssignable<HawkEyeOptions['buttonSize']>('1px');

const control = new HawkEye({});

expectType<HawkEye>(control);
expectAssignable<Control>(control); // 继承检查

// properties

// methods
expectType<void>(control.show());

expectType<void>(control.hide());
