---

## uxcore-popover [![Dependency Status](http://img.shields.io/david/uxcore/uxcore-popover.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-popover) [![devDependency Status](http://img.shields.io/david/dev/uxcore/uxcore-popover.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-popover#info=devDependencies) 

## TL;DR

uxcore-popover ui component for react

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-popover
$ cd uxcore-popover
$ npm install
$ gulp server
```

## Usage

### demo
http://uxcore.github.io/uxcore/components/uxcore-popover/

### API

### props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|overlay|string|required|-|弹窗内容|
|title|string|optional|-|弹窗标题，不传入则没有标题栏|
|placement|string|optional|top|弹窗从那个方向弹出|
|prefixCls|string|optional|kuma-popup|类名前缀，用于定制化|
|trigger|string|optional|hover|触发弹窗的方式，有 hover 和 click 两种|


