const {override, fixBabelImports, addLessLoader} = require("customize-cra");

module.exports = override(
    // 使用的 babel-plugin-import
    fixBabelImports("import", {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true // 值应用对应的css
    }),

    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {"@primary-color": "#1DA57A"},
    })
)