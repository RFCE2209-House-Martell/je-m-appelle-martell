import React, { useState, useEffect } from 'react';
import AnswerList from './answerList.jsx';
import NewAnswerModal from './newAnswerModal.jsx';
import API from './api.js';

const Question = (props) => {
  const { question_id, question_body, question_date, question_helpfulness, reported, asker_name, answers } = props.question;

  const date = new Date(question_date).toDateString();

  return (
    <div>
      <br></br>
      <div className="question-container">
        <div className="question-body-container"><strong className="question-body">Q: {question_body}</strong></div>
        <div className="question-options-container">Helpful?  <button onClick={() => props.helpfulSubmit(question_id)}>Yes</button> ({question_helpfulness})</div>
        <NewAnswerModal questionId={question_id} />
      </div>

      <AnswerList questionId={question_id} answerCount={props.answerCount} answerPage={props.answerPage} helpfulSubmit={props.helpfulSubmit} />
    </div>
  );
}

export default Question;