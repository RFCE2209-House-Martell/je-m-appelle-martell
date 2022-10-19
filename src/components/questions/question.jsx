import React, { useState, useEffect } from 'react';
import AnswerList from './answerList.jsx';
import NewAnswerModal from './NewAnswerModal.jsx';

const Question = (props) => {
  const { question_id, question_body, question_date, question_helpfulness, reported, asker_name, answers } = props.question;

  const date = new Date(question_date).toDateString();

  return (
    <div>
      <br></br>
      <div>
        <div><h3>Q: {question_body}</h3></div>
        <div>by {asker_name},  {date}</div>
        <div>Helpful?  <button>Yes</button> ({question_helpfulness})</div>
        <NewAnswerModal />
      </div>
      <AnswerList questionId={question_id} count={props.count} page={props.page} />
    </div>
  );
}

export default Question;