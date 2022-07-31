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

                    <form onSubmit={this.submitHandler} className='form'>
                        <input type="text"/>
                        <input type="text"/>
                        <Button
                            type="repeat"
                            onClick={this.loginHandler}
                        >
                            Войти</Button>

                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                        >
                            Регистрация</Button>
                    </form>
                </div>

            </div>
        )
    }
}