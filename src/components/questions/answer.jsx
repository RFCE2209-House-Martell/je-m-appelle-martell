import React, { useState, useEffect } from 'react';
import API from './api.js';

const Answer = (props) => {
  const { answer } = props;
  const date = new Date(answer.date).toDateString();

  const onHandleReportSubmit = (e) => {
    // API call to report
    // set reported to true
    API.reportQuestion(answer.answer_id).then(() => {

    }).catch((err) => console.log('Error reporting question in container component'));
  };

  return (
    <div key={answer._id}>
      <div><h3>A: {answer.body} </h3></div>
      <div>by {answer.answerer_name} - {date}</div>
      <div>Helpful? <button>Yes</button> ({answer.helpfulness})</div>
      <button>Report</button>

      <div>{answer.photos.map((photo, index) => {
        return (<img src={photo.url.split(':')[1]} key={index} />)
      })}</div>
      <br></br>
    </div>
  );
}

export default Answer;