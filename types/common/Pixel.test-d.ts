import { expectType, expectAssignable } from 'tsd';
import { Pixel, PixelLike } from './Pixel';

const pixel = new Pixel(10, 20);
expectType<Pixel>(pixel);
expectType<Pixel>(new Pixel(10, 20, true));
expectType<Pixel>(new Pixel(10, 20, false));

// property
expectType<number>(pixel.x);
expectType<number>(pixel.y);
expectType<string>(pixel.className);

// methods
expectType<number>(pixel.getX());
expectType<number>(pixel.getY());
expectType<string>(pixel.toString());
expectType<boolean>(pixel.equals(pixel));
expectType<number | null>(pixel.direction());
expectType<Pixel>(pixel.multiplyBy(1));
expectType<Pixel>(pixel.multiplyBy(1, true));
expectType<Pixel>(pixel.multiplyBy(1, false));
expectType<Pixel>(pixel.round());
expectType<Pixel>(pixel.subtract(pixel));
expectType<Pixel>(pixel.subtract(pixel, true));
expectType<Pixel>(pixel.subtract(pixel, false));
expectType<[number, number]>(pixel.toArray());
expectType<[number, number]>(pixel.toJSON());

// PixelLike
expectAssignable<PixelLike>(new Pixel(10, 20));
expectAssignable<PixelLike>([10, 20]);
