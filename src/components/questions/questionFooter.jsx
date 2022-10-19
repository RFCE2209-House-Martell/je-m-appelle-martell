import React, { useState, useEffect } from 'react';
import NewQuestionModal from './newQuestionModal.jsx';

const QuestionsFooter = (props) => {
  const [show, setShow] = useState(false);

  // propogate upwards to show more answers
  // propogate upwards to load more questions

  // question modal makes api request
  return (
    <div>
      <button onClick={() => props.loadMoreAnswers()}>Load More Answers</button>
      <button>LOAD MORE ANSWERED QUESTIONS</button>
      <NewQuestionModal />
    </div>
  );
}

export default QuestionsFooter;