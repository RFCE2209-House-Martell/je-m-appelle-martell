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


  return (
    <Modal styles={modalStyles} show={props.showModal} onClose={() => props.setShowModal(false)}>
    <div className='modal-body'>
      <div>
        Write a review
      </div>
      <div><StarRating/></div>
      <fieldset>
        <div>Recommend? </div>
        <div>
          <div>
            <input type='radio' name='recButton' id='recYes' value='Yes' required></input><label for='recYes'>Yes</label>
          </div>
          <div>
            <input type='radio' name='recButton' id='recNo' value='No'></input><label for='recNo'>No</label>
          </div>
        </div>
      </fieldset>
      <div>
        <input type='text' id='revTitle' maxLength='60' placeholder='Title' required></input>
      </div>
      <div>
        <input type='text' id='revBody' maxLength='1000' minLength='50' placeholder='Body' required></input>
      </div>
      <div>
        Add Photos
        <input type='file' accept='image/*' id='revAddImage' plaecholder='Add Image'></input>
      </div>
      <div>
        {Object.keys(props.characteristics).map((charKey, index) => {
          return(<div>{charKey}<input type='range' key={charKey+index} max='5' min='1' required></input></div>)
        })}
      </div>
      <div>
        Email: <input type='email' id='revEmail' required></input>
      </div>
      <div>
        Username: <input type='text' id='revUsername' required></input>
      </div>
      <button onClick={e => props.setShowModal(false)}>Submit</button>
      <button onClick={e => props.setShowModal(false)}>Cancel</button>
      </div>
    </Modal>

    );
}

export default AddReview;