import React, { useState, useEffect } from 'react';
import API from './api.js';

const Answer = (props) => {
  const { answer } = props;
  const date = new Date(answer.date).toDateString();

  const onHandleReportSubmit = () => {
    API.reportAnswer(answer.answer_id).then((res) => {
      return res;
    }).catch((err) => console.log(err));
  };

  const onHandleHelpfulSubmit = () => {
    return API.updateHelpfulAnswer(answer.answer_id);
  };

  useEffect(() => {
    console.log(answer.helpfulness);
  }, [answer.helpfulness]);

  return (
    <div className="answer-container" key={answer._id}>
      <div className="answer-text"><strong className="answer-body">A: </strong> {answer.body}</div>

      <div className="answer-options">
        <div>by {answer.answerer_name} - {date} | </div>
        <div>Helpful? <button onClick={() => onHandleHelpfulSubmit()}>Yes</button> ({answer.helpfulness}) | </div>
        <button onClick={() => onHandleReportSubmit()}>Report</button>
      </div>

      <div>{answer.photos.map((photo, index) => {
        return (<img src={photo.url.split(':')[1]} key={index} />)
      })}</div>
      <br></br>
    </div>
  );
}

export default Answer;