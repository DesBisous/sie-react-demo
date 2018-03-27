import React, { Component } from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
export default class appRouter extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={ () => <Redirect to="/home/index" push /> } />
                    <Route path="/home" component={ Home } />
                    <Route path="/404" component={ NotFound } />
                    <Route component={ NotFound } />
                </Switch>
            </Router>
        )
    }
}
