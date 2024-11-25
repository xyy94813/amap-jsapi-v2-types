# Changelog

## [1.6.0](https://github.com/xyy94813/amap-jsapi-v2-types/compare/v1.5.0...v1.6.0) (2024-11-22)


### Features

* **MassMarks:** 补充 hide 和 show 声明 ([dc8ef55](https://github.com/xyy94813/amap-jsapi-v2-types/commit/dc8ef5500371a9717f1d455d80b5c547a674e467)), closes [#33](https://github.com/xyy94813/amap-jsapi-v2-types/issues/33)

## [1.5.0](https://github.com/xyy94813/amap-jsapi-v2-types/compare/v1.4.0...v1.5.0) (2024-10-01)


### Features

* **GLCustomLayerOption:** 完善 init 参数类型 ([bda7fb6](https://github.com/xyy94813/amap-jsapi-v2-types/commit/bda7fb67e4152f096b53a3a1cee00d7319bd44fd))
* **Map:** 补全 render 方法 ([efeebed](https://github.com/xyy94813/amap-jsapi-v2-types/commit/efeebed5b1dfe4cbb98537e3812a6cab017e9ea7))

## [1.4.0](https://github.com/xyy94813/amap-jsapi-v2-types/compare/v1.3.4...v1.4.0) (2024-06-23)


### Features

* **labels-layer:** 支持使用范型约束方法的传参和返回值 ([6ff13c1](https://github.com/xyy94813/amap-jsapi-v2-types/commit/6ff13c17b44bf23a8a6a10f23a255fa7d466f6f5))

## [1.3.4](https://github.com/xyy94813/amap-jsapi-v2-types/compare/v1.3.3...v1.3.4) (2024-05-28)


### Bug Fixes

* 类型 MoveAlongOptions 的 easing 属性非必填 ([de91f45](https://github.com/xyy94813/amap-jsapi-v2-types/commit/de91f45930a186fb77be3be4c2842576cbd448e1))
* 类型 MoveToOptions 的 easing 属性非必填 ([33a3af8](https://github.com/xyy94813/amap-jsapi-v2-types/commit/33a3af8eff9015f1ce7520dc7aa9e443535d0280))

## [1.3.3](https://github.com/xyy94813/amap-jsapi-v2-types/compare/v1.3.2...v1.3.3) (2024-05-27)


### Bug Fixes

* 类型 InfoWindow 缺少 extra data 相关方法 ([0f6b7eb](https://github.com/xyy94813/amap-jsapi-v2-types/commit/0f6b7eb837d2276493489591867d31bb7ff19125))

## [1.3.2](https://github.com/xyy94813/amap-jsapi-v2-types/compare/v1.3.1...v1.3.2) (2024-04-17)


### Bug Fixes

* **Map:** mask 的数据类型有误 ([26f3faa](https://github.com/xyy94813/amap-jsapi-v2-types/commit/26f3faa052782957c6ade7bda50e669899d028e9))
* **Map:** 方法 plugin 返回类型错误 ([c2f3d3d](https://github.com/xyy94813/amap-jsapi-v2-types/commit/c2f3d3dd6bcc5bc2d52363918168b3888745c717))
* **Map:** 方法 setRotation 返回类型错误 ([90ccfba](https://github.com/xyy94813/amap-jsapi-v2-types/commit/90ccfba6c36e926f7839f91b39ab0b3d0d4d9aa8))
* **window.AMap:** 工具相关的 API 不存在 window.AMap.GeometryUtil 类型上 ([bd894e1](https://github.com/xyy94813/amap-jsapi-v2-types/commit/bd894e1567b5a3a0488344020c363ce152f08333))
* 未导出 LabelsLayer ([39a14cf](https://github.com/xyy94813/amap-jsapi-v2-types/commit/39a14cf42dc5c8cab1c389daa8c44fcdc7f11351))

## [1.3.1](https://github.com/xyy94813/amap-jsapi-v2-types/compare/v1.3.0...v1.3.1) (2024-03-26)


### Bug Fixes

* **DistrictLayer:** 静态属性命名错误 ([0724a7f](https://github.com/xyy94813/amap-jsapi-v2-types/commit/0724a7fd62f5092dc0ce9d2832ef5757f4670441)), closes [#9](https://github.com/xyy94813/amap-jsapi-v2-types/issues/9)

## [1.3.0](https://github.com/xyy94813/amap-jsapi-v2-types/compare/v1.2.0...v1.3.0) (2024-03-25)


### Features

* **HeatMap:** 支持范型控制 dataset 的具体类型 ([f7f93ba](https://github.com/xyy94813/amap-jsapi-v2-types/commit/f7f93bac80cee30d36714f4e0fa415f8c564115e))
* **Overlay:** getExtData 返回类型调整 ([7f1e727](https://github.com/xyy94813/amap-jsapi-v2-types/commit/7f1e727e520c522399d072113f1ae4cb0738103a))

## [1.2.0](https://github.com/xyy94813/amap-jsapi-v2-types/compare/v1.1.4...v1.2.0) (2024-03-22)


### Features

* **Ellipse:** 补全 Ellipse 的事件类型 ([5ba9f86](https://github.com/xyy94813/amap-jsapi-v2-types/commit/5ba9f86162c9607fac4182e4267e4bea092c3738))
* **Icon:** 移除不存在的类型 ([cf549c1](https://github.com/xyy94813/amap-jsapi-v2-types/commit/cf549c1af5fdc136b5fcfa074a995b726045d8fb))

## [1.1.4](https://github.com/xyy94813/amap-jsapi-v2-types/compare/v1.1.3...v1.1.4) (2024-03-22)


### Bug Fixes

* **MarkerCluster:** 数据结构的 lnglat 类型声明错误 ([3bfea53](https://github.com/xyy94813/amap-jsapi-v2-types/commit/3bfea535747f91915a3938b4e4577d83d4cc7517))
* **MassMarker:** 数据结构的 lnglat 类型声明错误 ([fc7bea4](https://github.com/xyy94813/amap-jsapi-v2-types/commit/fc7bea468cd876db7cf93876fc79d6cbe92eac1f))

## [1.1.3](https://github.com/xyy94813/amap-jsapi-v2-types/compare/v1.1.2...v1.1.3) (2024-03-22)


### Bug Fixes

* **BezierCurve:** 方法类型声明错误 ([fd5ef0b](https://github.com/xyy94813/amap-jsapi-v2-types/commit/fd5ef0b7e6dd69ea87e30a5adcfab7fd92eba975))
* **CircleMarker:** 方法类型声明错误 ([790bbdf](https://github.com/xyy94813/amap-jsapi-v2-types/commit/790bbdf7c3fab9184f7c7473d4bbad19c0ee22d6))
* **InfoWindow:** 方法 setSize 参数声明错误 ([38dace0](https://github.com/xyy94813/amap-jsapi-v2-types/commit/38dace08418c5e6d88f216f3d11603cf1a429d18))
* **Polyline:** 方法 getPath 返回值错误 ([e69daed](https://github.com/xyy94813/amap-jsapi-v2-types/commit/e69daede28e15a9d9774a085f9341cfb87165acb))
* **Rectangle:** 方法 contains 返回值类型错误 ([2279053](https://github.com/xyy94813/amap-jsapi-v2-types/commit/227905385792c053d5c76c578006641fe46b36c2))
* **Text:** 样式类型声明错误 ([22c5f92](https://github.com/xyy94813/amap-jsapi-v2-types/commit/22c5f92242846b1ddad5336b5683e90322442838))

## [1.1.2](https://github.com/xyy94813/amap-jsapi-v2-types/compare/v1.1.1...v1.1.2) (2024-03-21)


### Bug Fixes

* **HeatMap:** setOptions 参数声明错误 ([d77a59e](https://github.com/xyy94813/amap-jsapi-v2-types/commit/d77a59e5bc9b1b81f1f922bdd6bdde98dbc52834))
* **HeatMap:** setzIndex 返回类型错误 ([12dd22e](https://github.com/xyy94813/amap-jsapi-v2-types/commit/12dd22e2d47d840ba95375077ed8dbdb611d78c5))
* **LayerGroup:** removeLayers 参数类型错误 ([f54af8e](https://github.com/xyy94813/amap-jsapi-v2-types/commit/f54af8ec5018a76978edbd12991cee0ae07e545b))
* **MapboxVectorTileLayer:** 构造参数重的 dataZooms 的类型错误 ([5ab4133](https://github.com/xyy94813/amap-jsapi-v2-types/commit/5ab41337aa3cf37a7fc2a1f5afd78cde08adad42))

## [1.1.1](https://github.com/xyy94813/amap-jsapi-v2-types/compare/v1.1.0...v1.1.1) (2024-03-21)


### Bug Fixes

* **BaseLayer:** 部分方法返回值类型错误 ([dbc2f81](https://github.com/xyy94813/amap-jsapi-v2-types/commit/dbc2f81ffa9bd7b752c290411f7710e392250fc3))
* **DistrictLayer:** 静态属性声明错误 ([c67c013](https://github.com/xyy94813/amap-jsapi-v2-types/commit/c67c0135552f3a1501aa486b3accd2e5dca992ad))
* **TileLayer:** 静态属性声明错误 ([d71d337](https://github.com/xyy94813/amap-jsapi-v2-types/commit/d71d33786cc6d048b958d01fa30c20efc25ff8f1))

## [1.1.0](https://github.com/xyy94813/amap-jsapi-v2-types/compare/v1.0.0...v1.1.0) (2024-03-15)


### Features

* 完成 ContextMenu 相关声明 ([4cdd8aa](https://github.com/xyy94813/amap-jsapi-v2-types/commit/4cdd8aa625ec64a36702a9e6c69022e2713d7341))
* 完成 InfoWindow 相关声明 ([ae2f967](https://github.com/xyy94813/amap-jsapi-v2-types/commit/ae2f96746dad4771cbe50f01980b7376af51f8a2))

## 1.0.0 (2024-03-14)


### Features

* **HawkEye:** 完善 HawkEye 文档中未提及的方法 ([c81d447](https://github.com/xyy94813/amap-jsapi-v2-types/commit/c81d4479d75d1cbf74954132e69fa1f9942487c0))
* **Marker:** 完善类型声明 ([9647f0c](https://github.com/xyy94813/amap-jsapi-v2-types/commit/9647f0ce842d49b1202ab784f34fb44790b76ac7))
* **Polygon:** 完善文档中未提及的可配置项 zooms ([eea0961](https://github.com/xyy94813/amap-jsapi-v2-types/commit/eea09611ab0b158972ac3869cdc7435c6e4fe8aa))
* **Polyline:** 完善文档中未提及的可配置项 ([04ad266](https://github.com/xyy94813/amap-jsapi-v2-types/commit/04ad26607acd52ee8da51737c2c2790b28b2b384))
* **RangingTool:** turnOff 方法支持传入 undefined ([19f4ca3](https://github.com/xyy94813/amap-jsapi-v2-types/commit/19f4ca35f99f030768f9b123bf63d82ffb9c8398))
* 完善 AMap 声明 ([2a6ce5d](https://github.com/xyy94813/amap-jsapi-v2-types/commit/2a6ce5d25aee0b61b8d62a09cb12a92ac904b661))
* 完善 SecurityConfig 声明 ([a1a9e00](https://github.com/xyy94813/amap-jsapi-v2-types/commit/a1a9e001b0defd8761bbc390f18ce1189fed843f))
* 完成 GeoJSON 相关声明 ([ec6ac48](https://github.com/xyy94813/amap-jsapi-v2-types/commit/ec6ac486d40d325b46e72914f2999b2ec4780220))
* 完成 LayerGroup 相关声明 ([2f8aed9](https://github.com/xyy94813/amap-jsapi-v2-types/commit/2f8aed9611ee1ba1aa28630134f0a0b741469442))
* 完成 Map 相关声明 ([ab6653b](https://github.com/xyy94813/amap-jsapi-v2-types/commit/ab6653bc35ec19c177b944daa4969236903629c7))
* 完成 OverlayGroup 相关声明 ([8c825fc](https://github.com/xyy94813/amap-jsapi-v2-types/commit/8c825fc04d23bb5ef319cb9657546d76962c79ab))
* 完成地图控件类型声明 ([1e26a57](https://github.com/xyy94813/amap-jsapi-v2-types/commit/1e26a57aafdc02624fae3cdd637fd0e1a1f1df1f))
* 完成基础类型的类型声明 ([45d6362](https://github.com/xyy94813/amap-jsapi-v2-types/commit/45d6362c16e43a1f9a5d98d529f1f9b67d096c8f))
* 完成工具类型声明 ([e648524](https://github.com/xyy94813/amap-jsapi-v2-types/commit/e6485244e43beca53d221a62f91e5ca5f3ecbd67))
* 完成工具类型的类型声明 ([3a667ec](https://github.com/xyy94813/amap-jsapi-v2-types/commit/3a667ec6a602c69aa6d6ed394f59478b3c6ffd03))
* 完成点标记类型声明 ([68652dc](https://github.com/xyy94813/amap-jsapi-v2-types/commit/68652dcb3227fced1dbba653c8f392ad6e70206e))
* 完成矢量图形覆盖物相关声明 ([70c9f48](https://github.com/xyy94813/amap-jsapi-v2-types/commit/70c9f48944b76f17a105b2f0674d634c13eeaa17))
* 完成自有数据图层类型声明 ([3d02630](https://github.com/xyy94813/amap-jsapi-v2-types/commit/3d02630766cf4dbb1a817c08e06864c7f295e7d9))
* 弱化 AMap.plugin 和 map.plugin 类型 ([68fcea4](https://github.com/xyy94813/amap-jsapi-v2-types/commit/68fcea4d82b99475c1ca701776260cacfe5d25b1))
* 抽象出 BoundsLike 类型 ([a37d5f9](https://github.com/xyy94813/amap-jsapi-v2-types/commit/a37d5f9e571340dfb0cfbbf6cb73f6cf73047488))
* 抽象出 PixelLike 类型 ([cb0a235](https://github.com/xyy94813/amap-jsapi-v2-types/commit/cb0a235bb3b7ef898856d2d56f0154b6a9dfa172))
* 抽象出 SizeLike 类型 ([f502465](https://github.com/xyy94813/amap-jsapi-v2-types/commit/f502465e06838ac2f672800afa8b855cecb418a4))
* 核心的官方图层声明 ([94974c2](https://github.com/xyy94813/amap-jsapi-v2-types/commit/94974c274a4507c35db741677a8bf61c09559cc9))
* 调整默认输出 ([eccec8e](https://github.com/xyy94813/amap-jsapi-v2-types/commit/eccec8e89560ed483a3b300d96a5def996409d6e))


### Bug Fixes

* **Circle:** setRadius 方法名错误 ([e2a2c82](https://github.com/xyy94813/amap-jsapi-v2-types/commit/e2a2c8207d4e0c2de82f1545bf6a6ef0789fa826))
* 部分 overlay 范型不应必填 ([9d2dac7](https://github.com/xyy94813/amap-jsapi-v2-types/commit/9d2dac7813a5a80f2e176f1d27032a11b632ddfe))
