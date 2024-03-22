/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import Pixel from '../common/Pixel';
import Size from '../common/Size';
import LngLat from '../common/LngLat';
import Bounds from '../common/Bounds';
import MoveAnimation from '../animates/MoveAnimation';
import { Overlay } from './Overlay';
import {
  LabelMarkerTextOptions,
  LabelMarkerIconOptions,
  LabelMarkerOptions,
  LabelMarkerEventType,
  LabelMarker,
} from './LabelMarker';

const p1: [number, number] = [118, 23];
const p2 = new LngLat(119, 23);
const pixel1: [number, number] = [1, 1];
const pixel2 = new Pixel(1, 1);
const size1: [number, number] = [1, 1];
const size2 = new Size(200, 100);

// LabelMarkerTextOptions
expectAssignable<LabelMarkerTextOptions['content']>('content');
expectAssignable<LabelMarkerTextOptions['direction']>('top');
expectAssignable<LabelMarkerTextOptions['direction']>('right');
expectAssignable<LabelMarkerTextOptions['direction']>('bottom');
expectAssignable<LabelMarkerTextOptions['direction']>('left');
expectAssignable<LabelMarkerTextOptions['direction']>('center');

expectAssignable<LabelMarkerTextOptions['offset']>(pixel1);
expectAssignable<LabelMarkerTextOptions['offset']>(pixel2);
expectAssignable<LabelMarkerTextOptions['zooms']>([1, 20]);

expectAssignable<NonNullable<LabelMarkerTextOptions['style']>['fontSize']>(12);
expectAssignable<NonNullable<LabelMarkerTextOptions['style']>['fillColor']>('red');
expectAssignable<NonNullable<LabelMarkerTextOptions['style']>['strokeColor']>('red');
expectAssignable<NonNullable<LabelMarkerTextOptions['style']>['padding']>('1px');
expectAssignable<NonNullable<LabelMarkerTextOptions['style']>['padding']>([1, 1, 1, 1]);
expectAssignable<NonNullable<LabelMarkerTextOptions['style']>['padding']>(['1px', '2px', '3px', '4px']);
expectAssignable<NonNullable<LabelMarkerTextOptions['style']>['backgroundColor']>('red');
expectAssignable<NonNullable<LabelMarkerTextOptions['style']>['borderColor']>('red');
expectAssignable<NonNullable<LabelMarkerTextOptions['style']>['borderWidth']>(1);
expectAssignable<NonNullable<LabelMarkerTextOptions['style']>['fold']>(true);

// LabelMarkerIconOptions
expectAssignable<LabelMarkerIconOptions['image']>('//a.jpeg');
expectAssignable<LabelMarkerIconOptions['size']>(size1);
expectAssignable<LabelMarkerIconOptions['size']>(size2);
expectAssignable<LabelMarkerIconOptions['offset']>(pixel1);
expectAssignable<LabelMarkerIconOptions['offset']>(pixel2);

expectAssignable<LabelMarkerIconOptions['anchor']>('top-left');
expectAssignable<LabelMarkerIconOptions['anchor']>('top-center');
expectAssignable<LabelMarkerIconOptions['anchor']>('top-right');
expectAssignable<LabelMarkerIconOptions['anchor']>('middle-left');
expectAssignable<LabelMarkerIconOptions['anchor']>('center');
expectAssignable<LabelMarkerIconOptions['anchor']>('middle-right');
expectAssignable<LabelMarkerIconOptions['anchor']>('bottom-left');
expectAssignable<LabelMarkerIconOptions['anchor']>('bottom-center');
expectAssignable<LabelMarkerIconOptions['anchor']>('bottom-right');
expectAssignable<LabelMarkerIconOptions['anchor']>(pixel1);
expectAssignable<LabelMarkerIconOptions['anchor']>(pixel2);

expectAssignable<LabelMarkerIconOptions['clipOrigin']>(pixel1);
expectAssignable<LabelMarkerIconOptions['clipOrigin']>(pixel2);
expectAssignable<LabelMarkerIconOptions['clipSize']>(size1);
expectAssignable<LabelMarkerIconOptions['clipSize']>(size2);

// LabelMarkerOptions
expectAssignable<LabelMarkerOptions>({});
// icon
// text
expectAssignable<LabelMarkerOptions['name']>('marker name');

expectAssignable<LabelMarkerOptions['position']>(p1);
expectAssignable<LabelMarkerOptions['position']>(p2);

expectAssignable<LabelMarkerOptions['zooms']>([1, 1]);
expectAssignable<LabelMarkerOptions['opacity']>(1);
expectAssignable<LabelMarkerOptions['rank']>(1);
expectAssignable<LabelMarkerOptions['zIndex']>(1);
expectAssignable<LabelMarkerOptions['visible']>(true);

expectAssignable<LabelMarkerOptions['text']>({} as any as Required<LabelMarkerTextOptions>);
expectAssignable<LabelMarkerOptions['icon']>({} as any as Required<LabelMarkerIconOptions>);

expectAssignable<LabelMarkerOptions['extData']>({});
expectAssignable<LabelMarkerOptions<Record<string, string>>['extData']>({ a: 'a' });
expectError<LabelMarkerOptions<Record<string, string>>['extData']>({ a: 1 });

// LabelMarkerEventType
// expectAssignable<LabelMarkerEventType>('hide');
// expectAssignable<LabelMarkerEventType>('show');
expectAssignable<LabelMarkerEventType>('click');
// expectAssignable<LabelMarkerEventType>('dblclick');
// expectAssignable<LabelMarkerEventType>('rightclick');
expectAssignable<LabelMarkerEventType>('mousedown');
expectAssignable<LabelMarkerEventType>('mouseup');
expectAssignable<LabelMarkerEventType>('mouseover');
expectAssignable<LabelMarkerEventType>('mouseout');
expectAssignable<LabelMarkerEventType>('touchstart');
expectAssignable<LabelMarkerEventType>('touchmove');
expectAssignable<LabelMarkerEventType>('touchend');

//
const overlay1 = new LabelMarker({});
const overlay2 = new LabelMarker<Record<string, string>>({});
expectType<LabelMarker>(overlay1);
expectAssignable<Overlay<any, LabelMarkerEventType>>(overlay1);
expectAssignable<MoveAnimation>(overlay1);
expectAssignable<Overlay<Record<string, string>, LabelMarkerEventType>>(overlay2);

// methods
expectType<string | undefined>(overlay1.getName());
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
expectType<string>(overlay1.getName()!);
expectType<void>(overlay1.setName('marker name'));
expectType<LngLat>(overlay1.getPosition());
expectType<void>(overlay1.setPosition(p1));
expectType<void>(overlay1.setPosition(p2));
expectType<[number, number]>(overlay1.getZooms());
expectType<void>(overlay1.setZooms([2, 18]));
expectType<number>(overlay1.getOpacity());
expectType<void>(overlay1.setOpacity(1));
expectType<number>(overlay1.getzIndex());
expectType<void>(overlay1.setzIndex(1));
expectType<number>(overlay1.getRank());
expectType<void>(overlay1.setRank(1));
expectType<LabelMarkerTextOptions | null>(overlay1.getText());
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
expectType<LabelMarkerTextOptions >(overlay1.getText()!);
expectType<void>(overlay1.setText({} as any as Required<LabelMarkerTextOptions>));
expectType<LabelMarkerIconOptions | null>(overlay1.getIcon());
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
expectType<LabelMarkerIconOptions>(overlay1.getIcon()!);
expectType<void>(overlay1.setIcon({} as any as Required<LabelMarkerIconOptions>));
expectType<void>(overlay1.setTop(true));
expectType<void>(overlay1.setTop(false));
expectType<boolean>(overlay1.getVisible());
expectType<boolean>(overlay1.getCollision());
expectType<Bounds>(overlay1.getBounds());
