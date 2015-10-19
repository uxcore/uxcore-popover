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
        }
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
                <Popover title="测试" overlay={overlay} placement="top" onOk={function() {console.log(this.state)}.bind(this)}>
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
                <h2>Demo 2. 点击弹出 & 内置按钮</h2>
                <Popover title="测试" overlay={overlay} placement="right" trigger="click" showButton={true}>
                    <Button>从右弹出</Button>
                </Popover>
                <h2>Demo 3. 没有标题</h2>
                <Popover overlay={overlay} placement="right">
                    <Button>从右弹出</Button>
                </Popover>
            </div>
        );
    }
};

module.exports = Demo;
