import React, {Component} from "react";
import "./RouteHub.css"
// import {Route} from "react-router-dom";


const links = [ 1, 2, 3]

class RouteHub extends Component {


    renderLinks() {
        return links.map((link, index) =>
        return (
            <li key={index}>
                Link{link}
            </li>
        ))
    }
    render() {

    return (
            <nav className={'RouteHub'}>
                <ul>
                    {this.renderLinks() }
                </ul>
            </nav>

            // {/*<Route path="/easy" exact render={() => <h1>Home</h1>} />*/}
            // {/*<Route path="/a" exact render={() => <h1>Home</h1>} />*/}
        )
    }
}

export default RouteHub