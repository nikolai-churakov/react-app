import React from "react";
import "./AnswerList.css";

const AnswerList = props => (
    <ul className={'AnswerList'}>
        {props.answers.map((answer, index) => {

        })
        }
    </ul>
)

export default AnswerList