import React, {Component} from "react";
import "./RouteHub.css"
import {BrowserRouter} from "react-router-dom";
// import {Route} from "react-router-dom";


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
            {/*<Route path="/easy" exact render={() => <h1>Home</h1>} />*/}
            {/*<Route path="/a" exact render={() => <h1>Home</h1>} />*/}

        </div>
        )
    }
}

export default RouteHub