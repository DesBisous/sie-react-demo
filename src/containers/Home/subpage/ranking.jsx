import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as asyncAction from '../../../redux/actions/async';
import ListView from "../../../components/ListView/index";

class Ranking extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <p className="ranking-p">排行榜</p>
                {
                    this.props.async.local.length
                        ?  this.props.async.local.map((item, index) => {
                            return <ListView key={index} item={item} goToCV={this.props.goToCV}></ListView>
                        }) : ''
                }
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
        asyncActions: bindActionCreators(asyncAction, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ranking);