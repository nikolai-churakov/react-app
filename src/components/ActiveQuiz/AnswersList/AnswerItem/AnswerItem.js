import React from "react"
import "./AnswerItem.css"

const AnswerItem = props => {
    return (
        <li className={'AnswerItem'}>
            {props.answers.text}
        </li>
    )
}

export default AnswerItem