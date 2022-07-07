import React, {Component} from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        quiz: [
            {text: 'Вопрос 1'},
            {text: 'Вопрос 2'},
            {text: 'Вопрос 3'},
            {text: 'Вопрос 4'}
        ]
    }
    render() {
        return (
            <div className={'Quiz'}>
                <h1>Quiz</h1>
                <div className={'QuizWrapper'}>
                    <ActiveQuiz/>
                </div>
            </div>
        )
    }
}
export default Quiz