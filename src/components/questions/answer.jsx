import React, { useState, useEffect } from 'react';
import API from './api.js';

const Answer = (props) => {
  const { answer } = props;
  const date = new Date(answer.date).toDateString();

  const onHandleReportSubmit = () => {
    return API.reportAnswer(answer.answer_id);
  };

  const onHandleHelpfulSubmit = () => {
    return API.updateHelpfulAnswer(answer.answer_id);
  };

  return (
    <div key={answer._id}>
      <div><h3>A: {answer.body} </h3></div>
      <div>by {answer.answerer_name} - {date}</div>
      <div>Helpful? <button onClick={() => onHandleHelpfulSubmit()}>Yes</button> ({answer.helpfulness})</div>
      <button onClick={() => onHandleReportSubmit()}>Report</button>

      <div>{answer.photos.map((photo, index) => {
        return (<img src={photo.url.split(':')[1]} key={index} />)
      })}</div>
      <br></br>
    </div>
  );
}

export default Answer;