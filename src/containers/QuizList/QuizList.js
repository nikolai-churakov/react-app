import React, {Component} from "react";
import "./QuizList.css"
import NavLink from "react-router-dom/NavLink";
import axios from "axios";
import Loader from "../../components/UI/Loader/Loader";

export default class QuizList extends Component {

    state = {
        quizes: [],
        loading: true
    }

    renderQuizes() {
        return this.state.quizes.map((quiz) =>  {
            return (
                <li
                    key={quiz.id}
                    >
                        <NavLink to={'/quiz/' + quiz.id}>
                            {quiz.name}
                        </NavLink>
                </li>
            )
        })
    }

    // componentDidMount() {
    //     // const axios = require('axios');
    //     axios.get('https://react-quiz-ee100-default-rtdb.europe-west1.firebasedatabase.app/quiz.json').then(response => {
    //         console.log(response)
    //     })
    // }

    async componentDidMount() {
        try {
            const response = await  axios.get('https://react-quiz-ee100-default-rtdb.europe-west1.firebasedatabase.app/quiz.json')
            console.log(response.data)

            const quizes = []

            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })

            this.setState({
                quizes, loading: false
            })

        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className='QuizList'>
                <div>
                    <h1>Список тестов</h1>

                    {
                        this.state.loading
                            ? <Loader/>
                            : <ul>
                                {this.renderQuizes()}
                            </ul>
                    }

                </div>
            </div>
        )
    }
}