import React, { useState, useEffect } from 'react';
import Modal from '../sharedFolder/modal.jsx';

const NewQuestionModal = (props) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});

  const onHandleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onHandleNewQuestionSubmit = () => {
    API.reportQuestion(formData, props.question.question_id).then(() => {

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
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div>
      <button onClick={() => setShow(true)}>ADD A QUESTION +</button>
      <Modal styles={modalStyles} show={show} onClose={() => setShow(false)}>
        <input type="text" name="name" placeholder="enter your username" />
        <input type="email" name="email" placeholder="enter your email" />
        <input type="text" name="body" placeholder="enter your question" />
        <button onClick={() => setShow(false)}>cancel</button>
        <button onClick={() => console.log('question submitted')}>submit</button>
      </Modal>
    </div>
  );
}

export default NewQuestionModal;

//         "question_id": 37,
//         "question_body": "Why is this product cheaper here than other sites?",
//         "question_date": "2018-10-18T00:00:00.000Z",
//         "asker_name": "williamsmith",
//         "question_helpfulness": 4,
//         "reported": false,