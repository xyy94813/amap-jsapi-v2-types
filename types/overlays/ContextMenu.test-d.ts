/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectType } from 'tsd';
import { Event } from '../common/Event';
import LngLat from '../common/LngLat';
import Map from '../Map';
import {
  ContextMenuOptions,
  ContextMenuEventType,
  ContextMenu,
} from './ContextMenu';

const p1: [number, number] = [118, 23];
const p2 = new LngLat(119, 23);
const mockMap = {} as any as Map;

// ContextMenuOptions
expectAssignable<ContextMenuOptions['content']>('string content');
expectAssignable<ContextMenuOptions['content']>(document.createElement('div'));
expectAssignable<ContextMenuOptions['position']>(p1);
expectAssignable<ContextMenuOptions['position']>(p2);

// ContextMenuEventType
expectAssignable<ContextMenuEventType>('open');
expectAssignable<ContextMenuEventType>('close');

//
const contextMenu = new ContextMenu();
expectType<ContextMenu>(contextMenu);
expectAssignable<Event<ContextMenuEventType>>(contextMenu);

// ContextMenu methods
expectType<void>(contextMenu.open(mockMap, p1));
expectType<void>(contextMenu.open(mockMap, p2));

expectType<void>(contextMenu.close());

expectType<void>(contextMenu.addItem('menu item', () => {}, 10));

expectType<void>(contextMenu.removeItem('menu item', () => {}));

expectType<string | HTMLElement>(contextMenu.getContent());

expectType<void>(contextMenu.setContent('string content'));
expectType<void>(contextMenu.setContent(document.createElement('div')));
