import React, { useState, useEffect } from 'react';
import API from './api.js';
import Answer from './answer.jsx';

const AnswerList = (props) => {
  const [answers, setAnswers] = useState([]);

  const onHandleHelpfulSubmit = (id) => {
    return API.updateHelpfulAnswer(id).then(() => {
      return API.getAllAnswersById(props.questionId, props.answerPage, props.answerCount).then((res) => {
        setAnswers(res);
      }).catch((err) => 'Error in useEffect retreiving answers');
    }).catch((err) => console.log('Error updating question helpfulness in container component.'));
  };

  const handleAnswerReport = (id) => {
    return API.reportAnswer(id).then((res) => {
      return API.getAllAnswersById(props.questionId, props.answerPage, props.answerCount).then((res) => {
        setAnswers(res);
      }).catch((err) => 'Error in handleReportAnswer retreiving answers');
    }).catch((err) => console.log(err));
  };

  useEffect(() => {
    const loadAnswers = () => {
      return API.getAllAnswersById(props.questionId, props.answerPage, props.answerCount).then((res) => {
        setAnswers(res);
      }).catch((err) => 'Error in useEffect retreiving answers');
    };

    loadAnswers();
  }, [props.answerPage, props.answerCount]);
  return (
    <div data-testid="answer-list">
      {answers.length > 0 ? answers.map((answer) => {
        return <Answer answer={answer} key={answer.answer_id} helpfulSubmit={onHandleHelpfulSubmit} reportAnswer={handleAnswerReport} />
      }) : <h6>There are currently no answers for this question. Be the first? Add an answer!</h6>}
    </div>
  );
}

export default AnswerList;