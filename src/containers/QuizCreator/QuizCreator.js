import React, {Component} from "react";
import './QuizCreator.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import {createControl} from '../../form/formFramework'
import Auxillary from '../../hoc/Auxillary/Auxillary'

function createOptionControl(number) {
    return createControl({
        label: `Вариант ${number}`,
        errorMessage: 'Значение не может быть пустым',
        id: number,
    }, {required: true})
}

function createFormControl() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Значение не может быть пустым'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

export default class QuizCreator extends Component {

    state = {
        quiz: [],
        formControls: createFormControl()
    }

    submitHandler = event => {
        event.preventDefault()
    }

    createQuestionHandler = () => {

    }

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    changeHandler = (value, controlName) => {

    }

    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Auxillary key={controlName+index}>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={event => this.changeHandler(event.target.value, createControl)}
                    />
                    { index === 0 ? <hr /> : null }
                </Auxillary>
            )
        })
    }

    render() {
        return (
            <div className={'QuizCreator'}>
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>

                        { this.renderControls() }

                        <select></select>
                        <Button
                            type='primary'
                            onClick={this.addQuestionHandler}
                        >
                            Добавить вопрос
                        </Button>
                        <Button
                            type='repeat'
                            onClick={this.createQuestionHandler}
                        >
                            Создать тест
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}