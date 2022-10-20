import React, { useState, useEffect } from 'react';
import NewQuestionModal from './newQuestionModal.jsx';

const QuestionsFooter = (props) => {
  return (
    <div className="footer-container">
      <button className="load-answers-button" onClick={() => props.loadMoreAnswers()}>Load More Answers</button>

      <div className="footer-button-container">
        <button className="footer-button-container-button" onClick={() => props.loadMoreQuestions()} >MORE ANSWERED QUESTIONS</button>
        <NewQuestionModal productId={props.productId} />
      </div>
    </div>
  );
}

export default QuestionsFooter;