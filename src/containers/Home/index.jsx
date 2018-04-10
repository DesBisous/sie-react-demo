import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Nav from '../../components/Nav'
import wpt from "../../utils/wpt";
import Swipe from "../../components/Swipe";
import Recommend from "./subpage/recommend";
import Ranking from "./subpage/ranking";
import * as asyncAction from '../../redux/actions/async';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import './style.less'
import {PullToRefresh} from "antd-mobile";

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            refreshing: false,
            hasMore: true,
            height: document.documentElement.clientHeight,
        }
    }

    back = () => {
        if( window.cordova ) {
            wpt.closeApp(
                (msg) => {},
                (e) => {}
            );
        }else {
            this.props.history.goBack();
        }
    };

    componentDidMount() {
        // console.log(this.props);
        this.getLocal();
    }

    getLocal = () => {
        this.props.asyncActions.localData();
    };
    goToCV(id) {
        this.props.history.push({pathname: '/CurriculumVitae', id: id})
    };
    // 加载更多数据
    loadMoreData = () => {
        if( this.state.hasMore && !this.state.refreshing ) {
            // 记录状态
            this.setState({
                refreshing: true
            });
            setTimeout(() => {
                // 加载更多
                this.props.asyncActions.localData();

                // 记录状态
                this.setState({
                    refreshing: false
                });
                console.log(this.props.async);
                if( this.props.async.local.length > 18 ) {
                    this.setState({
                        hasMore: false
                    });
                }
            },1000);
        }
    };
    render() {
        return (
            <div className="sie-wrapper">
                <Nav back={this.back} city={this.props.loc.city}></Nav>
                <PullToRefresh
                    className="sie-container"
                    ref={el => this.ptr = el}
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                    indicator={{ activate: this.state.hasMore?'松开立即刷新':'无更多数据' }}
                    direction={'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={this.loadMoreData}
                >
                    <Swipe></Swipe>
                    <Recommend goToCV={this.goToCV.bind(this)}></Recommend>
                    <Ranking goToCV={this.goToCV.bind(this)}></Ranking>
                </PullToRefresh>
            </div>
        )
    }
}
function mapStateToProps (state) {
    return  {
        loc: state.loc,
        async: state.async
    }
}
function mapDispatchToProps (dispatch) {
    return {
        asyncActions: bindActionCreators(asyncAction, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);