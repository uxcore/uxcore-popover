/**
 * Popover Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');
let {Button, ButtonGroup} = require('uxcore-button');

let Popover = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
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
        );
    }
};

module.exports = Demo;
