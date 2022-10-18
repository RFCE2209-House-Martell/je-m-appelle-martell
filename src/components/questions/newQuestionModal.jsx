import React, { useState, useEffect } from 'react';
import Modal from '../sharedFolder/modal.jsx';

const NewQuestionModal = (props) => {
  const [show, setShow] = useState(false);

  const modalStyles = {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div>
      <button onClick={() => setShow(true)}>ADD A QUESTION +</button>
      <Modal style={props.styles} show={show} onClose={() => setShow(false)}>
        <input type="text" placeholder="enter your username" />
        <input type="text" placeholder="enter your question" />
        <button onClick={() => setShow(false)}>cancel</button>
        <button onClick={() => console.log('question submitted')}>submit</button>
      </Modal>
    </div>
  );
}

export default NewQuestionModal;