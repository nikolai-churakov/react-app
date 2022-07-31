import React, {Component} from "react";
import "./RouteHub.css"
import {NavLink} from "react-router-dom";
import Backdrop from '../../UI/Backdrop/Backdrop'

const links = [
    {to: '/', label: 'Тесты', exact: true},
    {to: '/auth', label: 'Авторизация', exact: true},
    {to: '/quiz-creator', label: 'Создать тест', exact: true}
]

class RouteHub extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={'active'}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {

        const cls = ['RouteHub']

        if (!this.props.isOpen) {
            cls.push('close')
        }

    return (
        <React.Fragment>
            <nav className={cls.join(' ')}>
                <ul>
                    {this.renderLinks() }
                </ul>
            </nav>
            { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
        </React.Fragment>
        )
    }
}

export default RouteHub