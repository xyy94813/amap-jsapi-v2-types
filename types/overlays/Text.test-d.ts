/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import Pixel from '../common/Pixel';
import LngLat from '../common/LngLat';
import MoveAnimation from '../animates/MoveAnimation';
import Map from '../Map';
import {
  TextOptions,
  TextEventType,
  Text,
} from './Text';
import Marker from './Marker';

const p1: [number, number] = [118, 23];
const p2 = new LngLat(119, 23);
const pixel1: [number, number] = [1, 1];
const pixel2 = new Pixel(1, 1);
const mockMap = {} as any as Map;

// TextOptions
expectAssignable<TextOptions>({});

expectAssignable<TextOptions['map']>(mockMap);

expectAssignable<TextOptions['position']>(p1);
expectAssignable<TextOptions['position']>(p2);

expectAssignable<TextOptions['text']>('string');
expectAssignable<TextOptions['content']>('string');
expectAssignable<TextOptions['content']>(document.createElement('div'));
expectAssignable<TextOptions['title']>('title');
expectAssignable<TextOptions['zIndex']>(1);
expectAssignable<TextOptions['offset']>(pixel1);
expectAssignable<TextOptions['offset']>(pixel2);
expectAssignable<TextOptions['style']>({ fontSize: '12vw' });

expectAssignable<TextOptions['direction']>('top');
expectAssignable<TextOptions['direction']>('right');
expectAssignable<TextOptions['direction']>('bottom');
expectAssignable<TextOptions['direction']>('left');
expectAssignable<TextOptions['direction']>('center');

expectAssignable<TextOptions['anchor']>('top-left');
expectAssignable<TextOptions['anchor']>('top-center');
expectAssignable<TextOptions['anchor']>('top-right');
expectAssignable<TextOptions['anchor']>('middle-left');
expectAssignable<TextOptions['anchor']>('center');
expectAssignable<TextOptions['anchor']>('middle-right');
expectAssignable<TextOptions['anchor']>('bottom-left');
expectAssignable<TextOptions['anchor']>('bottom-center');
expectAssignable<TextOptions['anchor']>('bottom-right');
expectAssignable<TextOptions['anchor']>(pixel1);

expectAssignable<TextOptions['angle']>(1);
expectAssignable<TextOptions['visible']>(true);
expectAssignable<TextOptions['clickable']>(true);
expectAssignable<TextOptions['draggable']>(true);
expectAssignable<TextOptions['bubble']>(true);
expectAssignable<TextOptions['zooms']>([2, 18]);
expectAssignable<TextOptions['cursor']>('pointer');
expectAssignable<TextOptions['topWhenClick']>(true);

expectAssignable<TextOptions['extData']>({});
expectAssignable<TextOptions<Record<string, string>>['extData']>({ a: 'a' });
expectError<TextOptions<Record<string, string>>['extData']>({ a: 1 });

// TextEventType
expectAssignable<TextEventType>('click');
expectAssignable<TextEventType>('dblclick');
expectAssignable<TextEventType>('rightclick');
expectAssignable<TextEventType>('mousemove');
expectAssignable<TextEventType>('mouseover');
expectAssignable<TextEventType>('mouseout');
expectAssignable<TextEventType>('mousedown');
expectAssignable<TextEventType>('mouseup');
expectAssignable<TextEventType>('dragstart');
expectAssignable<TextEventType>('dragging');
expectAssignable<TextEventType>('dragend');
expectAssignable<TextEventType>('moving');
expectAssignable<TextEventType>('moveend');
expectAssignable<TextEventType>('movealong');
expectAssignable<TextEventType>('touchend');
expectAssignable<TextEventType>('touchmove');
expectAssignable<TextEventType>('touchstart');

//
const overlay1 = new Text({});
const overlay2 = new Text<Record<string, string>>({});
expectType<Text>(overlay1);
expectAssignable<Marker<any>>(overlay1);
expectAssignable<MoveAnimation>(overlay1);
expectAssignable<Marker<Record<string, string>>>(overlay2);

// properties
expectType<string>(overlay1.CLASS_NAME);

// methods
expectType<string | undefined>(overlay1.getText());
expectType<void>(overlay1.setText('text'));

expectType<void>(overlay1.setStyle({ fontSize: '1.2em' }));
