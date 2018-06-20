/**
 * Popover Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import Tooltip from 'rc-tooltip';
import Button from 'uxcore-button';
import PropTypes from 'prop-types';

class Popover extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: 'visible' in props ? props.visible : false,
    };
  }

  static getDerivedStateFromProps(props, states) {
    if (('visible' in props) && props.visible !== states.visible) {
      return {
        visible: props.visible
      }
    }
    return null
  }

  handleOkClick() {
    const me = this;
    me.props.onOk(() => {
      if (!('visible' in me.props)) {
        me.setState({
          visible: false,
        });
      }
    });
  }

  handleCancelClick() {
    const me = this;

    if (!('visible' in me.props)) {
      me.setState({
        visible: false,
      }, () => {
        me.props.onCancel();
      });
    } else {
      me.props.onCancel();
    }
  }

  handleVisibleChange(visible) {
    console.log(111)
    const me = this;
    if (!('visible' in me.props)) {
      me.setState({
        visible,
      }, () => {
        me.props.onVisibleChange(visible);
      });
    } else {
      me.props.onVisibleChange(visible);
    }
  }

  generateOverlay() {
    const me = this;
    const arr = [];
    if (me.props.title) {
      arr.push(<div key="title" className={`${me.props.prefixCls}-title`}>
        {me.props.title}
      </div>);
    }
    if (me.props.overlay) {
      arr.push(<div key="content" className={`${me.props.prefixCls}-content`}>
        {me.props.overlay}
        {me.renderButton()}
      </div>);
    }
    return (<div>
      {arr}
    </div>);
  }

  renderButton() {
    const me = this;
    if (me.props.showButton) {
      return (<div className={`${me.props.prefixCls}-button-group`}>
        <Button
          size="small" type="secondary" onClick={me.handleCancelClick.bind(me)}
        >{me.props.cancelText}</Button>
        <Button
          size="small" type="primary" onClick={me.handleOkClick.bind(me)}
        >{me.props.okText}</Button>
      </div>);
    }
    return null;
  }

  render() {
    const me = this;

    return (
      <Tooltip
        placement={me.props.placement}
        arrowContent={me.props.arrowContent}
        overlayClassName={me.props.overlayClassName}
        prefixCls={me.props.prefixCls}
        align={me.props.align}
        visible={me.state.visible}
        onVisibleChange={me.handleVisibleChange.bind(me)}
        mouseEnterDelay={me.props.delay}
        transitionName={me.props.transitionName}
        trigger={me.props.trigger}
        overlay={me.generateOverlay()}
        getTooltipContainer={me.props.getTooltipContainer}
      >
        {me.props.children}
      </Tooltip>
    );
  }
}

Popover.defaultProps = {
  prefixCls: 'kuma-popover',
  transitionName: 'popover-slide',
  delay: 0,
  placement: 'top',
  trigger: 'hover',
  onOk: (cb) => { cb(); },
  onCancel: () => { },
  okText: '确定',
  cancelText: '取消',
  showButton: false,
  arrowContent: <div className="kuma-popover-arrow-inner" />,
  onVisibleChange: () => { },
};

// http://facebook.github.io/react/docs/reusable-components.html
Popover.propTypes = {
  prefixCls: PropTypes.string,
  delay: PropTypes.number,
  overlayClassName: PropTypes.string,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right',
    'topLeft', 'bottomLeft', 'leftTop', 'rightTop', 'topRight', 'bottomRight',
    'leftBottom', 'rightBottom']),
  trigger: PropTypes.oneOf(['hover', 'click']),
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  visible: PropTypes.bool,
  showButton: PropTypes.bool,
  onVisibleChange: PropTypes.func,
};


Popover.displayName = 'Popover';

export default Popover;
