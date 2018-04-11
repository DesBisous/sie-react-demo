import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from "react-redux";
import Nav from "../../components/Nav/index";

import './style.less'
import Star from "../../components/Star/index";

class CurriculumVitae extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    back = () => {
        this.props.history.goBack();
    };
    render() {
        const id = this.props.location.id;
        let item = this.props.async.local.filter((item) => item.id === id )[0];
        return (
            <div className="sie-wrapper">
                <Nav back={this.back} city={this.props.loc.city}></Nav>
                <div className="sie-container">
                    <div className="cv-img">
                        <div className="imgBlock">
                            <img src={item.src} alt="头像"/>
                        </div>
                        <div className="cv-icon-top">
                            <div>
                                <span className="icon-envelope"></span>
                            </div>
                        </div>
                        <div className="cv-icon-bottom">
                            <div className="cv-icon-left">
                                <span className="icon-twitter"></span>
                                <span className="icon-github2"></span>
                            </div>
                            <div className="cv-icon-right">
                                <span className="icon-star"></span>
                            </div>
                        </div>
                    </div>
                    <div className="cv-info">
                        <h3>{item.name}</h3>
                        <span className="desc"><Star score={item.score}></Star></span>
                        <span className="desc">{item.profession}</span>
                        <span className="desc">国籍: {item.nationality}</span>
                        <span className="desc">{item.profession}</span>
                        <span className="desc">身高: {item.height}  |  体重: {item.weight}</span>
                        <span className="desc">{item.introduction}</span>
                        <span className="desc">
                        <b>主要作品：</b>
                            {
                                item.opus.map((str, index) => <span key={index}>{str}；</span>)
                            }
                    </span>
                        <span className="desc">
                        <b>主要成就</b>
                        <ol>
                            {
                                item.achievement.map((str, index) => <li key={index}>{str}；</li>)
                            }
                        </ol>
                    </span>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return  {
        async: state.async,
        loc: state.loc
    }
}
function mapDispatchToProps (dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CurriculumVitae);