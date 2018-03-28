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
        return (
            <div>
                <ul>
                    {
                        this.props.list.map(
                            (item, index) => <li key={index} onClick={this.showImg}><img src={item.url} alt=""/></li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default GridImg