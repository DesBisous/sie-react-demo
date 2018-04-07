import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as asyncAction from '../../../redux/actions/async';
import LoadMore from "../../../components/LoadMore/index";
import ListView from "../../../components/ListView/index";

class Ranking extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            hasMore: true,
            isLoadingMore: false
        }
    }
    // 加载更多数据
    loadMoreData = () => {
        // 记录状态
        this.setState({
            isLoadingMore: true
        });
        setTimeout(() => {
            // 加载更多
            this.props.asyncActions.localData();

            // 记录状态
            this.setState({
                isLoadingMore: false
            });
            if( this.props.async.local.length > 18 ) {
                console.log(this.props.async.local.length);
                this.setState({
                    hasMore: false
                });
            }
        },1000);
    };
    render() {
        return (
            <div>
                <p className="ranking-p">排行榜</p>
                {
                    this.props.async.local.length
                        ?  this.props.async.local.map((item, index) => {
                            return <ListView key={index} item={item}></ListView>
                        }) : ''
                }
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData}/>
                        : <div className="list-load-bottom"><span>无更多数据</span></div>
                }
            </div>
        )
    }
}

function mapStateToProps (state) {
    return  {
        async: state.async
    }
}
function mapDispatchToProps (dispatch) {
    return {
        asyncActions: bindActionCreators(asyncAction, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ranking);