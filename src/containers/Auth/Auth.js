import React, {Component} from "react";
import "./Auth.css"
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default class Auth extends Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }

            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                }
            }
        }
    }

    loginHandler = () => {

}
    registerHandler = () => {

}

    submitHandler = (event) => {
event.preventDefault()
    }

    renderInputs() {
        return Object.key(this.state.formControls).map((controlName, index ) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    shouldValidate={!!control.validation}
                />
            )
        })
    }

    render() {
        return (
            <div className={'Auth'}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className='form'>

                        { this.renderInputs() }


                        <Input label="Email"/>

                        <Input label="Пароль"
                        errorMessage={'test'}
                        />

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