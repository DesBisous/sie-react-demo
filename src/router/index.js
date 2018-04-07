import React, { Component } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import * as PureRenderMixin from "react-addons-pure-render-mixin";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import wrappedRouter from './wrappedRouter'
import Home from "../containers/Home";
import Girl from "../containers/Girl";
import City from "../containers/City";
import NotFound from "../containers/NotFound";
import Help from "../containers/Help/index";



class appRouter extends Component {

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentWillMount() {
        document.body.style.margin = "0px";
        // 这是防止页面被拖拽
        document.body.addEventListener('touchmove', (ev) => {
            ev.preventDefault();
        });
    }

    render () {
        return (
            <Router>
                <Route
                    render={({ location, history }) => (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.pathname}
                                classNames={history.action === 'PUSH' ? 'right' : 'left'}
                                timeout={500}
                            >
                                <Switch location={location}>
                                    <Route exact path="/" render={ () => <Redirect to="/home" push /> } />
                                    <Route path="/home" component={ Home } />
                                    <Route path="/city" component={ City } />
                                    <Route path="/girl" component={ Girl } />
                                    <Route path="/help" component={ Help }/>
                                    <Route path="/404" component={ NotFound } />
                                    <Route component={ NotFound } />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )}
                />
            </Router>
        )
    }
}

export default wrappedRouter(appRouter);

