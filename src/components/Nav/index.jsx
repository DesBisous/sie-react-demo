import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
import {Icon, NavBar, Popover} from 'antd-mobile';
import {Link} from "react-router-dom";

const Item = Popover.Item;

class Nav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            visible: false,
            selected: '',
        };
    }

    back = () => {
        this.props.back();
    };

    onSelect = (opt) => {
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };

    render() {
        const city = this.props.city;
        return (
            <div>
                <NavBar
                    className="sie-header"
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={this.back}
                    rightContent={[
                        <Link to="/city" key="0">
                            <span className="cityName">{city}</span>
                        </Link>,
                        <Popover mask key="1"
                                 overlayClassName="fortest"
                                 overlayStyle={{ color: 'currentColor' }}
                                 visible={this.state.visible}
                                 overlay={[
                                     (<Item key="2" value="search"><Link to="/help" className="link-a"><span class="icon-search"></span> 搜索</Link></Item>),
                                     (<Item key="3" value="girl"><Link to="/girl" className="link-a"><span class="icon-evil"></span> 女孩</Link></Item>),
                                     (<Item key="4" value="help"><Link to="/help" className="link-a"><span class="icon-question-circle"></span> 帮助</Link></Item>)
                                 ]}
                                 align={{
                                     overflow: { adjustY: 0, adjustX: 0 },
                                     offset: [-10, 0],
                                 }}
                                 onVisibleChange={this.handleVisibleChange}
                                 onSelect={this.onSelect}
                        >
                            <div className="popover">
                                <Icon type="ellipsis"/>
                            </div>
                        </Popover>,
                    ]}
                >名人榜</NavBar>
            </div>
        )
    }
}

export default Nav