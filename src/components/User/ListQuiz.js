import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiService";
import './ListQuiz.scss'
import { useNavigate, useParams } from "react-router-dom";
const ListQuiz = (props) => {
    const navigate = useNavigate()

    const [arrQuiz, setArrQuiz] = useState([])

    useEffect(() => {
        getQuizData()
    }, []);

    const getQuizData = async () => {
        let res = await getQuizByUser();
        console.log(res);

        if (res && res.EC === 0) {
            setArrQuiz(res.DT);
        }
    }

    return (
        <div className="list-quiz-container container">
            {arrQuiz && arrQuiz.length > 0 &&
                arrQuiz.map((quiz, index) => {
                    return (
                        <div key={`${index}-quiz`} class="card" style={{ width: "18rem" }}>
                            <img src={`data:image/jpeg;base64,${quiz.image}`} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Quizz {index + 1}</h5>
                                <p class="card-text">{quiz.description}</p>
                                <button
                                    class="btn btn-primary"
                                    onClick={() => navigate(`/quiz/${quiz.id}`, { state: { quizTitle: quiz.description } })}
                                >Start Now</button>
                            </div>
                        </div>
                    )
                })
            }

            {arrQuiz && arrQuiz.length === 0 &&
                <div>You don't have any quiz now</div>
            }
        </div>
    )
}
export default ListQuiz;