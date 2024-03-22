/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import Pixel from '../common/Pixel';
import Size from '../common/Size';
import LngLat from '../common/LngLat';
import Bounds from '../common/Bounds';
import MoveAnimation from '../animates/MoveAnimation';
import Map from '../Map';
import { Overlay } from './Overlay';
import Icon from './Icon';
import {
  MarkerLabelOptions,
  MarkerOptions,
  MarkerEventType,
  Marker,
} from './Marker';

const p1: [number, number] = [118, 23];
const p2 = new LngLat(119, 23);
const pixel1: [number, number] = [1, 1];
const pixel2 = new Pixel(1, 1);
const size1: [number, number] = [1, 1];
const size2 = new Size(200, 100);
const mockMap = {} as any as Map;

// MarkerLabelOptions
expectAssignable<MarkerLabelOptions['content']>(('string'));
expectAssignable<MarkerLabelOptions['content']>((document.createElement('div')));
expectAssignable<MarkerLabelOptions['direction']>('top');
expectAssignable<MarkerLabelOptions['direction']>('right');
expectAssignable<MarkerLabelOptions['direction']>('bottom');
expectAssignable<MarkerLabelOptions['direction']>('left');
expectAssignable<MarkerLabelOptions['direction']>('center');
expectAssignable<MarkerLabelOptions['offset']>(pixel1);
expectAssignable<MarkerLabelOptions['offset']>(pixel2);

// MarkerOptions
expectAssignable<MarkerOptions>({});

expectAssignable<MarkerOptions['map']>(mockMap);

expectAssignable<MarkerOptions['position']>(p1);
expectAssignable<MarkerOptions['position']>(p2);

//
expectAssignable<MarkerOptions['content']>('string');
expectAssignable<MarkerOptions['content']>(document.createElement('div'));
expectAssignable<MarkerOptions['title']>('title');
expectAssignable<MarkerOptions['zIndex']>(1);
expectAssignable<MarkerOptions['offset']>(pixel1);
expectAssignable<MarkerOptions['offset']>(pixel2);

expectAssignable<MarkerOptions['anchor']>('top-left');
expectAssignable<MarkerOptions['anchor']>('top-center');
expectAssignable<MarkerOptions['anchor']>('top-right');
expectAssignable<MarkerOptions['anchor']>('middle-left');
expectAssignable<MarkerOptions['anchor']>('center');
expectAssignable<MarkerOptions['anchor']>('middle-right');
expectAssignable<MarkerOptions['anchor']>('bottom-left');
expectAssignable<MarkerOptions['anchor']>('bottom-center');
expectAssignable<MarkerOptions['anchor']>('bottom-right');
expectAssignable<MarkerOptions['anchor']>(pixel1);

expectAssignable<MarkerOptions['angle']>(1);
expectAssignable<MarkerOptions['visible']>(true);
expectAssignable<MarkerOptions['clickable']>(true);
expectAssignable<MarkerOptions['draggable']>(true);
expectAssignable<MarkerOptions['bubble']>(true);
expectAssignable<MarkerOptions['zooms']>([2, 18]);
expectAssignable<MarkerOptions['cursor']>('pointer');
expectAssignable<MarkerOptions['topWhenClick']>(true);
expectAssignable<MarkerOptions['height']>(1);

expectAssignable<MarkerOptions['size']>(size1);
expectAssignable<MarkerOptions['size']>(size2);

expectAssignable<MarkerOptions['label']>({} as any as Required<MarkerLabelOptions>);

expectAssignable<MarkerOptions['icon']>('//a.jpeg');
expectAssignable<MarkerOptions['icon']>(new Icon({}));

expectAssignable<MarkerOptions['extData']>({});
expectAssignable<MarkerOptions<Record<string, string>>['extData']>({ a: 'a' });
expectError<MarkerOptions<Record<string, string>>['extData']>({ a: 1 });

// MarkerEventType
expectAssignable<MarkerEventType>('click');
expectAssignable<MarkerEventType>('dblclick');
expectAssignable<MarkerEventType>('rightclick');
expectAssignable<MarkerEventType>('mousemove');
expectAssignable<MarkerEventType>('mouseover');
expectAssignable<MarkerEventType>('mouseout');
expectAssignable<MarkerEventType>('mousedown');
expectAssignable<MarkerEventType>('mouseup');
expectAssignable<MarkerEventType>('dragstart');
expectAssignable<MarkerEventType>('dragging');
expectAssignable<MarkerEventType>('dragend');
expectAssignable<MarkerEventType>('moving');
expectAssignable<MarkerEventType>('moveend');
expectAssignable<MarkerEventType>('movealong');
expectAssignable<MarkerEventType>('touchend');
expectAssignable<MarkerEventType>('touchmove');
expectAssignable<MarkerEventType>('touchstart');

//
const overlay1 = new Marker({});
const overlay2 = new Marker<Record<string, string>>({});
expectType<Marker>(overlay1);
expectAssignable<Overlay<any, MarkerEventType>>(overlay1);
expectAssignable<MoveAnimation>(overlay1);
expectAssignable<Overlay<Record<string, string>, MarkerEventType>>(overlay2);

// properties
expectType<string>(overlay1.CLASS_NAME);

// methods
expectType<LngLat | null>(overlay1.getPosition());
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
expectType<LngLat>(overlay1.getPosition()!);

expectType<void>(overlay1.setPosition(p1));
expectType<void>(overlay1.setPosition(p2));

expectType<string | undefined>(overlay1.getTitle());
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
expectType<string>(overlay1.getTitle()!);

expectType<void>(overlay1.setTitle('title'));

expectType<string | Icon | undefined>(overlay1.getIcon());

expectType<void>(overlay1.setIcon('//icon.webp'));
expectType<void>(overlay1.setIcon(new Icon({})));

expectType<MarkerLabelOptions>(overlay1.getLabel());

expectType<void>(overlay1.setLabel({} as any as Required<MarkerLabelOptions>));

expectType<boolean>(overlay1.getClickable());

expectType<void>(overlay1.setClickable());
expectType<void>(overlay1.setClickable(true));

expectType<boolean>(overlay1.getDraggable());

expectType<void>(overlay1.setDraggable(true));

expectType<boolean>(overlay1.getTop());

expectType<void>(overlay1.setTop(true));

expectType<string>(overlay1.getCursor());

expectType<void>(overlay1.setCursor('pointer'));

expectType<string | [number, number] | undefined>(overlay1.getAnchor());

expectType<void>(overlay1.setAnchor('top-left'));
expectType<void>(overlay1.setAnchor('top-center'));
expectType<void>(overlay1.setAnchor('top-right'));
expectType<void>(overlay1.setAnchor('middle-left'));
expectType<void>(overlay1.setAnchor('center'));
expectType<void>(overlay1.setAnchor('middle-right'));
expectType<void>(overlay1.setAnchor('bottom-left'));
expectType<void>(overlay1.setAnchor('bottom-center'));
expectType<void>(overlay1.setAnchor('bottom-right'));
expectType<void>(overlay1.setAnchor(pixel1));

expectType<Pixel>(overlay1.getOffset());
expectType<void>(overlay1.setOffset(pixel1));
expectType<void>(overlay1.setOffset(pixel2));

expectType<number>(overlay1.getAngle());
expectType<void>(overlay1.setAngle(1));

expectType<[number, number]>(overlay1.getSize());

expectType<void>(overlay1.setSize(size1));
expectType<void>(overlay1.setSize(size2));

expectType<number | undefined>(overlay1.getzIndex());
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
expectType<number>(overlay1.getzIndex()!);

expectType<void>(overlay1.setzIndex(1));

expectType<string | HTMLElement | undefined>(overlay1.getContent());

expectType<void>(overlay1.setContent());
expectType<void>(overlay1.setContent('string'));
expectType<void>(overlay1.setContent(document.createElement('div')));

expectType<Bounds>(overlay1.getBounds());

expectType<void>(overlay1.remove());

expectType<number>(overlay1.getHeight());
