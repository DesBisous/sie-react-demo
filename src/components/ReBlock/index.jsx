import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class ReBlock extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const list = this.props.list.slice(0, 6);
        const style = {
            width: this.props.width
        };
        return (
            <div>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li key={index} style={style} onClick={() => {this.props.goToCV(item.id)}}>
                                    <span className="imgBlock">
                                        <img src={item.src} alt=""/>
                                    </span>
                                    <span className="name">{item.name}</span>
                                    <span className="desc">{item.profession}</span>
                                </li>

                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ReBlock