import React, { useState, useEffect } from 'react';
import AnswerList from './answerList.jsx';
import NewAnswerModal from './NewAnswerModal.jsx';

const Question = (props) => {
  const { question_id, question_body, question_date, question_helpfulness, reported, asker_name, answers } = props.question;

  // on helpful click function

  // on report click function

  // on submit new answer function

  // Add question

  // Add answer

  // Paginate Questions

  // Search Answers

  return (<div>
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

    {/* <div>{Object.values(answers).map((answer) => {
      return (<div key={answer.id}>
        <div>Answer: {answer.body}</div>
        <div>by {answer.answerer_name} - {answer.date}</div>
        <div>Helpful? <button>Yes</button>: {answer.helpfulness}</div>
        <button>Report</button>

        <div>{answer.photos.map((photo, index) => {
          return (<img src={photo.split(':')[1]} key={index} />)
        })}</div>
        <br></br>
      </div>)

    })}</div> */}

  </div>
  );
}

export default Question;