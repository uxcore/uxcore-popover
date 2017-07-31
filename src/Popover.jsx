/**
 * Popover Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const Tooltip = require('rc-tooltip');
const Button = require('uxcore-button');

class Popover extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: 'visible' in props ? props.visible : false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const me = this;

    if (('visible' in nextProps) && (nextProps.visible !== me.props.visible)) {
      me.setState({
        visible: nextProps.visible,
      });
    }
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
  prefixCls: React.PropTypes.string,
  delay: React.PropTypes.number,
  overlayClassName: React.PropTypes.string,
  placement: React.PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'topLeft', 'bottomLeft', 'leftTop', 'rightTop', 'topRight', 'bottomRight', 'leftBottom', 'rightBottom']),
  trigger: React.PropTypes.oneOf(['hover', 'click']),
  onOk: React.PropTypes.func,
  onCancel: React.PropTypes.func,
  okText: React.PropTypes.string,
  cancelText: React.PropTypes.string,
  visible: React.PropTypes.bool,
  showButton: React.PropTypes.bool,
  onVisibleChange: React.PropTypes.func,
};


Popover.displayName = 'Popover';

module.exports = Popover;
