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

## staticresource新增

- `file-loader`打包普通文件

- `url-loader`打包图片资源

- `css-loader`打包`css`，但是有可能有时会报这个错误：`Module build failed`

```js
原因是某些css文件被二次压缩时会报错，
需要针对性的剔除二次压缩

譬如针对mui.css时，就会经常出现这个问题

解决方案是正则表达式，剔除一些第三方库，第三方库不进行压缩
```

- `less-loader`打包`less`文件

- 补全css的插件有：`autoprefixer`、`postcss-loader`

- `extract-text-webpack-plugin@next`提取公共的`css`
(注意，webpack4.0中，使用方式变了，必须加`@next`)

- `js`中`import`图片时，需要用`{}`

### 几个loader的作用

- `style-loader`：将css插入到页面的style标签

- `css-loader`：处理css文件中的url()等

- `less-loader`：将less文件编译成css

## router新增

- 新增`react-router-dom`（`Router`、`Route`、`Switch`、`Link`）控制路由跳转

注意，`Link`必须在`Router`中

因涉及到路由改变，请使用：

`npm run dev`查看效果

## redux新增

- 新增`redux`包括三个部分（`store`、`action`、`reducer`）、以及`react-redux`（包括`provider`、`connect`）

- `store`使用了`applyMiddleware`增加中间件`redux-thunk`

`redux-thunk`中间件的作用：

改造`store.dispatch`，使得它可以接收函数作为参数

- 使用了`connect`与`bindActionCreators`

`bindActionCreators`作用是：

通过`dispatch`将`action`包裹起来，
这样可以让通过`bindActionCreators`创建的方法，
直接调用`dispatch(action)`(隐式调用）

而`connect`的作用是：

连接`react`与`redux`，
监听到`store`发生变化，
调用`setState`更新组件，
此时组件的`props`也就跟着变化

注意：

绑定之后，组件中如需更新action只需要：（直接通过`props`可以获取）

```js
this.props.action名('需传递的数据');
```