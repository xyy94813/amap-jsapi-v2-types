import { expectAssignable, expectType } from 'tsd';
import { Control } from './Control';
import {
  ToolBarConfig,
  ToolBar,
} from './ToolBar';

expectAssignable<ToolBarConfig>({});
expectAssignable<ToolBarConfig>({ position: 'LT', offset: [0, 0] });
expectAssignable<ToolBarConfig>({ position: { left: '0', top: '0' } });

const control = new ToolBar({});

expectType<ToolBar>(control);
expectAssignable<Control>(control); // 继承检查

// properties
expectType<HTMLElement>(control._container);
