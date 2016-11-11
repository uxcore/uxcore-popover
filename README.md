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
        <div style={{marginLeft: 60}}>
            <Popover placement="topLeft" title={'上左'} overlay={overlay} onOk={this.test}>
            <Button>上左</Button>
            </Popover>
            <Popover placement="top" title={'上边'} overlay={overlay}>
            <Button>上边</Button>
            </Popover>
            <Popover placement="topRight" title={'上右'} overlay={overlay}>
            <Button>上右</Button>
            </Popover>
        </div>
        <div style={{width: 60, float: 'left'}}>
            <Popover placement="leftTop" title={'左上'} overlay={overlay}>
            <Button>左上</Button>
            </Popover>
            <Popover placement="left" title={'左边'} overlay={overlay}>
            <Button>左边</Button>
            </Popover>
            <Popover placement="leftBottom" title={'左下'} overlay={overlay}>
            <Button>左下</Button>
            </Popover>
        </div>
        <div style={{width: 60, marginLeft: 270}}>
            <Popover placement="rightTop" title={'右上'} overlay={overlay}>
            <Button>右上</Button>
            </Popover>
            <Popover placement="right" title={'右边'} overlay={overlay}>
            <Button>右边</Button>
            </Popover>
            <Popover placement="rightBottom" title={'右下'} overlay={overlay}>
            <Button>右下</Button>
            </Popover>
        </div>
        <div style={{marginLeft: 60, clear: 'both'}}>
            <Popover placement="bottomLeft" title={'下左'} overlay={overlay}>
            <Button>下左</Button>
            </Popover>
            <Popover placement="bottom" title={'下边'} overlay={overlay}>
            <Button>下边</Button>
            </Popover>
            <Popover placement="bottomRight" title={'下右'} overlay={overlay}>
            <Button>下右</Button>
            </Popover>
        </div>
        <h2>Demo 2. 点击弹出</h2>
        <Popover title="测试" overlay={overlay} placement="right" trigger="click">
            <Button>从右弹出</Button>
        </Popover>
        <h2>Demo 3. 没有标题</h2>
        <Popover overlay={overlay} placement="right">
            <Button>从右弹出</Button>
        </Popover>
        <h2>Demo 4. 监听弹窗展开/收起状态</h2>
        <Popover overlay={overlay} placement="bottom" onVisibleChange={me.onVisibleChange.bind(me)}>
             <Button>从下弹出</Button>
        </Popover>
        <h2>Demo 5. 手动控制显示状态</h2>
        <Popover overlay={overlay} placement="bottom" visible={me.state.visible}>
            <Button onMouseOver={me.onChange.bind(me, true)} onMouseLeave={me.onChange.bind(me, false)}>手动控制</Button>
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
|overlayClassName|string|optional|-|弹窗的额外类名|
|visible|boolean|optional|-|是否展开弹窗内容，如果不填则自动处理；填写则需要手动处理|
|title|string|optional|-|弹窗标题，不传入则没有标题栏|
|placement|string|optional|top|弹窗从那个方向弹出|
|prefixCls|string|optional|kuma-popup|类名前缀，用于定制化|
|trigger|string|optional|hover|触发弹窗的方式，有 hover 和 click 两种|
|delay|number|optional|0|hover延迟显示时间，单位ms|
|showButton|boolean|optional|false|是否显示内置按钮|
|onOk|function(hideCallback)|optional|noop|内置的确定按钮的回调，当想要关闭 popover 时需调用 hideCallback|
|onCancel|function|optional|noop|内置的取消按钮的回调|
|okText|string|optional|"确定"|内置的确定按钮显示的文案|
|cancelText|string|optional|"取消"|内置的取消按钮显示的文案|
|onVisibleChange|function(isDisplay)|optional|noop|显示状态发生改变的回调，isDisplay表示弹窗是否展开|


