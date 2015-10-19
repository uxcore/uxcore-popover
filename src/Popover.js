/**
 * Popover Component for uxcore
 * @author eternalsky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let Tooltip = require("rc-tooltip");

class Popover extends React.Component {

    constructor(props) {
        super(props);
    }

    _generateOverlay() {
        let me = this;
        let arr = [];
        if (me.props.title) {
            arr.push(<div key="title" className={me.props.prefixCls + '-title'}>
                        {me.props.title}
                    </div>);
        }
        if (me.props.overlay) {
            arr.push(<div key="content" className={me.props.prefixCls + '-content'}>
                        {me.props.overlay}
                    </div>);
        }
        return <div>
                {arr}
               </div>
    }

    render() {
        let me = this;

        let transitionName = ({
            top: 'zoom-down',
            bottom: 'zoom-up',
            left: 'zoom-right',
            right: 'zoom-left'
        })[me.props.placement];

        return (
            <Tooltip placement={me.props.placement}
                overlayClassName={'uxcore'}
                prefixCls={me.props.prefixCls}
                delay={me.props.delay}
                transitionName={transitionName}
                trigger={me.props.trigger}
                overlay={me._generateOverlay()}>
                {me.props.children}
            </Tooltip>
        );
    }
}

Popover.defaultProps = {
    prefixCls: 'kuma-popover',
    delay: 0.1,
    placement: "top",
    trigger: "hover"
};


// http://facebook.github.io/react/docs/reusable-components.html
Popover.propTypes = {
    prefixCls: React.PropTypes.string,
    delay: React.PropTypes.number,
    placement: React.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    trigger: React.PropTypes.oneOf(['hover', 'click']),
}

Popover.displayName = "Popover";

module.exports = Popover;
