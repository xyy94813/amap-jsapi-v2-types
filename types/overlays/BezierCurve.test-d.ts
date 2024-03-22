/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import LngLat from '../common/LngLat';
import Bounds from '../common/Bounds';
import { Overlay } from './Overlay';
import {
  BezierCurveOptions,
  BezierCurveEventType,
  BezierCurve,
} from './BezierCurve';

// BezierCurveOptions
expectAssignable<BezierCurveOptions>({});

expectAssignable<BezierCurveOptions['path']>([
  [116.404, 39.915],
  [116.407, 39.906, 116.41, 39.907],
]);
// TODO: 验证起点是否也是如此声明。官方文档类型声明可能有误
expectAssignable<BezierCurveOptions['path']>([
  [
    [116.407, 39.906], [116.41, 39.907],
  ],
  [
    [116.407, 39.906], [116.41, 39.907],
  ],
]);

expectAssignable<BezierCurveOptions['zIndex']>(1);
expectAssignable<BezierCurveOptions['bubble']>(true);
expectAssignable<BezierCurveOptions['cursor']>('pointer');
expectAssignable<BezierCurveOptions['strokeColor']>('red');
expectAssignable<BezierCurveOptions['strokeOpacity']>(0.4);
expectAssignable<BezierCurveOptions['strokeWeight']>(1);
expectAssignable<BezierCurveOptions['strokeStyle']>('solid');
expectAssignable<BezierCurveOptions['borderWeight']>(1);
expectAssignable<BezierCurveOptions['isOutline']>(true);
expectAssignable<BezierCurveOptions['outlineColor']>('red');
expectAssignable<BezierCurveOptions['draggable']>(true);
expectAssignable<BezierCurveOptions['extData']>({});
expectAssignable<BezierCurveOptions<Record<string, string>>['extData']>({ a: 'a' });
expectError<BezierCurveOptions<Record<string, string>>['extData']>({ a: 1 });

// BezierCurveEventType
expectAssignable<BezierCurveEventType>('hide');
expectAssignable<BezierCurveEventType>('show');
expectAssignable<BezierCurveEventType>('click');
expectAssignable<BezierCurveEventType>('dblclick');
expectAssignable<BezierCurveEventType>('rightclick');
expectAssignable<BezierCurveEventType>('mousedown');
expectAssignable<BezierCurveEventType>('mouseup');
expectAssignable<BezierCurveEventType>('mouseover');
expectAssignable<BezierCurveEventType>('mouseout');
expectAssignable<BezierCurveEventType>('touchstart');
expectAssignable<BezierCurveEventType>('touchmove');
expectAssignable<BezierCurveEventType>('touchend');

//
const overlay1 = new BezierCurve();
const overlay2 = new BezierCurve<Record<string, string>>();
expectType<BezierCurve>(overlay1);
expectAssignable<Overlay<any, BezierCurveEventType>>(overlay1);
expectAssignable<Overlay<Record<string, string>, BezierCurveEventType>>(overlay2);

// methods
expectType<NonNullable<BezierCurveOptions['path']>>(overlay1.getPath());

expectType<void>(overlay1.setPath());
expectType<void>(overlay1.setPath([
  [116.404, 39.915],
  [116.407, 39.906, 116.41, 39.907],
]));
expectType<void>(overlay1.setPath([
  [
    [116.407, 39.906], [116.41, 39.907],
  ],
  [
    [116.407, 39.906], [116.41, 39.907],
  ],
]));

const p1: [number, number] = [118, 23];
const p2 = new LngLat(119, 23);

expectType<void>(overlay1.contains(p1));
expectType<void>(overlay1.contains(p2));

expectType<number>(overlay1.getLength());

expectType<Bounds | undefined>(overlay1.getBounds());
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
expectType<Bounds>(overlay1.getBounds()!);

expectType<void>(overlay1.destroy());

expectType<void>(overlay1.setHeight(1));

expectType<number>(overlay1.getPolylineHeight());

expectType<any>(overlay1.generateBuffer());
// TODO: 文档没说明，需要验证是否需要支持那么多类型
expectType<any>(overlay1.generateBuffer(1, {}, 'string'));
