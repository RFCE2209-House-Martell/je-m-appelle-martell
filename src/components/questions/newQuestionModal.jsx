import React, { useState, useEffect } from 'react';
import Modal from '../sharedFolder/modal.jsx';
import API from './api.js';

const NewQuestionModal = (props) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});

  const onHandleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onHandleNewQuestionSubmit = () => {
    API.createQuestion(formData, props.productId).then((res) => {
      setShow(false);
    }).catch((err) => console.log('Error submitting new question in container component'));
  };

  const modalStyles = {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div>
      <button className="add-question-button" onClick={() => setShow(true)}>ADD A QUESTION +</button>
      <Modal styles={modalStyles} show={show} onClose={() => setShow(false)}>
        <div className="modal-content-container">
          <h1>ASK A QUESTION</h1>
          <div className="input-container">
            <label>NAME</label>
            <input type="text" name="name" placeholder="enter your username" onChange={(e) => onHandleInputChange(e)} />
          </div>

          <div className="input-container">
            <label>EMAIL</label>
            <input type="email" name="email" placeholder="enter your email" onChange={(e) => onHandleInputChange(e)} />
          </div>

          <div className="input-container">
            <label>QUESTION</label>
            <input type="text" name="body" placeholder="enter your question" onChange={(e) => onHandleInputChange(e)} />
          </div>

          <div className="modal-footer">
            <button onClick={() => setShow(false)}>cancel</button>
            <button style={{ marginLeft: '16px' }} onClick={() => onHandleNewQuestionSubmit()}>submit</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default NewQuestionModal;