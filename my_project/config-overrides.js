const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  addWebpackAlias
} = require("customizecra");

module.exports = override(
  //按需加载
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  //自定义主题
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primarycolor": "#1DA57A"
    }
  }),
  //ES7装饰器语法
  addDecoratorsLegacy(),
  //配置webpack路径别名
  addWebpackAlias()
);
