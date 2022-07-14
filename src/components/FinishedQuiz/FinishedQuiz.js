import React from "react";
import "./FinishedQuiz.css"
const FinishedQuiz = props => {
    return (
        <div className={'FinishedQuiz'}>
            <ul>
                <li>
                    <strong>1. </strong>
                    How a you?
                    <i className={''} />
                </li>
            </ul>
            <p> Правильно 4 из 10</p>
            <div>
                <button>Repeat</button>
            </div>
        </div>
    )
}

export default FinishedQuiz