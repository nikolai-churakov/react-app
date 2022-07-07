import React from "react";
import "./ActiveQuiz.css";
import AnswerList from "./AnswersList/AnswerList";

const ActiveQuiz = props => (
    <div className={'ActiveQuiz'}>
        <p className={'Question'}>
            <span>
                <strong>Вопрос 2.</strong>&nbsp;
                Как дела?
            </span>
            <small> 4 из 12 </small>
        </p>

       <AnswerList
       answers={props.answers}
       />
    </div>
)

export default ActiveQuiz