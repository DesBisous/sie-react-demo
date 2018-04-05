import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
import {Icon, NavBar} from 'antd-mobile';

class Nav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    back = () => {
        this.props.back();
    };

    navRightBtn = () => {
        console.log('1111');
        this.props.navRightBtn();
    };

    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={this.back}
                    rightContent={[
                        <Icon key="0" type="ellipsis" onClick={this.navRightBtn}/>,
                    ]}
                >Demo</NavBar>
            </div>
        )
    }
}

export default Nav