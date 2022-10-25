import React, { useState, useEffect } from 'react';
import Modal from '../sharedFolder/modal.jsx';
import StarRating from './starRating.jsx'

const AddReview = (props) => {
  if (props.showModal === false) {
    return null
  }

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

  const [recommended, setRecommended] = useState(false)
  const [revForm, setRevForm] = useState({})

  const newInput = (e) => {
    setRevForm({...revForm, [e.target.name]: e.target.value});
  }


  return (
    <Modal styles={modalStyles} show={props.showModal} onClose={() => props.setShowModal(false)}>
    <div className='modal-body'>
      <div>
        Write a review
      </div>
      <div><StarRating revForm={revForm} setRevForm={setRevForm}/></div>
      <fieldset>
        <div>Recommend? </div>
        <div>
          <div>
            <input type='radio' name='recommend' id='recYes' value={true} onChange={e => newInput(e)} required></input><label htmlFor='recYes'>Yes</label>
          </div>
          <div>
            <input type='radio' name='recommend' id='recNo' value={false} onChange={e => newInput(e)}></input><label htmlFor='recNo'>No</label>
          </div>
        </div>
      </fieldset>
      <div>
        <input type='text' id='rev-title' name='summary' maxLength='60' placeholder='Title' onChange={e => newInput(e)} required></input>
      </div>
      <div>
        <input type='text' id='rev-body' maxLength='1000' name='body' minLength='50' placeholder='Body' onChange={e => newInput(e)}required></input>
      </div>
      <div>
        Add Photos
        <input type='file' accept='image/*' id='revAddImage' plaecholder='Add Image'></input>
      </div>
      <div>
        {Object.keys(props.characteristics).map((charKey, index) => {
          return(<div>{charKey}<input type='range' name={props.characteristics[charKey].id} key={charKey+index} max='5' min='1' onChange={e => newInput(e)} required></input></div>)
        })}
      </div>
      <div>
        Email: <input type='email' name='email' id='revEmail' onChange={e => newInput(e)} required></input>
      </div>
      <div>
        Username: <input type='text' name='name' id='revUsername' onChange={e => newInput(e)} required></input>
      </div>
      <button onClick={e => (props.setShowModal(false), console.log(revForm))}>Submit</button>
      <button onClick={e => props.setShowModal(false)}>Cancel</button>
      </div>
    </Modal>

    );
}

export default AddReview;