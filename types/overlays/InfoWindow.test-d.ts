/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import { Event } from '../common/Event';
import LngLat from '../common/LngLat';
import Pixel from '../common/Pixel';
import Size from '../common/Size';
import Map from '../Map';
import {
  InfoWindowOptions,
  InfoWindowEventType,
  InfoWindow,
} from './InfoWindow';

const p1: [number, number] = [118, 23];
const p2 = new LngLat(119, 23);
const size1: [number, number] = [1, 1];
const size2 = new Size(1, 1);
const pixel1: [number, number] = [1, 1];
const pixel2 = new Pixel(1, 1);
const mockMap = {} as any as Map;

// InfoWindowOptions
expectAssignable<InfoWindowOptions['isCustom']>(true);
expectAssignable<InfoWindowOptions['autoMove']>(true);
expectAssignable<InfoWindowOptions['avoid']>([20, 20, 20, 20]);
expectAssignable<InfoWindowOptions['closeWhenClickMap']>(true);
expectAssignable<InfoWindowOptions['content']>('string content');
expectAssignable<InfoWindowOptions['content']>(document.createElement('div'));
expectAssignable<InfoWindowOptions['size']>(size1);
expectAssignable<InfoWindowOptions['size']>(size2);
expectAssignable<InfoWindowOptions['anchor']>('top-left');
expectAssignable<InfoWindowOptions['anchor']>('top-center');
expectAssignable<InfoWindowOptions['anchor']>('top-right');
expectAssignable<InfoWindowOptions['anchor']>('middle-left');
expectAssignable<InfoWindowOptions['anchor']>('center');
expectAssignable<InfoWindowOptions['anchor']>('middle-right');
expectAssignable<InfoWindowOptions['anchor']>('bottom-left');
expectAssignable<InfoWindowOptions['anchor']>('bottom-center');
expectAssignable<InfoWindowOptions['anchor']>('bottom-right');
expectAssignable<InfoWindowOptions['anchor']>('others new anchor');
expectAssignable<InfoWindowOptions['offset']>(pixel1);
expectAssignable<InfoWindowOptions['offset']>(pixel2);
expectAssignable<InfoWindowOptions['position']>(p1);
expectAssignable<InfoWindowOptions['position']>(p2);

// InfoWindowEventType
expectAssignable<InfoWindowEventType>('open');
expectAssignable<InfoWindowEventType>('close');

//
const infoWindow = new InfoWindow();
const infoWindow2 = new InfoWindow<{ x: string }>();
expectType<InfoWindow>(infoWindow);
expectType<InfoWindow<{ x: string }>>(infoWindow2);
expectAssignable<Event<InfoWindowEventType>>(infoWindow);

// InfoWindow methods
expectType<void>(infoWindow.open(mockMap, p1));
expectType<void>(infoWindow.open(mockMap, p2, 10));

expectType<void>(infoWindow.close());

expectType<boolean>(infoWindow.getIsOpen());

expectType<[number, number]>(infoWindow.getSize());

expectType<void>(infoWindow.setSize(size1));
expectType<void>(infoWindow.setSize(size2));

expectType<string | HTMLElement>(infoWindow.getContent());

expectType<void>(infoWindow.setContent('string content'));
expectType<void>(infoWindow.setContent(document.createElement('div')));

expectType<string>(infoWindow.getAnchor());

expectType<void>(infoWindow.setAnchor('top-left'));
expectType<void>(infoWindow.setAnchor('top-center'));
expectType<void>(infoWindow.setAnchor('top-right'));
expectType<void>(infoWindow.setAnchor('middle-left'));
expectType<void>(infoWindow.setAnchor('center'));
expectType<void>(infoWindow.setAnchor('middle-right'));
expectType<void>(infoWindow.setAnchor('bottom-left'));
expectType<void>(infoWindow.setAnchor('bottom-center'));
expectType<void>(infoWindow.setAnchor('bottom-right'));
expectType<void>(infoWindow.setAnchor('others new anchor'));

expectType<void>(infoWindow.setExtData({}));
expectType<any>(infoWindow.getExtData());
expectType<void>(infoWindow2.setExtData({ x: 'string' }));
expectType<{ x: string }>(infoWindow2.getExtData());
