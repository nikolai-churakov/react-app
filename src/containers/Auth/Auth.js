import React, {Component} from "react";
import "./Auth.css"
import Button from "../../components/UI/Button/Button";

export default class Auth extends Component {

    loginHandler = () => {

}
    registerHandler = () => {

}

    submitHandler = (event) => {
event.preventDefault()
    }

    render() {
        return (
            <div className={'Auth'}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler}>
                        <input type="text"/>
                        <input type="text"/>
                        <button
                            type="success"
                            onClick={this.loginHandler}
                        >
                            Войти</button>

                        <button
                            type="primary"
                            onClick={this.registerHandler}
                        >
                            Войти</button>
                    </form>
                </div>

            </div>
        )
    }
}