import React from "react";
import "./FinishedQuiz.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'

const FinishedQuiz = props => {

    return (
        <div className={'FinishedQuiz'}>
           <ul>

               {props.quiz.map((quizItem, index) => {

                   const done = '\u0058'

                   const  simbol = [
                       props.results[quizItem.id] === 'error' ? done : '\u2713',

                   ]



                   const  cls = [
                       props.results[quizItem.id]
                   ]

                   return (
                       <li
                           key={index}
                       >
                        <strong>{index + 1}</strong>.&nbsp;
                           {quizItem.question}
                           <span className={cls.join(' ')}>{simbol.join(' ')}</span>
                       </li>
                   )
               })}
           </ul>

           <p> Правильно 4 из 10</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz