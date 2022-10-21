import React, { useState, useEffect } from 'react';
import AnswerList from './answerList.jsx';
import NewAnswerModal from './NewAnswerModal.jsx';
import API from './api.js';

const Question = (props) => {
  const { question_id, question_body, question_date, question_helpfulness, reported, asker_name, answers } = props.question;

  const date = new Date(question_date).toDateString();

  const onHandleReportSubmit = () => {
    return API.reportQuestion(question_id);
  };

  const onHandleHelpfulSubmit = () => {
    return API.updateHelpfulQuestion(question_id);
  };

  return (
    <div>
      <br></br>
      <div className="question-container">
        <div><strong className="question-body">Q: {question_body}</strong></div>
        {/* <div>by {asker_name},  {date}</div> */}
        <div>
          {/* <button onClick={() => onHandleReportSubmit()}>Report</button> */}
        </div>
        <div>Helpful?  <button onClick={() => onHandleHelpfulSubmit()}>Yes</button> ({question_helpfulness})</div>
        <NewAnswerModal questionId={question_id} />
      </div>

      <AnswerList questionId={question_id} answerCount={props.answerCount} answerPage={props.answerPage} />
    </div>
  );
}

export default Question;