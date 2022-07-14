import React from "react";
import "./FinishedQuiz.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const FinishedQuiz = props => {
    return (
        <div className={'FinishedQuiz'}>
            <ul>
                <li>
                    <strong>1. </strong>
                    How a you?
                    <i className={'fa fa-times'} />

                </li>
            </ul>
            <FontAwesomeIcon icon={solid('user-secret')} />
            <FontAwesomeIcon icon={regular('coffee')} />
            {/*<FontAwesomeIcon icon={brands('twitter')} />*/}
            {/*<FontAwesomeIcon icon={faSquare} />*/}
            <p> Правильно 4 из 10</p>
            <div>
                <button>Repeat</button>
            </div>
        </div>
    )
}

export default FinishedQuiz