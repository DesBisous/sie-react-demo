import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class GridImg extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    showImg = () => {
      this.props.showImg();
    };

    render() {
        const style = {
            width: this.props.width
        };
        return (
            <div>
                <ul>
                    {
                        this.props.list.map(
                            (item, index) => <li key={index} onClick={this.showImg} style={style}>
                                <span className="imgBlock">
                                    <img src={item.url} alt=""/>
                                </span>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default GridImg