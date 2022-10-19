import React, { useState, useEffect } from 'react';
import Modal from '../sharedFolder/modal.jsx';

const NewAnswerModal = (props) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});

  const onHandleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onHandleNewAnswerSubmit = () => {
    API.createQuestion(props.questionID, formData).then(() => {

    }).catch((err) => console.log('Error submitting answer in container component'));
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
      <button onClick={() => setShow(true)}>Add Answer</button>
      <Modal styles={modalStyles} show={show} onClose={() => setShow(false)}>
        <input type="text" name="username" placeholder="enter your username" />
        <input type="email" name="email" placeholder="enter your email" />
        <textarea name="body" placeholder="enter your answer" />
        <textarea type="photos" name="photos" />
        <button onClick={() => setShow(false)}>cancel</button>
        <button onClick={() => console.log('answer submitted')}>submit</button>
      </Modal>
    </div>
  );
}

export default NewAnswerModal;


// question_id 	integer 	Required ID of the question to post the answer for
// body 	text 	Text of question being asked
// name 	text 	Username for question asker
// email 	text 	Email address for question asker
// photos 	[text] 	An array of urls corresponding to images to display