import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import App from './App'

export default class Root extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={App} />
                        <Route path="/site" exact component={App} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
