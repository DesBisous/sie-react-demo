import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="list-load-bottom" ref="loadMore">
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span>加载中...</span>
                }
            </div>
        )
    }
    componentDidMount() {
        // 使用滚动时自动加载更多
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.refs.loadMore;
        let timeoutId;
        const callback = () => {
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            console.log('top:'+top);
            console.log('windowHeight:'+windowHeight);
            if (top && top < windowHeight) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn()
            }
        };
        window.addEventListener('scroll', () => {
            if (this.props.isLoadingMore) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }, false);
    }
}

export default LoadMore