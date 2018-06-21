import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils, { Simulate } from 'react-dom/test-utils';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Popover from '../src';

describe('Popover', () => {

  it('Could be rendered without overlay and with visiable true', function () {
    const component = TestUtils.renderIntoDocument(
      <Popover
        placement="right"
        title={'右边'}
        prefixCls="unit-test"
        showButton={true}
        visible={true}
      >
        <span className="overlay-inner-text">右边</span>
      </Popover>
    );
    expect(component.state.visible).equal(true);
  });

  it('Could be rendered with visiable false', function () {
    let onCancleCalled = false;
    let onVisibleChangeCalled = false;
    let onOkCalled = false;
    const props = {
      placement: 'right',
      title: '右边',
      prefixCls: 'unit-test',
      showButton: true,
      visible: false,
      onCancle: () => {onCancleCalled = true},
      onVisibleChange: () => {onVisibleChangeCalled = true},
      onOk: (cb) => {
        cb();
        onOkCalled = true;
      }
    };
    const component = TestUtils.renderIntoDocument(
      <Popover
        {...props}
      >
        <span className="overlay-inner-text">右边</span>
      </Popover>
    );
    expect(component.state.visible).equal(false);
    // console.log(component.constructor.getDerivedStateFromProps({...props, visible: true}))
    component.setState({ ...component.state, visible: true }, () => {
      setTimeout(() => {
        expect(component.state.visible).equal(true);
      }, 0)
      component.handleOkClick();
      component.handleCancelClick();
      setTimeout(() => {
        expect(onVisibleChangeCalled).equal(true);
        expect(onCancleCalled).equal(true);
        expect(onOkCalled).equal(true);
      }, 0);
      component.constructor.getDerivedStateFromProps({...props, visible: true}, {})
    });
  });

  it('Could be rendered with overlay without visiable', function () {
    let onCancleCalled = false;
    let onVisibleChangeCalled = false;
    let onOkCalled = false;
    const overlay = (<div>
      <div className="demoContent">
        <span>目标删除后将不可恢复，如有子目标将会删除！</span>
      </div>
    </div>);
    const props = {
      placement: "right",
      title: '右边',
      overlay: overlay,
      onCancle:  () => { onCancleCalled = true },
      onVisibleChange: () => { onVisibleChangeCalled = true },
      onOk: (cb) => {
        cb();
        onOkCalled = true;
      }
    }
    const component = TestUtils.renderIntoDocument(
      <Popover
        {...props}
      >
        <span>右边</span>
      </Popover>
    );
    expect(component.state.visible).equal(false);
    component.constructor.getDerivedStateFromProps({...props, visible: true}, {});
    component.handleOkClick();
    component.handleCancelClick();
    component.handleVisibleChange();
    setTimeout(() => {
      expect(onVisibleChangeCalled).equal(true);
      expect(onCancleCalled).equal(true);
      expect(onOkCalled).equal(true);
    }, 200);
  });

});