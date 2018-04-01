import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Nav from '../../components/Nav'
import wpt from "../../utils/wpt";
import ReactSwipe from "react-swipe";
import {Button, WhiteSpace, WingBlank} from "antd-mobile";

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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

    navRightBtn = () => {
        this.props.history.push('/girl');
    };

    scanCodeReturnStr = () => {
        wpt.scanCodeReturnStr(
            (msg) => {alert(msg);},
            (e) => {alert("Error: " + e);}
        );
    };

    componentDidMount() {
        console.log(22);
    }

    render() {
        const opt = {
            auto: 2500,
            callback: (index) => {
                // 更新当前轮播图的index
            }
        };
        return (
            <div className="sie-container">
                <Nav back={this.back} navRightBtn={this.navRightBtn}></Nav>
                <div>
                    <ReactSwipe swipeOptions={opt}>
                        <div><img src="http://pic1.win4000.com/wallpaper/2/591be819a33ed.jpg" alt="" style={{width: '100%'}}/></div>
                        <div><img src="http://www.runningman-fan.com/wp-content/uploads/2015/10/Img0403_20151002165101_1.jpg" alt="" style={{width: '100%'}}/></div>
                        <div><img src="http://img1.imgtn.bdimg.com/it/u=140415824,2014107347&fm=27&gp=0.jpg" alt="" style={{width: '100%'}}/></div>
                    </ReactSwipe>
                    <br/><br/>
                    <WingBlank>
                        <Button type="primary" onClick={this.scanCodeReturnStr}>扫二维码</Button><WhiteSpace />
                    </WingBlank>
                </div>
            </div>
        )
    }
}
export default Home;