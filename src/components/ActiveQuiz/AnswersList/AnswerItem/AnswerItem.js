import React from "react"
import "./AnswerItem.css"

const AnswerItem = props => {
    const cls = ['AnswerItem']
    console.log(cls, 'массив до пуша')
    console.log(props.state, 'проп стейт')

    if (props.state) {
        cls.push(props.state)
        console.log(cls, 'масив после пуша')
    }

    return (
        <li
            // className={'AnswerItem'}
            className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
            >
            {props.answer.text}
        </li>
    )
}

export default AnswerItem