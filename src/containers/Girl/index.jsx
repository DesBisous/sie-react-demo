import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as toastAction from '../../redux/actions/toast';
import * as asyncAction from '../../redux/actions/async';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Nav from "../../components/Nav/index";
import Grid from "../../components/Grid/index";
import wpt from "../../utils/wpt";
import {PullToRefresh} from "antd-mobile";
import ReactDOM from 'react-dom';

class Girl extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            list : [],
            refreshing: false,
            height: document.documentElement.clientHeight,
        }
    }

    componentDidMount() {
        // saga 方式请求
        const height = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        setTimeout(() => {
            this.setState({
                height: height,
            });
            this.gridEvery();
        }, 0);
    }

    // asyncAction saga 方式请求
    gridEvery = () => {
        let page =  Math.floor( Math.random() * 50 + 1 );
        this.props.asyncActions.gridEvery('/福利/10/' + page);
    };

    back = () => {
        this.props.history.goBack();
    };

    showImg = () => {
        let list = this.state.list.length > 0 ? this.state.list :  this.props.async.list;
        wpt.showImg(
            list.map((item) => item.url ),
            (msg) => {alert(msg);},
            (e) => {alert("Error: " + e);}
        );
    };

    render() {
        let list = this.state.list.length > 0 ? this.state.list :  this.props.async.list;
        return (
            <div className="sie-container">
                <Nav back={this.back} city={this.props.loc.city}></Nav>
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
                        onRefresh={() => {
                            this.setState({ refreshing: true });
                            this.gridEvery();
                            setTimeout(() => {
                                this.setState({ refreshing: false });
                            }, 1000);
                        }}
                    >
                        {/*<h1>此处有福利，看不懂代码的人就没法看，怪我咯~ 哈哈</h1>*/}
                        <Grid list={list} showImg={this.showImg} width="50%"></Grid>
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
        toastActions: bindActionCreators(toastAction, dispatch),
        asyncActions: bindActionCreators(asyncAction, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Girl);