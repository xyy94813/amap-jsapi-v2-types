import { expectType, expectAssignable } from 'tsd';
import { Size, SizeLike } from './Size';

const size: SizeLike = new Size(10, 20);
expectType<Size>(size);

// property
expectType<number>(size.width);
expectType<number>(size.height);
expectType<string>(size.className);

// method
expectType<number>(size.getWidth());
expectType<number>(size.getHeight());
expectType<string>(size.toString());
expectType<[number, number]>(size.toArray());

// SizeLike
expectAssignable<SizeLike>(new Size(10, 20));
expectAssignable<SizeLike>([10, 20]);
