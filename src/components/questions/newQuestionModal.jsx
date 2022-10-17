import React, { useState, useEffect } from 'react';
import Modal from '../sharedFolder/modal.jsx';

const NewQuestionModal = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>ADD A QUESTION +</button>
      <Modal show={show} onClose={() => setShow(false)}>
        "Whatever you want to render in the modal"
      </Modal>
    </div>
  );
}

export default NewQuestionModal;