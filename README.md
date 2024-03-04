# amap-jsapi-v2-types

高德 JSAPI v2 类型声明文件。

> 不考虑兼容 js api v1 版本。

[![GitHub Repo stars](https://img.shields.io/github/stars/xyy94813/amap-jsapi-v2-types?label=github%20%20stars)](https://github.com/xyy94813/amap-jsapi-v2-types)
[![last commit (branch)](https://img.shields.io/github/last-commit/xyy94813/amap-jsapi-v2-types/main)](https://github.com/xyy94813/amap-jsapi-v2-types)

<!--
[![latest version](https://img.shields.io/npm/v/amap-jsapi-v2-types.svg?label=latest%20%20version)](https://www.npmjs.org/package/amap-jsapi-v2-types)
[![License](https://img.shields.io/npm/l/amap-jsapi-v2-types?label=latest%20%20version%20%20license)](https://www.npmjs.org/package/amap-jsapi-v2-types)
[![npm downloads](https://img.shields.io/npm/dm/amap-jsapi-v2-types.svg)](http://npmjs.com/amap-jsapi-v2-types)
[![minimized gzipped size](https://img.shields.io/bundlejs/size/amap-jsapi-v2-types)](http://npmjs.com/amap-jsapi-v2-types)
-->

## 项目产生的原因

- 当下高德 jsapi 类型声明库五花八门，且官方库基本处于 0 成本维护状态 + 低质量。
- DefinitelyTyped 下类型声明缺少专人维护，缺少统一的管理计划。
- `@uiw/react-amap-types` 质量较高，但是随着其提供的 react 组件增加声明

其他库：

- @amap/amap-jsapi-types
- @vuemap/amap-jsapi-types
- DefinitelyTyped/types/amap-js-api
- DefinitelyTyped/types/amap-js-sdk
- @uiw/react-amap-types

## 目标

1. 完整同步高德 js api 文档，全量包含
2. 包含 AMapUI、LUCA 等相关声明

> 不考虑 deno/ts-node 使用场景，声明文件做作为开发阶段依赖项，没必要分开打包管理
> 减少的下载优化成本远小于项目的管理成本

## 如何贡献

[贡献指南](./Contributing.md)

希望承担此项目 Maintainer 的同学可邮箱联系我。

<!-- ## Changelog -->

<!-- TODO -->

## License

[MIT](./LICENSE)
