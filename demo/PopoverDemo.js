/**
 * Popover Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');
let Button = require('uxcore-button');

let Popover = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    test() {
        alert('test');
    }
    onOk( cb ){
        cb()
    }

    onChange(visible) {
        this.setState({
            visible: visible
        })
    }

    onVisibleChange(visible) {
        console.log(visible)
    }

    render() {
        let me = this;
        let overlay = <div>
                        <div className="demoContent">
                            <i className="kuma-icon kuma-icon-information"></i> 
                            <span>你确认要删除此项数据吗？</span>
                        </div>
                      </div>;
        return (
            <div>
                <h2>Demo 1. 悬浮弹出</h2>
                <div style={{marginLeft: 100}}>
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
                </div>
                <h2>Demo 2. 点击弹出 & 内置按钮</h2>
                <Popover title="测试" overlay={overlay} placement="right" trigger="click" onOk={me.onOk} showButton={true}>
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
                <Popover overlay={overlay} placement="bottom" visible={me.state.visible} onVisibleChange={me.onVisibleChange.bind(me)}>
                    <Button onMouseOver={me.onChange.bind(me, true)} onMouseLeave={me.onChange.bind(me, false)}>手动控制</Button>
                </Popover>
            </div>
        );
    }
};

module.exports = Demo;
