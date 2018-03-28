import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as userAction from '../../redux/actions/user';
import * as toastAction from '../../redux/actions/toast';
import * as asyncAction from '../../redux/actions/async';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import get from '../../api/get';
import Nav from "../../components/Nav/index";
import Grid from "../../components/Grid/index";
import wpt from "../../utils/wpt";

class Girl extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            list : []
        }
    }

    componentDidMount() {
        // redux 的使用
        this.props.userActions.update({name: 'Benson'});
        // 普通 get 请求
        // this.getImage();
        // asyncAction 方式请求
        this.getAsyncWelfare();
    }

    // get 请求
    getImage = () => {
        this.props.toastActions.show('loading...');
        setTimeout(() => {
            get('/福利/10/2')
                .then( (res) => {
                    if( res.status === 200 ) {
                        this.setState({
                            list : res.data.results
                        });
                        this.props.toastActions.hide({ success: true, content: 'success' });
                    }else {
                        this.props.toastActions.err({ status: true, msg: '异常' });
                    }
                } )
                .catch( (err) => {
                    this.props.toastActions.err({ status: true, msg: JSON.stringify(err) });
                } )
        },3000);
    };

    // asyncAction 方式请求
    getAsyncWelfare = () => {
        this.props.asyncActions.getWelfare();
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
            <div>
                <Nav back={this.back} navRightBtn={this.getAsyncWelfare}></Nav>
                <h1>此处有福利，看不懂代码的人就没法看，怪我咯~ 哈哈</h1>
                <div style={{display: 'none'}}>
                    <Grid list={list} showImg={this.showImg}></Grid>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return  {
        user: state.user,
        async: state.async,
    }
}
function mapDispatchToProps (dispatch) {
    return {
        userActions: bindActionCreators(userAction, dispatch),
        toastActions: bindActionCreators(toastAction, dispatch),
        asyncActions: bindActionCreators(asyncAction, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Girl);