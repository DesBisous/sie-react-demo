import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from "react-swipe";

import './style.less'

class Swipe extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const opt = {
            auto: 2500,
            callback: (index) => {
                // 更新当前轮播图的index
            }
        };
        return (
            <div>
                <ReactSwipe swipeOptions={opt}>
                    <div><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523008204036&di=812f1ed7259704c636777ebfbc872d5c&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201607%2F21%2F20160721124307_53nxH.jpeg" alt=""/></div>
                    <div><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523603105&di=1f6e2a82e4c9890de97033ba6afb65b2&imgtype=jpg&er=1&src=http%3A%2F%2Fd.yycaf.net%2Fmonsizyycaf%2Fforum%2F201612%2F22%2F223235og7qhw4fb59ogz5y.jpg" alt=""/></div>
                    <div><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523009643019&di=241abab83f007330e53cf8befc922ccb&imgtype=0&src=http%3A%2F%2Fs.nownews.com%2F63%2F99%2F6399ff7dd885f9aa9e3bb433e93784e6.jpg" alt=""/></div>
                    <div><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523603212&di=fbb907f9039f51d25e4b481ee7662b1e&imgtype=jpg&er=1&src=http%3A%2F%2Fp.54new.com%2Fup%2F2015%2F06%2F90d2e8eee504c151e5aeec1ab347a510.png" alt=""/></div>
                </ReactSwipe>
            </div>
        )
    }
}

export default Swipe