import React, { useState, useEffect } from 'react';
import AnswerList from './answerList.jsx';
import NewAnswerModal from './NewAnswerModal.jsx';

const Question = (props) => {
  const { question_id, question_body, question_date, question_helpfulness, reported, asker_name, answers } = props.question;

  return (
    <div>
      <br></br>
      <div>
        <div>{question_id}</div>
        <div>Question: {question_body}</div>
        <div>Date Asked: {question_date}</div>
        <div>Was this helpful? {question_helpfulness}</div>
        <div>{reported || 'Not Reported'}</div>
        <div>User: {asker_name}</div>
        Helpful? <button>Yes</button>
        <NewAnswerModal />
      </div>
      <AnswerList questionId={question_id} />
    </div>
  );
}

export default Question;