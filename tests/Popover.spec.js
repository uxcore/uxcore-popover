import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils, { Simulate } from 'react-dom/test-utils';
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
    component.setState({ ...component.state, visible: true }, () => {
      expect(component.state.visible).equal(true);
      component.handleOkClick();
      component.handleCancelClick();
      setTimeout(() => {
        expect(onVisibleChangeCalled).equal(true);
        expect(onCancleCalled).equal(true);
        expect(onOkCalled).equal(true);
      }, 200);
      component.componentWillReceiveProps({...props, visible: true});
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
    const component = TestUtils.renderIntoDocument(
      <Popover placement="right" title={'右边'} overlay={overlay}
        onCancle = {() => {onCancleCalled = true}}
        onVisibleChange = {() => {onVisibleChangeCalled = true}}
        onOk = {(cb) => {
          cb();
          onOkCalled = true;
        }}>
        <span>右边</span>
      </Popover>
    );
    expect(component.state.visible).equal(false);
    component.componentWillReceiveProps({visible: true});
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