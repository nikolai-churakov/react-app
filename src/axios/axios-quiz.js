import axios from "axios";

export default axios.create({
    baseURL:  'https://react-quiz-ee100-default-rtdb.europe-west1.firebasedatabase.app/'
})
