import React from "react";
import "./Quiz.css";

const ActiveQuiz = props => (
    <div className={'ActiveQuiz'}>
        <p>
            <span>
                <strong>2</strong>
                Как дела ?
            </span>
        </p>

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
)

export default ActiveQuiz