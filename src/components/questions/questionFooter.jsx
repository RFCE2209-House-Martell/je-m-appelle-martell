import React, { useState, useEffect } from 'react';
import NewQuestionModal from './newQuestionModal.jsx';

const QuestionsFooter = (props) => {
  return (
    <div>
      <button onClick={() => props.loadMoreAnswers()}>Load More Answers</button>
      <button onClick={() => props.loadMoreQuestions()} >LOAD MORE ANSWERED QUESTIONS</button>
      <NewQuestionModal />
    </div>
  );
}

export default QuestionsFooter;