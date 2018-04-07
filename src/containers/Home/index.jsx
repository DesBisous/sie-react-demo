import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Nav from '../../components/Nav'
import wpt from "../../utils/wpt";
import Swipe from "../../components/Swipe";
import Recommend from "./subpage/recommend";
import Ranking from "./subpage/ranking";
import * as asyncAction from '../../redux/actions/async';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import './style.less'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    back = () => {
        if( window.cordova ) {
            wpt.closeApp(
                (msg) => {},
                (e) => {}
            );
        }else {
            this.props.history.goBack();
        }
    };

    componentDidMount() {
        this.getLocal();
    }

    getLocal = () => {
        this.props.asyncActions.localData();
    };

    render() {
        return (
            <div className="sie-container">
                <Nav back={this.back} city={this.props.loc.city}></Nav>
                <Swipe></Swipe>
                <Recommend></Recommend>
                <Ranking></Ranking>
            </div>
        )
    }
}
function mapStateToProps (state) {
    return  {
        loc: state.loc
    }
}
function mapDispatchToProps (dispatch) {
    return {
        asyncActions: bindActionCreators(asyncAction, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);