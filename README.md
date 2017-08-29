# tinyjs-plugin-keyboard

> KeyboardManager

## 查看demo

`demo/index.html`

## 引用方法

- 推荐作为依赖使用

  - `npm install tinyjs-plugin-keyboard --save`

- 也可以直接引用线上cdn地址，注意要使用最新的版本号，例如：

  - https://a.alipayobjects.com/g/tiny-plugins/tinyjs-plugin-keyboard/0.0.1/index.js
  - https://a.alipayobjects.com/g/tiny-plugins/tinyjs-plugin-keyboard/0.0.1/index.debug.js

## 起步
首先当然是要引入，推荐`NPM`方式，当然你也可以使用`CDN`或下载独立版本，先从几个例子入手吧！

##### 1、最简单的例子

引用 Tiny.js 源码
``` html
<script src="https://gw.alipayobjects.com/as/g/tiny/tiny/1.1.4/tiny.js"></script>
```
``` js
var Keyboard = require('tinyjs-plugin-keyboard');
// 或者
// import Keyboard from 'tinyjs-plugin-keyboard';

var keySpace = new Keyboard(32);
keySpace.press = function (e) {
  console.log('space pressed!')
}
keySpace.release = function (e) {
  console.log('space released!')
}
```

## 依赖
- `Tiny.js`: [Link](http://tinyjs.net/#/docs/api)

## API文档

TODO
