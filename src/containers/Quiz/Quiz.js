import React, {Component} from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Черного', id: 1},
                    {text: 'Синего', id: 2},
                    {text: 'Красного', id: 3},
                    {text: 'Зеленого', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer Id', answerId)
    }
    render() {
        return (
            <div className={'Quiz'}>
                <div className={'QuizWrapper'}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                    answers={this.state.quiz[0].answers}
                    question={this.state.quiz[0].question}
                    onAnswerCkick={(this.onAnswerClickHandler())}
                    />
                </div>
            </div>
        )
    }
}
export default Quiz