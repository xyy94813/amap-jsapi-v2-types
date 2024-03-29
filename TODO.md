# 里程碑

## 里程碑 1

- 同步高德 JS SDK v2 文档，除了服务类的所有类型声明
  - [x] 基础类
    - [x] Pixel
    - [x] Size
    - [x] LngLat
    - [x] Bounds
    - [x] Event
    - [x] Map
  - [x] 图层
    - [x] 官方图层
      - [x] TileLayer
      - [x] TileLayer.Satellite
      - [x] TileLayer.RoadNet
      - [x] TileLayer.Traffic
      - [x] Buildings
      - [x] DistrictLayer
      - [x] IndoorMap
    - [x] 自有数据图层
      - [x] HeatMap
      - [x] VectorLayer
      - [x] LabelsLayer
      - [x] CustomLayer
      - [x] TileLayer.Flexible
      - [x] ImageLayer
      - [x] CanvasLayer
      - [x] GLCustomLayer
    - [x] 行业标准图层
      - [x] TileLayer.WMS
      - [x] TileLayer.WMTS
      - [x] MapboxVectorTileLayer
    - [x] LayerGroup
  - [x] 覆盖物
    - [x] Marker
    - [x] Text
    - [x] Icon
    - [x] LabelMarker
    - [x] ElasticMarker
    - [x] MarkerCluster
    - [x] MassMarks
    - [x] Polygon
    - [x] Polyline
    - [x] BezierCurve
    - [x] Circle
    - [x] CircleMarker
    - [x] Ellipse
    - [x] Rectangle
    - [x] GeoJSON
    - [x] OverlayGroup
  - [x] 地图控件
    - [x] Control
    - [x] Scale
    - [x] ToolBar
    - [x] ControlBar
    - [x] MapType
    - [x] HawkEye
  - [x] 工具类
    - [x] RangingTool
    - [x] MouseTool
    - [x] PolygonEditor
    - [x] PolylineEditor
    - [x] CircleEditor
    - [x] BezierCurveEditor
    - [x] EllipseEditor
    - [x] RectangleEditor
  - [x] 通用库
    - [x] GeometryUtil
    - [x] DomUtil
    - [x] Browser
    - [x] Util
  - [x] 其它配置
    - [x] \_AMapSecurityConfig
- [x] CI/CD 自动部署及 ChangeLog

## 里程碑 2

- [x] 完成类型声明的单元测试
  - [x] 基础类
  - [x] 图层
    - [x] 官方图层
    - [x] 自有数据图层
    - [x] 行业标准图层
    - [x] LayerGroup
  - [x] 覆盖物
  - [x] 地图控件
  - [x] 工具类
  - [x] 通用库
  - [x] 其它配置
    - [x] \_AMapSecurityConfig
- [x] 提供类型关系图

## 里程碑 3

- [ ] 服务类（建议有能力的公司做一个应用服务做隔离及缓存减少流量消耗。做成开源产品更好。）
  - [ ] 基础服务类
    - [ ] WebService
    - [ ] WebServiceCallback
  - [ ] 搜索
    - [ ] AutoComplete
    - [ ] AutoCompleteSearchCallback
    - [ ] PlaceSearch
    - [ ] searchCallback
    - [ ] CloudDataSearch
    - [ ] CloudDataSearchCallback
  - [ ] 地理编码
    - [ ] Geocoder
    - [ ] GeocoderCallback
    - [ ] ReGeocoderCallback
    - [ ] convertFrom
  - [ ] 路线规划
    - [ ] Driving
    - [ ] DrivingCallback
    - [ ] DrivingResult
    - [ ] DriveStepBasic
    - [ ] DriveStepDetail
    - [ ] TruckDriving
    - [ ] Walking
    - [ ] WalkingCallback
    - [ ] WalkingResult
    - [ ] Transfer
    - [ ] TransferCallback
    - [ ] TransferResult
    - [ ] Riding
    - [ ] RidingCallback
    - [ ] RidingResult
    - [ ] DragRoute
    - [ ] DragRouteTruck
    - [ ] GraspRoad
    - [ ] GraspRoadCallback
  - [ ] 其他服务
    - [ ] DistrictSearch
    - [ ] Weather
    - [ ] WeatherLiveResult
    - [ ] WeatherForecastResult
    - [ ] StationSearch
    - [ ] LineSearch
  - [ ] 定位
    - [ ] Geolocation
    - [ ] GeolocationCallBack
    - [ ] GeolocationResult
    - [ ] CitySearch
- [ ] loca-v2 类型声明
- [ ] AMapUI 类型声明
