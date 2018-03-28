import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as userAction from "../../redux/actions/user";
import * as toastAction from "../../redux/actions/toast";
import * as asyncAction from "../../redux/actions/async";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import get from "../../api/get";

class Home extends React.Component {
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
    // 在接收到新的props时，会调用这个方法。
    componentWillReceiveProps() {

    }
    render() {
        return (
            <div>
                <h1>{ JSON.stringify(this.props.match) }</h1>
                <ul>
                    {
                        this.state.list.length > 0 ?
                            this.state.list.map( (item, index) => {
                                return <li key={index} style={{float: 'left'}}><img style={{width: '200px'}} src={item.url} alt=""/></li>
                            } ) :
                            this.props.async.list.map( (item, index) => {
                                return <li key={index} style={{float: 'left'}}><img style={{width: '200px'}} src={item.url} alt=""/></li>
                            } )
                    }
                </ul>
            </div>
            
        )
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);