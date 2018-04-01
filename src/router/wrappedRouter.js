import React, {Component} from 'react'
import * as axiosConfig from "../config/axios.config";
import { Modal } from 'antd-mobile';
import * as userAction from '../redux/actions/user';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PureRenderMixin from "react-addons-pure-render-mixin";

const alert = Modal.alert;

export default (Router) => {
    class NewComponent extends Component {
        constructor() {
            super();
            this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
            this.state = {
                WebView: false
            }
        }

        componentWillMount() {
            new Promise((resolve, reject) => {
                if ( axiosConfig.isDev ) {
                    let user = {
                        userId: '123',
                        userName: 'Benson'
                    };
                    this.props.userActions.update(user);
                    resolve();
                    // 开发环境
                } else {
                    // 生产环境
                    try {
                        window.cordova.exec(
                            (obj) => {
                                let user = {
                                    userId: obj.userId,
                                    userName: obj.userName
                                };
                                this.props.userActions.update(user);
                                resolve();
                            },
                            (e) => {
                                reject('获取用户信息失败');
                            }
                            , "UsersInfo", "getUsersInfo", [])
                    } catch (e) {
                        reject(e);
                    }
                }
            }).then( () => {
                this.setState({
                    WebView: true
                });
            } ).catch( (e) => {
                this.antAlert(e);
            } );
        }

        antAlert (e) {
            e = typeof e === 'string' ? e : JSON.stringify(e);
            alert('异常', e, [
                { text: '关闭', onPress: () => console.log('cancel') },
                { text: '确定', onPress: () => console.log('ok') },
            ]);
        }

        render() {
            return (
                <div>
                    {
                        this.state.WebView ?  <Router/> : ''
                    }
                </div>
            )
        }
    }

    function mapStateToProps (state) {
        return  {
            user: state.user
        }
    }

    function mapDispatchToProps (dispatch) {
        return {
            userActions: bindActionCreators(userAction, dispatch),
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(NewComponent);
}