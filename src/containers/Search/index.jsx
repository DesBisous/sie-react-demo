import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from "../../components/SearchHeader/index";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as asyncAction from '../../redux/actions/async';
import Nav from "../../components/Nav/index";
import ReactDOM from 'react-dom';
import {PullToRefresh} from "antd-mobile";
import ListView from "../../components/ListView/index";

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            refreshing: false,
            height: document.documentElement.clientHeight,
            hasMore: true,
            isLoadingMore: false
        }
    }
    componentDidMount() {
        const height = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        setTimeout(() => {
            this.setState({
                height: height,
            });
        }, 0);
        if( this.props.async.local.length <= 0 ) {
            this.refresh();
        }
    }
    back = () => {
        this.props.history.goBack();
    };
    refresh = () => {
        this.setState({ refreshing: true });
        setTimeout(() => {
            // 加载更多
            this.props.asyncActions.localUpdateData();
            this.setState({ refreshing: false });
        }, 1000);
    } ;
    render() {
        return (
            <div className="sie-container">
                <Nav back={this.back} city={this.props.loc.city}></Nav>
                <SearchHeader enterHandle={this.refresh}></SearchHeader>
                <div>
                    <PullToRefresh
                        ref={el => this.ptr = el}
                        style={{
                            height: this.state.height,
                            overflow: 'auto',
                        }}
                        indicator={{}}
                        direction={'down'}
                        refreshing={this.state.refreshing}
                        onRefresh={this.refresh}
                    >
                        {
                            this.props.async.local.length
                                ?  this.props.async.local.map((item, index) => {
                                    return <ListView key={index} item={item}></ListView>
                                }) : ''
                        }
                    </PullToRefresh>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return  {
        async: state.async,
        loc: state.loc
    }
}
function mapDispatchToProps (dispatch) {
    return {
        asyncActions: bindActionCreators(asyncAction, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);