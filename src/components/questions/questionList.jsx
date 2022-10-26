import React, { useState, useEffect } from 'react';
import Question from './question.jsx';

const QuestionList = (props) => {
  const questions = props.questions;
  return (
    <div>
      {questions.length > 0 ? questions.map((question) => {
        return <Question key={question.question_id} question={question} answerPage={props.answerPage} answerCount={props.answerCount} helpfulSubmit={props.helpfulSubmit} />
      }) : <h3>There are currently no questions with your criterea. Be the first? Ask a question!</h3>}
    </div>
  );
}

export default QuestionList;

