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
```javascript
let overlay = <div>
                <div className="demoContent">
                    <i className="kuma-icon kuma-icon-information"></i> 
                    <span>你确认要删除此项数据吗？</span>
                </div>
                <div className="demoButton">
                    <Button size="medium">确定</Button>
                    <Button size="medium" color="orange">取消</Button>
                </div>
              </div>;
return (
    <div>
        <h2>Demo 1. 悬浮弹出</h2>
        <Popover title="测试" overlay={overlay} placement="top">
            <Button>从上弹出</Button>
        </Popover>
        <Popover title="测试" overlay={overlay} placement="bottom">
            <Button>从下弹出</Button>
        </Popover>
        <Popover title="测试" overlay={overlay} placement="left">
            <Button>从左弹出</Button>
        </Popover>
        <Popover title="测试" overlay={overlay} placement="right">
            <Button>从右弹出</Button>
        </Popover>
        <h2>Demo 2. 点击弹出</h2>
        <Popover title="测试" overlay={overlay} placement="right" trigger="click">
            <Button>从右弹出</Button>
        </Popover>
        <h2>Demo 3. 没有标题</h2>
        <Popover overlay={overlay} placement="right">
            <Button>从右弹出</Button>
        </Popover>
    </div>
```

### demo
http://uxcore.github.io/uxcore/components/uxcore-popover/

## API

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|overlay|string|required|-|弹窗内容|
|title|string|optional|-|弹窗标题，不传入则没有标题栏|
|placement|string|optional|top|弹窗从那个方向弹出|
|prefixCls|string|optional|kuma-popup|类名前缀，用于定制化|
|trigger|string|optional|hover|触发弹窗的方式，有 hover 和 click 两种|
|showButton|boolean|optional|false|是否显示内置按钮|
|onOk|function|optional|noop|内置的确定按钮的回调|
|onCancel|function|optional|noop|内置的取消按钮的回调|
|okText|string|optional|"确定"|内置的确定按钮显示的文案|
|cancelText|string|optional|"取消"|内置的取消按钮显示的文案|


