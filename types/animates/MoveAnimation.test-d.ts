/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import {
  AnimationCallback,
  EasingCallback,
  MoveToOptions,
  MoveAlongOptions,
  MoveAlongObj,
  MoveAnimation,
} from './MoveAnimation';
import LngLat from '../common/LngLat';

expectAssignable<AnimationCallback>(() => 1);
expectAssignable<AnimationCallback>((index) => index ?? 0);
expectAssignable<AnimationCallback>((index, data) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  expectType<LngLat>(data!);
  return index ?? 0;
});

expectAssignable<EasingCallback>(() => 1);
expectAssignable<EasingCallback>((passedTime) => passedTime ?? 100);

expectAssignable<MoveToOptions>({ });

expectAssignable<MoveToOptions['duration']>(100);
expectAssignable<MoveToOptions['speed']>(100);
expectAssignable<MoveToOptions['speed']>(() => 1);
// expectAssignable<MoveToOptions['easing']>((() => 1));
expectAssignable<MoveToOptions['easing']>(((passedTime) => passedTime ?? 100));
expectAssignable<MoveToOptions['autoRotation']>(false);

expectAssignable<MoveAlongOptions>({
  aniInterval: 100,
});

expectAssignable<MoveAlongOptions['duration']>(1);
expectAssignable<MoveAlongOptions['speed']>(100);
expectAssignable<MoveAlongOptions['speed']>((() => 1) as EasingCallback);
expectAssignable<MoveAlongOptions['easing']>((passedTime) => passedTime ?? 100);
expectAssignable<MoveAlongOptions['circlable']>(true);
expectAssignable<MoveAlongOptions['delay']>(100);
expectAssignable<MoveAlongOptions['delay']>((() => 1) as EasingCallback);
expectAssignable<MoveAlongOptions['autoRotation']>(true);

expectAssignable<MoveAlongObj>({} as any);

const moveAnimation = {} as any as MoveAnimation;

const p1: [number, number] = [118, 23];
const p2 = new LngLat(1, 1);

const line1 = [p1, p1, p1, p1];
const line2 = [p2, p2, p2, p2];

expectType<void>(moveAnimation.moveTo(p1));
expectType<void>(moveAnimation.moveTo(p2, {} as any as MoveToOptions));

expectType<void>(moveAnimation.moveAlong(line1));
expectType<void>(moveAnimation.moveAlong(line2, {} as any as MoveAlongOptions));

expectType<void>(moveAnimation.startMove());
expectType<void>(moveAnimation.stopMove());
expectType<void>(moveAnimation.pauseMove());
expectType<void>(moveAnimation.resumeMove());
