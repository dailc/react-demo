# 说明

hello world 组件练习

## 内容

- 搭建好`webpack` + `babel`（`presets-env`） + `react`环境

- 加入`HtmlWebpackPlugin`插件，帮助生成html

- 加入`devServer`以及`inline`模式，可以热部署调试

- 增加`eslint`插件，检查代码规范，类`airbnb`规范（自定义了部分）

## 注意

- 代码中使用了`Rect`时，必须`import React, { ... } from 'react';`，
否则如果没有导出`React`，会报错：`React is not defined`

- `babel-preset-env`结合`babel-preset-react`使用时，配置需如下：（关键点是env单独提取出来了）

```js
{
  "presets": ["react", "env"],
  "env": {
        "targets": {
            "browsers": ["last 2 versions", "ie >= 10"]
            },
        "modules": false
  },
  "plugins": [
    "transform-runtime",
    "syntax-dynamic-import"
  ]
}
```

- 使用`jsx`时的`import`问题，需要在`webpack`的`resolve`中自动补全后缀

```js
 resolve: {
    extensions: ['*', '.js', '.jsx'],
},
```