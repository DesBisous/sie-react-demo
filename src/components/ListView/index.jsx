import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class ListView extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const item = this.props.item;
        return (
            <div className="list">
                <div className="listLeft">
                    <div className="imgBlock">
                        <img src={item.src} alt=""/>
                    </div>
                </div>
                <div className="listRight">
                    <span className="name">{item.name} <small>{item.nationality}</small> </span>
                    <span className="info">{item.profession}</span>
                    <span className="desc">身高:{item.height} 体重:{item.weight}</span>
                    <div className="desc-info">{item.introduction}</div>
                </div>
            </div>
        )
    }
}

export default ListView