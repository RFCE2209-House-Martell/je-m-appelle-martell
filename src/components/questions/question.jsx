import React, { useState, useEffect } from 'react';

const Question = (props) => {
  const { question_id, question_body, question_date, question_helpfulness, reported, asker_name, answers } = props.question;

  // on helpful click function

  // on report click function

  // on submit new answer function

  return (<div>
    <br></br>
    <div>
      <div>{question_id}</div>
      <div>Question: {question_body}</div>
      <div>Date Asked: {question_date}</div>
      <div>Was this helpful? {question_helpfulness}</div>
      <div>{reported || 'Not Reported'}</div>
      <div>User: {asker_name}</div>
    </div>

    <div>{Object.values(answers).map((answer) => {
      return (<div key={answer.id}>
        <div>Answer: {answer.body}</div>
        <div>Date Answered: {answer.date}</div>
        <div>User: {answer.answerer_name}</div>
        <div>Was this helpful?: {answer.helpfulness}</div>

        <div>{answer.photos.map((photo) => {
          return (<img src={photo.split(':')[1]} key={photo.id} />)
        })}</div>
        <br></br>
      </div>)

    })}</div>

  </div>
  );
}

export default Question;