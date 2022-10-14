import React, { useState, useEffect } from 'react';
import API from './functions/api.js';
import Question from './question.jsx';

const QuestionList = (props) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const loadQuestions = () => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/questions/:${props.id}`).then((res) => {
        setQuestions(res.data);
      })
    };

    loadQuestions();
  }, []);

  return (<div>{questions.map((question) => {
    return (<Question question={question} />)
  })}</div>);
}

export default QuestionList;

