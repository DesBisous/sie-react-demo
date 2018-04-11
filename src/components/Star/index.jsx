import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Star extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate(this);
    }
    render() {
        let float = false;
        return (
            <span>
                {
                    [0,1,2,3,4].map((item) => {
                        if( (item + 0.5) === this.props.score ) float = true;
                        if( float ) { float = false; return <span key={item} className="star-pink icon-star-half-empty"></span> }
                        if( item < this.props.score )
                            return <span key={item} className="star-pink icon-star"></span>
                        else return <span key={item} className="star-pink icon-star-o"></span>
                    })
                }
            </span>
        )
    }
}

export default Star