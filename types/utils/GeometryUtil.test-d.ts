import { expectType } from 'tsd';
import { LngLat, LngLatLike } from '../common/LngLat';
import { Ring } from '../common/Geometry';
import GeometryUtil from './GeometryUtil';

const geometryUtil = {} as any as GeometryUtil;

const p1: LngLatLike = [118, 29];
const p2 = new LngLat(118, 30);

const line1 = [p1, p1, p1, p1, p1];
const line2 = [p2, p2, p2, p2, p2];

const ring1: Ring = [p1, p1, p1, p1, p1];
const ring2: Ring = [p2, p2, p2, p2, p2];

const polygonCoords1 = ring1;
const polygonCoords2 = ring2;
const polygonWithHoleCoords1 = [ring1, ring1];
const polygonWithHoleCoords2 = [ring2, ring2];
const multiPolygonCoords1 = [polygonWithHoleCoords1, polygonWithHoleCoords1];
const multiPolygonCoords2 = [polygonWithHoleCoords2, polygonWithHoleCoords2];

expectType<number>(geometryUtil.distance(p1, p2));
expectType<number>(geometryUtil.distance(p2, p1));

expectType<number>(geometryUtil.ringArea(ring1));
expectType<number>(geometryUtil.ringArea(ring2));

// expectType<number>(geometryUtil.ringAreaByAltitude(ring2));

expectType<boolean>(geometryUtil.isClockwise(ring1));
expectType<boolean>(geometryUtil.isClockwise(ring2));

// TODO: 验证何种输入返回 undefined。函数重载解决问题
expectType<string | undefined>(geometryUtil.typePolygon(polygonCoords1));
expectType<string | undefined>(geometryUtil.typePolygon(polygonCoords2));
expectType<string | undefined>(geometryUtil.typePolygon(polygonWithHoleCoords1));
expectType<string | undefined>(geometryUtil.typePolygon(polygonWithHoleCoords2));
expectType<string | undefined>(geometryUtil.typePolygon(multiPolygonCoords1));
expectType<string | undefined>(geometryUtil.typePolygon(multiPolygonCoords2));

expectType<Ring>(geometryUtil.makesureClockwise(ring1));
expectType<Ring>(geometryUtil.makesureClockwise(ring2));

expectType<Ring>(geometryUtil.makesureAntiClockwise(ring1));
expectType<Ring>(geometryUtil.makesureAntiClockwise(ring2));

expectType<number>(geometryUtil.distanceOfLine(line1));
expectType<number>(geometryUtil.distanceOfLine(line2));

// expectAssignable<number>(geometryUtil.distanceOfLineByAltitude(line2));
expectType<number>(geometryUtil.distanceLineByAltitude(p1, p2));
expectType<number>(geometryUtil.distanceLineByAltitude(p2, p1));

expectType<Array<[number, number]>>(geometryUtil.ringRingClip(ring1, ring2));
expectType<Array<[number, number]>>(geometryUtil.ringRingClip(ring2, ring1));

expectType<boolean>(geometryUtil.doesSegmentsIntersect(p1, p2, p1, p2));
expectType<boolean>(geometryUtil.doesSegmentsIntersect(p2, p1, p2, p1));

expectType<boolean>(geometryUtil.doesSegmentLineIntersect(p1, p2, line1));
expectType<boolean>(geometryUtil.doesSegmentLineIntersect(p2, p1, line2));

expectType<boolean>(geometryUtil.doesSegmentRingIntersect(p1, p2, ring1));
expectType<boolean>(geometryUtil.doesSegmentRingIntersect(p2, p1, ring2));

expectType<boolean>(geometryUtil.doesSegmentPolygonIntersect(p1, p2, polygonWithHoleCoords1));
expectType<boolean>(geometryUtil.doesSegmentPolygonIntersect(p2, p1, polygonWithHoleCoords2));

expectType<boolean>(geometryUtil.doesLineLineIntersect(line1, line2));
expectType<boolean>(geometryUtil.doesLineLineIntersect(line2, line1));

expectType<boolean>(geometryUtil.doesLineRingIntersect(line1, ring1));
expectType<boolean>(geometryUtil.doesLineRingIntersect(line2, ring2));

expectType<boolean>(geometryUtil.doesRingRingIntersect(ring1, ring2));
expectType<boolean>(geometryUtil.doesRingRingIntersect(ring2, ring1));

expectType<boolean>(geometryUtil.pointInRing(p1, ring1));
expectType<boolean>(geometryUtil.pointInRing(p2, ring2, true));

expectType<boolean>(geometryUtil.isPointInRing(p1, ring1));
expectType<boolean>(geometryUtil.isPointInRing(p2, ring2));

expectType<boolean>(geometryUtil.isPointInBbox(p1, [p1, p2]));

expectType<boolean>(geometryUtil.isRingInRing(ring1, ring2));
expectType<boolean>(geometryUtil.isRingInRing(ring2, ring1));

// TODO: isPointInPolygon
// expectType<boolean>(geometryUtil.isPointInPolygon(p1, polygonCoords1));
expectType<boolean>(geometryUtil.isPointInPolygon(p1, multiPolygonCoords1));
expectType<boolean>(geometryUtil.isPointInPolygon(p2, multiPolygonCoords2));

expectType<boolean>(geometryUtil.isPointOnSegment(p1, p1, p1, 0));
expectType<boolean>(geometryUtil.isPointOnSegment(p2, p2, p2, 1));

expectType<boolean>(geometryUtil.isPointOnLine(p1, line1, 0));
expectType<boolean>(geometryUtil.isPointOnLine(p2, line2, 1));

expectType<boolean>(geometryUtil.isPointOnRing(p1, ring1, 0));
expectType<boolean>(geometryUtil.isPointOnRing(p2, ring2, 1));

expectType<boolean>(geometryUtil.isPointOnPolygon(p1, polygonWithHoleCoords1, 0));
expectType<boolean>(geometryUtil.isPointOnPolygon(p2, polygonWithHoleCoords2, 1));

expectType<LngLat>(geometryUtil.closestOnSegment(p1, p1, p1));
expectType<LngLat>(geometryUtil.closestOnSegment(p2, p2, p2));

expectType<LngLat>(geometryUtil.closestOnLine(p1, line1));
expectType<LngLat>(geometryUtil.closestOnLine(p2, line2));

expectType<number>(geometryUtil.distanceToSegment(p1, p1, p1));
expectType<number>(geometryUtil.distanceToSegment(p2, p2, p2));

expectType<number>(geometryUtil.distanceToLine(p1, line1));
expectType<number>(geometryUtil.distanceToLine(p2, line2));
