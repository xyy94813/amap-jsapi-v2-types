/**
 * 鬼知道官方未来会增加什么类型
 * https://lbs.amap.com/api/javascript-api/guide/abc/prepare
 */
export type SecurityConfig = Record<string, any> & {
  /**
   * JSAPI key搭配代理服务器并携带安全密钥转发（安全
   */
  serviceHost?: string;
  /**
   * JSAPI key搭配静态安全密钥以明文设置（不安全，建议开发环境用）：
   */
  securityJsCode?: string;
};

export default SecurityConfig;
