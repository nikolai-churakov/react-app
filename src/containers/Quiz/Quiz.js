import React, {Component} from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Черного', id: 1},
                    {text: 'Синего', id: 2},
                    {text: 'Красного', id: 3},
                    {text: 'Зеленого', id: 4}
                ]
            },
            {
                question: 'В каком году основали СПБ?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1702', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
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
                    onAnswerClick={this.onAnswerClickHandler}
                    quizLength={this.state.quiz.length}
                    answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}
export default Quiz