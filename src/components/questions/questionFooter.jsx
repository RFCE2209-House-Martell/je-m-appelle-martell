import React, { useState, useEffect } from 'react';
import NewQuestionModal from './newQuestionModal.jsx';

const QuestionsFooter = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h6>Load More Answers</h6>
      <button>LOAD MORE ANSWERED QUESTIONS</button>
      <button onClick={() => setShow(true)}>ADD A QUESTION +</button>
      <NewQuestionModal show={show} onClose={() => setShow(false)}>
        ADD NEW QUESTION
      </NewQuestionModal>
    </div>
  );
}

export default QuestionsFooter;