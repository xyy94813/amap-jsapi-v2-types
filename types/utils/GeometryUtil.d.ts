import type { LngLat, LngLatLike } from '../common/LngLat.d';
import type {
  Position,
  Line,
  Ring,
  PolygonCoords,
  MultiPolygonCoords,
} from '../common/Geometry.d';

export interface GeometryUtil {
  /**
   * 计算两个经纬度点之间的实际距离。单位：米
   *
   * @param {Position} p1
   * @param {Position} p2
   * @returns {number}
   */
  distance(p1: Position, p2: Position): number;
  /**
   * 计算一个经纬度路径围成区域的实际面积。单位：平米
   *
   * @param {Ring[]} ring
   * @returns {number}
   */
  ringArea(ring: Ring): number;
  /**
   * 计算一个带有绝对海拔的经纬度高度路径围成区域的实际面积。单位：平米
   * @warning 文档中存在，但是实际验证未发现
   *
   * @param {number} averageAltitude
   * @returns {number}
   */
  ringAreaByAltitude(averageAltitude: number): number;
  /**
   * 判断一个经纬度路径是否为顺时针
   *
   * @param {Ring} ring
   * @returns {boolean}
   */
  isClockwise(ring: Ring): boolean;
  /**
   * 判断一个经纬度路径面类型，Polygon or MultiPolygon。
   * 官方文档有误。
   * 该函数不基于 GeoJSON 中的 polygon 逻辑，未判断第一个和最后一个点是否一致。
   *
   * @param {Ring} ring
   * @returns {boolean}
   */
  typePolygon(coords: PolygonCoords | MultiPolygonCoords): string | undefined;
  /**
   * 将一个路径变为顺时针
   * @param {Ring} ring
   * @returns {Ring}
   */
  makesureClockwise(ring: Ring): typeof ring;
  /**
   * 将一个路径变为逆时针
   *
   * @param {Ring} ring
   * @returns {Ring}
   */
  makesureAntiClockwise(ring: Ring): typeof ring;
  /**
   * 计算一个经纬度路径的实际长度。单位：米
   *
   * @param {Ring} ring
   * @returns {number}
   */
  distanceOfLine(ring: Ring): number;

  /**
   * 计算一个经纬度带绝对海报高度路径的实际长度。单位：米
   * @warning 文档中存在，但是实际验证未发现
   *
   * @param {Ring} ring
   * @returns {number}
   */
  distanceOfLineByAltitude(ring: Ring): number;
  /**
   * 计算一个经纬度带绝对海报高度两点空间距离的实际长度。单位：米
   * @warning 文档中存在，但是实际验证未发现. 且文档描述存在明显错误
   *
   * @param {LngLatLike} p1
   * @param {LngLatLike} p2
   * @returns {number}
   */
  distanceLineByAltitude(p1: LngLatLike, p2: LngLatLike): number;
  /**
   * 计算两个经纬度面的交叉区域
   *
   * @param {Ring} ring1
   * @param {Ring} ring2
   * @returns {Array<[number, number]>} 交叉区域
   */
  ringRingClip(ring1: Ring, ring2: Ring): Array<[number, number]>;
  /**
   * 判断两个线段是否相交
   *
   * @param {Position} p1
   * @param {Position} p2
   * @param {Position} p3
   * @param {Position} p4
   * @returns {boolean}
   */
  doesSegmentsIntersect(
    p1: Position,
    p2: Position,
    p3: Position,
    p4: Position,
  ): boolean;
  /**
   * 判断线段和一个路径是否相交
   *
   * @param {Position} p1
   * @param {Position} p2
   * @param {Line} line
   * @returns {boolean}
   */
  doesSegmentLineIntersect(p1: Position, p2: Position, line: Line): boolean;
  /**
   *
   * 判断线段和一个环是否相交
   * @param {Position} p1
   * @param {Position} p2
   * @param {Line} ring
   * @returns {boolean}
   */
  doesSegmentRingIntersect(p1: Position, p2: Position, ring: Ring): boolean;
  /**
   * 判断线段和多个环是否相交
   *
   * @param {Position} p1
   * @param {Position} p2
   * @param {Ring[]} rings
   * @returns {boolean}
   */
  doesSegmentPolygonIntersect(
    p1: Position,
    p2: Position,
    rings: Ring[],
  ): boolean;
  /**
   * 判断两个经纬度路径是否相交
   *
   * @param {Line} line
   * @param {Line} line
   * @returns {boolean}
   */
  doesLineLineIntersect(line1: Line, line2: Line): boolean;
  /**
   * 判断经纬度路径和经纬度面是否交叉
   *
   * @param {Line} line
   * @param {Ring} ring
   * @returns {boolean}
   */
  doesLineRingIntersect(line: Line, ring: Ring): boolean;
  /**
   * 判断两个经纬度面是否交叉
   *
   * @param {Ring} ring1
   * @param {Ring} ring2
   * @returns {boolean}
   */
  doesRingRingIntersect(ring1: Ring, ring2: Ring): boolean;
  /**
   * 判断点是否在环内
   *
   * @param {Position} p
   * @param {Ring} ring
   * @param {Ring} ignoreBoundary 文档中未提及
   * @returns {boolean}
   */
  pointInRing(pt: Position, ring: Ring, ignoreBoundary?: boolean): boolean;
  /**
   * 判断点是否在环内
   *
   * @param {Position} p
   * @param {Ring} ring
   * @returns {boolean}
   */
  isPointInRing(p: Position, ring: Ring): boolean;
  /**
   * 判断点是否在 b-box 内
   * @warning 与文档不一致，文档说明有误
   * @param {Position} p
   * @param {Position[]} bbox
   * @returns {boolean}
   */
  isPointInBbox(p: Position, bbox: Position[]): boolean;
  /**
   * 判断环是否在另一个环内
   *
   * @param {Ring} ring1
   * @param {Ring} ring2
   * @returns {boolean}
   */
  isRingInRing(ring1: Ring, ring2: Ring): boolean;
  /**
   * 判断点是否在多个环组成区域内
   * @warning 文档说明不清晰，实际验证，p 在 MultiPolygon 的 hole 内时返回 true。此处声明暂时保持与官方一致。
   *
   * @param {LngLatLike} p
   * @param {LngLatLike[][][]} rings
   * @returns {boolean}
   */
  isPointInPolygon(p: LngLatLike, rings: LngLatLike[][][]): boolean;
  /**
   * 判断点是否在带洞多多边型内
   * @warning 文档说明不清晰。此处声明暂时保持与官方一致。
   *
   * @param {LngLatLike} p
   * @param {LngLatLike[][][][]} rings
   * @returns {boolean}
   */
  isPointInPolygons(p: LngLatLike, rings: LngLatLike[][][][]): boolean;
  /**
   * 判断P1是否在P2P3上，tolerance为误差范围
   *
   * @param {Position} p1
   * @param {Position} p2
   * @param {Position} p3
   * @param {number} tolerance 误差范围
   * @returns {boolean} true/false
   */
  isPointOnSegment(
    p1: Position,
    p2: Position,
    p3: Position,
    tolerance: number,
  ): boolean;
  /**
   * 判断P是否在line上，tolerance为误差范围
   *
   * @param {LngLatLike} p
   * @param {LngLatLike[]} line
   * @param {number} tolerance 误差范围
   * @returns {boolean}
   */
  isPointOnLine(p: Position, line: Line, tolerance: number): boolean;
  /**
   * 判断P是否在ring的边上，tolerance为误差范围
   *
   * @param {Position} p
   * @param {Ring} ring
   * @param {number} tolerance 误差范围
   * @returns {boolean}
   */
  isPointOnRing(p: Position, ring: Ring, tolerance: number): boolean;
  /**
   * 判断P是否在多个ring的边上，tolerance为误差范围
   * @warning 文档说明不清晰，保持与官方声明文件一致
   *
   * @param {Position} p
   * @param {Ring[]} rings
   * @param {number} tolerance 误差范围
   * @returns {boolean}
   */
  isPointOnPolygon(p: LngLatLike, rings: Ring[], tolerance: number): boolean;
  /**
   * 计算P2P3上距离P1最近的点。计算垂直交点。
   *
   * @param {Position} p1
   * @param {Position} p2
   * @param {Position} p3
   * @returns {LngLat}
   */
  closestOnSegment(p1: Position, p2: Position, p3: Position): LngLat;
  /**
   * 计算line上距离P最近的点
   *
   * @param {Position} p
   * @param {Line} line
   * @returns {LngLat}
   */
  closestOnLine(p: Position, line: Line): LngLat;
  /**
   * 计算P2P3到P1的距离。单位：米
   *
   * @param {Position} p1
   * @param {Position} p2
   * @param {Position} p3
   * @returns {number}
   */
  distanceToSegment(p1: Position, p2: Position, p3: Position): number;
  /**
   * 计算P到line的距离。单位：米
   *
   *
   * @param {Position} p
   * @param {Line} line
   * @returns {number}
   */
  distanceToLine(p: Position, line: Line): number;
}

export default GeometryUtil;
