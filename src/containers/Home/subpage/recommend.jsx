import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from "react-redux";
import ReBlock from "../../../components/ReBlock/index";

class Recommend extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <p className="recommend-p">人气榜</p>
                <ReBlock list={this.props.async.local} width="33.333333%"></ReBlock>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return  {
        async: state.async
    }
}
function mapDispatchToProps (dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);