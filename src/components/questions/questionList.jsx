import React, { useState, useEffect } from 'react';
import Question from './question.jsx';

const QuestionList = (props) => {
  const questions = props.questions;

  return (
    <div>
      {questions.length > 0 ? questions.map((question) => {
        return <Question key={question.question_id} question={question} answerPage={props.answerPage} answerCount={props.answerCount} />
      }) : <h6>There are currently no questions for this product. Be the first? Ask a question!</h6>}
    </div>
  );
}

export default QuestionList;

