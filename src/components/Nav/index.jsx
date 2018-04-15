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
            <NavBar
                className="header"
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={this.back}
                rightContent={[
                    <Link to="/city" key="0">
                        <span className="cityName">{city}</span>
                    </Link>,
                    <Popover mask key="1"
                             overlayClassName="fortest"
                             overlayStyle={{ color: 'currentColor', minWidth: '100px' }}
                             visible={this.state.visible}
                             overlay={[
                                 (<Item key="2" value="home"><Link to="/home" className="link-a" style={{minWidth: '60px', whiteSpace: 'nowrap'}}><span className="icon-home"></span> 主页</Link></Item>),
                                 (<Item key="3" value="search"><Link to="/search" className="link-a" style={{minWidth: '60px', whiteSpace: 'nowrap'}}><span className="icon-search"></span> 搜索</Link></Item>),
                                 (<Item key="4" value="girl"><Link to="/girl" className="link-a" style={{minWidth: '60px', whiteSpace: 'nowrap'}}><span className="icon-evil"></span> 女孩</Link></Item>),
                                 (<Item key="5" value="help"><Link to="/help" className="link-a" style={{minWidth: '60px', whiteSpace: 'nowrap'}}><span className="icon-question-circle"></span> 帮助</Link></Item>)
                             ]}
                             align={{
                                 overflow: { adjustY: 0, adjustX: 0 },
                                 offset: [-12, 5]
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
        )
    }
}

export default Nav