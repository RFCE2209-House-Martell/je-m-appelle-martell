import React, { useState, useEffect } from 'react';
import API from './api.js';

const Answer = (props) => {
  const { answer } = props;
  const date = new Date(answer.date).toDateString();

  return (
    <div className="answer-container" key={answer._id}>
      <div className="answer-text"><strong className="answer-body">A: </strong> {answer.body}</div>

      <div className="answer-options">
        <div data-testid="tester-name">by {answer.answerer_name} - {date} | </div>
        <div>Helpful? <button onClick={() => props.helpfulSubmit(answer.answer_id)}>Yes</button> ({answer.helpfulness}) | </div>
        <button onClick={() => props.reportAnswer(answer.answer_id)}>Report</button>
      </div>

      <div>{answer.photos.map((photo, index) => {
        return (<img src={`${photo.url.split(':')[1]}`} key={index} />)
      })}</div>
      <br></br>
    </div>
  );
}

export default Answer;