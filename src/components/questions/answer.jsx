import React, { useState, useEffect } from 'react';

const Answer = (props) => {
  const { answer } = props;

  return (
    <div key={answer._id}>
      <div>Answer: {answer.body}</div>
      <div>by {answer.answerer_name} - {answer.date}</div>
      <div>Helpful? <button>Yes</button>: {answer.helpfulness}</div>
      <button>Report</button>

      <div>{answer.photos.map((photo, index) => {
        return (<img src={photo.url.split(':')[1]} key={index} />)
      })}</div>
      <br></br>
    </div>
  );
}

export default Answer;