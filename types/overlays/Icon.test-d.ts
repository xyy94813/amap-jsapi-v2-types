/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import Size, { SizeLike } from '../common/Size';
import Pixel from '../common/Pixel';
import {
  IconOptions,
  Icon,
} from './Icon';

const size1: [number, number] = [1, 1];
const size2 = new Size(1, 1);
const pixel1: [number, number] = [1, 1];
const pixel2 = new Pixel(1, 1);

// IconOptions
expectAssignable<IconOptions>({});

expectAssignable<IconOptions['image']>('//a.jpeg');
expectAssignable<IconOptions['size']>(size1);
expectAssignable<IconOptions['size']>(size2);
expectAssignable<IconOptions['imageSize']>(size1);
expectAssignable<IconOptions['imageSize']>(size2);
expectAssignable<IconOptions['imageOffset']>(pixel1);
expectAssignable<IconOptions['imageOffset']>(pixel2);

//
const icon = new Icon({});
expectType<Icon>(icon);
expectType<Icon>(new Icon({} as any as IconOptions));
// expectError<Event>(icon); //

// Icon properties
expectType<string>(icon.CLASS_NAME);

// methods
expectType<void>(icon.setImageSize(size1));
expectType<void>(icon.setImageSize(size2));

expectType<[number, number]>(icon.getImageSize());

expectType<void>(icon.setSize(size1));
expectType<void>(icon.setSize(size2));

expectType<SizeLike>(icon.getSize());

expectType<void>(icon.setImageOffset(pixel1));
expectType<void>(icon.setImageOffset(pixel2));

expectType<Pixel>(icon.getImageOffset());

expectType<string>(icon.getImage());

expectType<void>(icon.setImage('//a.jpeg'));

expectType<void>(icon.setOriginSize(size1));
expectType<void>(icon.setOriginSize(size2));

expectType<SizeLike>(icon.getOriginSize());
