import React, { useState, useEffect } from 'react';
import Modal from '../sharedFolder/modal.jsx';
import API from './api.js';
import s3API from '../../s3/api.js';

const NewAnswerModal = (props) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});

  const onHandleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    return s3API.getSecureS3URL(e.target.files[0]).then((res) => {
      setFormData({ ...formData, [e.target.name]: [res] });
    }).catch((err) => console.log('Error ' + err));
  };

  const onHandleNewAnswerSubmit = () => {
    API.createAnswer(props.questionId, formData).then((res) => {
      setShow(false);
    }).catch((err) => console.log('Error submitting answer in container component'));
  };

  useEffect(() => {
    console.log(formData, 'FORM DATA IN USE EFFECT');
  }, [formData.photos]);

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
      <button data-testid="modal-button" onClick={() => setShow(true)}>Add Answer</button>
      <Modal styles={modalStyles} show={show} onClose={() => setShow(false)}>
        <div className="modal-content-container">
          <h1 data-testid="modal-heading">SUBMIT AN ANSWER</h1>
          <div className="input-container">
            <label>USERNAME</label>
            <input type="text" name="username" placeholder="enter your username" onChange={(e) => onHandleInputChange(e)} />
          </div>

          <div className="input-container">
            <label>EMAIL</label>
            <input type="email" name="email" placeholder="enter your email" onChange={(e) => onHandleInputChange(e)} />
          </div>

          <div className="input-container">
            <label>ANSWER</label>
            <textarea name="body" placeholder="enter your answer" rows="6" cols="40" onChange={(e) => onHandleInputChange(e)} />
          </div>

          <div className="input-container">
            <label>PHOTOS</label>
            <input className="image-upload-input" type="file" name="photos" multiple accept="image/*" placeholder="select images to upload" onChange={(e) => handleImageUpload(e)} />
          </div>

          <div className="modal-footer">
            <button onClick={() => setShow(false)}>cancel</button>
            <button style={{ marginLeft: '16px' }} onClick={() => onHandleNewAnswerSubmit()}>submit</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default NewAnswerModal;