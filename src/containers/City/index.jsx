import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as locAction from '../../redux/actions/loc';

import Nav from "../../components/Nav/index";
import CurrentCity from "../../components/CurrentCity/index";
import CityList from "../../components/CityList/index";

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    back = () => {
        this.props.history.goBack();
    };
    render() {
        return (
            <div className="sie-wrapper">
                <Nav back={this.back} city={this.props.loc.city}></Nav>
                <div className="sie-container">
                    <CurrentCity city={this.props.loc.city}/>
                    <CityList changeFn={this.changeCity}/>
                </div>
            </div>
        )
    }
    changeCity = (newCity) => {
        if (newCity === null) {
            return
        }
        // 修改 redux
        const loc = this.props.loc;
        loc.city = newCity;
        this.props.locActions.update(loc);

        // 跳转页面
        this.props.history.push('/home');
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        loc: state.loc
    }
}

function mapDispatchToProps(dispatch) {
    return {
        locActions: bindActionCreators(locAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(City)