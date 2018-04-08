import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Nav from "../../components/Nav/index";
import {connect} from "react-redux";
import {WhiteSpace, WingBlank} from "antd-mobile";

class Help extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    back = () => {
        this.props.history.goBack();
    };
    render() {
        const info = {
            paddingBottom: '5px',
            margin: 0,
            display: 'flex',
            alignItems: 'center'
        };
        return (
            <div className="sie-container">
                <Nav back={this.back} city={this.props.loc.city}></Nav>
                <div>
                    <WhiteSpace size="lg" />
                    <WingBlank size="lg">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523127069650&di=e6fc2691facded9f2755b9456da282d2&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D99a8b3578335e5dd9079addb43f68bd9%2F730e0cf3d7ca7bcbdc2c942ab8096b63f624a864.jpg" alt=""/>
                    </WingBlank>
                    <WingBlank size="lg">
                        <div>
                            <h3>- 本项目集成和配置的内容如下：</h3>
                            <ol>
                                <li style={{paddingBottom: '5px'}}>react-addons-pure-render-mixin 项目优化插件，重写了生命周期的：shouldComponentUpdate方法</li>
                                <li style={{paddingBottom: '5px'}}>react-swipe swipe-js-iso 加入了轮播图</li>
                                <li style={{paddingBottom: '5px'}}>react-transition-group 增加了路由过渡动画</li>
                                <li style={{paddingBottom: '5px'}}>react-redux redux 进行了redux的集成</li>
                                <li style={{paddingBottom: '5px'}}>redux-logger  日志中间件</li>
                                <li style={{paddingBottom: '5px'}}>redux-thunk   异步Action中间件</li>
                                <li style={{paddingBottom: '5px'}}>redux-saga 异步Action中间件，基于Generator</li>
                                <li style={{paddingBottom: '5px'}}>redux-devtools  加入 游览器 Redux 状态管理的追踪</li>
                                <li style={{paddingBottom: '5px'}}>antd-mobile 使用了蚂蚁金融开发的app UI框架</li>
                                <li style={{paddingBottom: '5px'}}>axios 请求使用axios进行支持</li>
                            </ol>
                        </div>
                    </WingBlank>
                    <WhiteSpace size="sm" />
                    <WingBlank size="lg">
                        <p style={info}><span className="icon-grin"></span>&nbsp;&nbsp;作者： Benson</p>
                        <p style={info}><span className="icon-clock"></span>&nbsp;&nbsp;时间： 2018-04-10</p>
                        <p style={info}><span className="icon-envelope"></span>&nbsp;&nbsp;email: desbisous@foxmail.com</p>
                        <p style={info}><span className="icon-github2"></span>&nbsp;&nbsp;GitHub: https://github.com/DesBisous/sie-react-demo</p>
                    </WingBlank>
                    <WhiteSpace size="lg" />
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return  {
        loc: state.loc
    }
}
function mapDispatchToProps (dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Help);