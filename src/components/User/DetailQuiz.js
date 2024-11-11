import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import './DetailQuiz.scss'
import _ from 'lodash'
const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();
    console.log(location);

    const quizId = params.id;

    useEffect(() => {
        fetchQuestion();
    }, [quizId]);

    const fetchQuestion = async () => {
        let res = await getDataQuiz(quizId)
        console.log('check question : ', res);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (id), `value` is the array of objects
                .map((value, key) => {
                    let answers = [];
                    let questionDescription, image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image;
                        }
                        answers.push(item.answers)
                    })
                    return { questionId: key, answers, questionDescription, image }
                })
                .value()
            console.log(data);
        }

    }

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <div className="question">Question 1:  What is This???</div>
                    <div className="answer">
                        <div className="a-child">A. this is answer</div>
                        <div className="a-child">B. this is answer</div>
                        <div className="a-child">C. this is answer</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-secondary"> Back</button>
                    <button className="btn btn-primary"> Next</button>

                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}

export default DetailQuiz;