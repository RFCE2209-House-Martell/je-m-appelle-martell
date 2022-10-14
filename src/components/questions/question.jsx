import React, { useState, useEffect } from 'react';

const Question = ({ question_id, question_body, question_date, question_helpfulness, reported, asker_name, answers }) => {

  return (
    <div>
      <div>{question_id}</div>
      <div>{question_body}</div>
      <div>{question_date}</div>
      <div>{question_helpfulness}</div>
      <div>{reported}</div>
      <div>{asker_name}</div>

      <div>{Array.from(answers).map((answer) => {
        return (<div key={answer.id}>
          <div>{answer.body}</div>
          <div>{answer.date}</div>
          <div>{answer.answerer_name}</div>

          <div>{answer.photos.map((photo) => {
            return (<img src={photo.url} key={photo.id} />)
          })}</div>

        </div>)

      })}</div>

    </div>
  );
}

export default Question;