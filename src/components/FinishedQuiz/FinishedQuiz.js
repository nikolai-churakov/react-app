import React from "react";
import "./FinishedQuiz.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
        total++
    }

        return total
    }, 0)

    return (
        <div className={'FinishedQuiz'}>
           <ul>

               {props.quiz.map((quizItem, index) => {

                   const done = '\u0058'
                   const x = '\u2713'

                   const cls = [
                       props.results[quizItem.id]
                   ]

                   const symbol = [
                       props.results[quizItem.id] === 'error' ? done : x,
                   ]
                   if (props.results[quizItem.id] === 'error') {
                       cls.push('finished-error')
                   } else {
                       cls.push('finished-success')
                   }

                       return (
                       <li
                           key={index}
                       >
                        <strong>{index + 1}</strong>.&nbsp;
                           {quizItem.question}
                           <span className={cls.join(' ')}>{symbol.join(' ')}</span>
                       </li>
                   )
               })}
           </ul>

           <p> Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <button onClick={props.onRetry}>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz