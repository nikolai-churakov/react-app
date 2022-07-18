import React from "react";
import "./FinishedQuiz.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'


const FinishedQuiz = props => {
    return (
        <div className={'FinishedQuiz'}>
           <ul>
               <li>
                   <strong>1.</strong>
                   How are you
                   {/*<FontAwesomeIcon icon={solid('user-secret')} />*/}
               </li>
           </ul>

           <p> Правильно 4 из 10</p>

            <div>
                <button>Повторить</button>
            </div>
        </div>
    )
}

export default FinishedQuiz