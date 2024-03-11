import type { Line, Position } from '../common/Geometry';
import LngLat from '../common/LngLat';

export type AnimationCallback = (index?: number, data?: LngLat) => number;

export type EasingCallback = (passedTime?: number) => number;

export type MoveToOptions = {
  /** 每段动画持续时长, 单位：ms */
  duration?: number | AnimationCallback;
  /**
   * 动画速度
   * @deprecated 已废弃
   * */
  speed?: number | AnimationCallback;
  /** easing 时间函数 */
  easing: EasingCallback;
  /** 覆盖物是否沿路径旋转 */
  autoRotation?: boolean;
};

export type MoveAlongOptions = {
  /** 每段动画持续时长, 单位：ms */
  duration?: number | AnimationCallback;
  /**
   * 动画速度
   * @deprecated 已废弃
   * */
  speed?: number | AnimationCallback;
  /** easing 时间函数 */
  easing: EasingCallback;
  /** 是否循环 */
  circlable?: boolean;
  /** 延迟动画时长 */
  delay?: number | AnimationCallback;
  /** 每段完整动画间隔时长 */
  aniInterval: number;
  /** 覆盖物是否沿路径旋转 */
  autoRotation?: boolean;
};

/** 未明确声明 */
export type MoveAlongObj = any;

/**
 *
 * 用于实现点标记沿线段或者路径轨迹移动的动画基类，可用于满足轨迹回放、实时轨迹等场景。
 * MoveAnimation无需单独声明或初始化，Marker、Text、LabelMarker均已继承了 MoveAnimation的实现。
 * https://lbs.amap.com/api/javascript-api-v2/documentation#moveanimation
 */
export interface MoveAnimation {
  /**
   * 以给定时间移动点标记到指定位置，加载 AMap.MoveAnimation 后可以使用
   * @param targetPosition
   * @param opts
   */
  moveTo(targetPosition: Position, opts?: MoveToOptions): void;
  /**
   * 以指定的时长，点标记沿指定的路径移动，加载 AMap.MoveAnimation 后可以使用
   * @param {Line} path
   * @param {MoveAlongOptions} opts
   */
  moveAlong(path: Line, opts?: MoveAlongOptions): void;
  /**
   * 开启点标记动画，加载 AMap.MoveAnimation 后可以使用
   */
  startMove(): void;
  /**
   * 停止点标记动画，加载 AMap.MoveAnimation 后可以使用
   */
  stopMove(): void;
  /**
   * 暂停标注动画，加载 AMap.MoveAnimation 后创建的标注可以使用
   */
  pauseMove(): void;
  /**
   * 重新启动点标记动画，加载 AMap.MoveAnimation 后可以使用
   */
  resumeMove(): void;
}

export default MoveAnimation;
