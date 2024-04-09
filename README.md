# amap-jsapi-v2-types

高德 JSAPI v2 类型声明文件。

> 不考虑兼容 js api v1 版本。

[![GitHub Repo stars](https://img.shields.io/github/stars/xyy94813/amap-jsapi-v2-types?label=github%20%20stars)](https://github.com/xyy94813/amap-jsapi-v2-types)
[![last commit (branch)](https://img.shields.io/github/last-commit/xyy94813/amap-jsapi-v2-types/main)](https://github.com/xyy94813/amap-jsapi-v2-types)

[![latest version](https://img.shields.io/npm/v/amap-jsapi-v2-types.svg?label=latest%20%20version)](https://www.npmjs.org/package/amap-jsapi-v2-types)
[![License](https://img.shields.io/npm/l/amap-jsapi-v2-types?label=latest%20%20version%20%20license)](https://www.npmjs.org/package/amap-jsapi-v2-types)
[![npm downloads](https://img.shields.io/npm/dm/amap-jsapi-v2-types.svg)](http://npmjs.com/amap-jsapi-v2-types)

## 如何使用

安装：

```sh
yarn add amap-jsapi-v2-types -D
## 或使用 npm/pnpm
```

个人项目扩展声明示例：

```ts
// 将声明文件通过 include/import/typeRoots 等方式引入
// in amap.d.ts
import "amap-jsapi-v2-types";

declare global {
  // ts namespace/interface 会合并声明
  namespace AMap {
    // 目前大多数类型声明，出于避免严格考虑，采用 type 而不是 interface
    // 建议扩展新类型并使用
    export type ExtraMarkerOptions = AMap.MarkerOptions & {
      newProperties: string;
    };
    export class ExtraMarker extends AMap.Marker {
      constructor(opt?: ExtraMarkerOptions);
      newMethod(): void;
    }
  }

  // 对 amap type 做扩展
  namespace AMapUI {
    export type SimpleMarkerOptions = Omit<AMap.MarkerOptions, "content"> & {
      iconTheme?: string;
      iconStyle?: string | object;
      iconLabel?: string | object;
      showPositionPoint?: boolean | object;
      containerClassNames?: string;
    };
  }
}
```

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

## 此项目目标？

[项目目标](https://github.com/xyy94813/amap-jsapi-v2-types/blob/main/TODO.md)

## 如何贡献

[贡献指南](./Contributing.md)

希望承担此项目 Maintainer 的同学可邮箱联系我。

## 变更日志

查看[变更日志](./CHANGELOG.md)

## License

[MIT](./LICENSE)
