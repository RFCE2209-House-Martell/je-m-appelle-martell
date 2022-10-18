import React, { useState, useEffect } from 'react';
import API from './api.js';
import Answer from './answer.jsx';

const AnswerList = (props) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const loadAnswers = () => {
      API.getAllAnswersById(props.questionId).then((res) => {
        setAnswers(res);
      }).catch((err) => 'Error in useEffect retreiving answers');
    };

    loadAnswers();
  }, []);
  return (
    <div>
      {answers.length > 0 ? answers.map((answer) => {
        return <Answer answer={answer} key={answer.answer_id} />
      }) : <h6>There are currently no answers for this question. Be the first? Add an answer!</h6>}
    </div>
  );
}

export default AnswerList;