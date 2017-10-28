/**
 * Popover Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

const Button = require('uxcore-button');
const React = require('react');

const Popover = require('../src');

const test = () => {
  alert('test'); // eslint-disable-line no-alert
};

const onOk = (cb) => {
  cb();
};

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }


  onChange(visible) {
    this.setState({
      visible,
    });
  }

  onVisibleChange(visible) {
    if (!visible) {
      this.setState({
        visible,
      });
    }
  }

  render() {
    const me = this;
    const overlay = (<div>
      <div className="demoContent">
        <span>目标删除后将不可恢复，如有子目标将会删除！</span>
      </div>
    </div>);
    return (
      <div>
        <h2>Demo 1. 悬浮弹出</h2>
        <div style={{ marginLeft: '300px', marginTop: '100px' }}>
          <div style={{ marginLeft: '60px' }}>
            <Popover placement="topLeft" title={'上左'} overlay={overlay} onOk={test}>
              <Button>上左</Button>
            </Popover>
            <Popover placement="top" title={'上边'} overlay={overlay}>
              <Button style="margin-left:10px;">上边</Button>
            </Popover>
            <Popover placement="topRight" title={'上右'} overlay={overlay}>
              <Button style="margin-left:10px;">上右</Button>
            </Popover>
          </div>
          <div style={{ width: '60px', float: 'left' }}>
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
          <div style={{ width: '60px', marginLeft: '270px' }}>
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
          <div style={{ marginLeft: '60px', clear: 'both' }}>
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
        <Popover
          title="您确定要删除该目标吗？"
          overlay={overlay}
          placement="right"
          trigger="click"
          onOk={onOk}
          showButton
        >
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
        <Popover
          overlay={overlay}
          placement="bottom"
          visible={me.state.visible}
          onVisibleChange={me.onVisibleChange.bind(me)}
        >
          <Button onMouseOver={me.onChange.bind(me, true)}>手动控制</Button>
        </Popover>
        <h2>Demo 6. 自定义渲染容器</h2>
        <Popover
          overlay={overlay}
          placement="right"
          getTooltipContainer={() => {
            const div = document.createElement('div');
            div.className = 'custom';
            document.body.appendChild(div);
            return div;
          }}
        >
          <Button>从右弹出</Button>
        </Popover>
      </div>
        );
  }
}

module.exports = Demo;
