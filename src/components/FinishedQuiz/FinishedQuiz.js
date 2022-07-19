import React from "react";
import "./FinishedQuiz.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'

const FinishedQuiz = props => {

    return (
        <div className={'FinishedQuiz'}>
           <ul>

               {props.quiz.map((quizItem, index) => {

                   const  cls = [
                       props.results[quizItem.id] === 'error' ? '\u0058' : '\u2713',
                       props.results[quizItem.id]
                   ]
                   console.log(props.results[quizItem.id])

                   return (
                       <li
                           key={index}
                       >
                        <strong>{index + 1}</strong>.&nbsp;
                           <p>112</p>
                           {/*{quizItem}*/}
                           <span>{cls.join(' ')}</span>

                       </li>
                   )

               })}

               {/*Old Variant finished*/}
               {/*<li>*/}
               {/*    <strong>1.</strong>*/}
               {/*    How are you <span className={'error1'}>{'\u0058'}</span>*/}
               {/*    /!*<FontAwesomeIcon icon={solid('user-secret')} />*!/*/}
               {/*</li>*/}
               {/*<li>*/}
               {/*    <strong>2.</strong>*/}
               {/*    How are you <span className={'success1'}>{'\u2713'}</span>*/}
               {/*    /!*<FontAwesomeIcon icon={solid('user-secret')} />*!/*/}
               {/*</li>*/}

           </ul>

           <p> Правильно 4 из 10</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz