import React, {Component} from "react";
import "./RouteHub.css"
import {Route, Router} from "react-router-dom";

class RouteHub extends Component {
    render() {

    return (
        <div>
            <nav className={'RouteHub'}>
                <ul>
                    <li>
                        <a href="/easy">Easy</a>
                    </li>
                    <li>
                        <a href="/medium">Medium</a></li>
                    <li>
                        <a href="/hard">Hard</a>
                    </li>
                </ul>
            </nav>
            <Router path="/" render={() => <h1>Home</h1>} />
        </div>
        );
    }
}

export default RouteHub

