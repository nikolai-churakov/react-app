import React from "react";
import "./AnswerList.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = props => (
    <ul className={'AnswerList'}>
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem
                answer={answer}/>
            )
        })
        }
    </ul>
)

export default AnswerList