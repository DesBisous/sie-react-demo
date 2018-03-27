import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as userAction from "../../redux/actions/user";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
        this.props.userActions.update({name: 'Benson'});
        console.log(this.props);
    }
    render() {
        return (
            <h1>{ JSON.stringify(this.props.match) }</h1>
        )
    }
}

function mapStateToProps (state) {
    return  {
        user: state.user
    }
}
function mapDispatchToProps (dispatch) {
    return {
        userActions: bindActionCreators(userAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);