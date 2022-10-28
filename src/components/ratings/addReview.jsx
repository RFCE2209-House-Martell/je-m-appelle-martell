import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../sharedFolder/modal.jsx';
import StarRating from './starRating.jsx'
import s3API from '../../s3/api.js';
import CharAddReview from './charAddReview.jsx';

const token = process.env.REACT_APP_API_KEY;

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
  const [revForm, setRevForm] = useState({product_id: props.productId, rating: 0, summary: '', body: '', recommend: false, name: '', email: '', photos: [], characteristics: {}})
  let picturesArray = []
  const [bodyCount, setBodyCount] = useState(0);
  const [titleCount, setTitleCount] = useState(0);



  const newInput = (e) => {
    setRevForm({...revForm, [e.target.name]: e.target.value});
  }

  const charHandler = (e) => {
    setRevForm({...revForm, characteristics: {...revForm.characteristics, [e.target.name]: Number(e.target.value)}})
  }

  const picturesHandler = (e) => {

    let pictures = Object.keys(e.target.files).map((photo, index) => {
      return new Promise((resolve, reject) => {
        s3API.getSecureS3URL(e.target.files[index])
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        })
      })
    })

    Promise.all(pictures)
    .then((data) => {
      data.forEach(res => {
        if (res) {
          picturesArray.push(res)
        }
      })
      setRevForm({...revForm, photos: picturesArray})
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleSubmit = () => {
    props.setShowModal(false);
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews',
    {
      product_id: revForm.product_id,
      rating: revForm.rating,
      summary: revForm.summary,
      body: revForm.body,
      recommend: (revForm.recommend === 'true' ? true : false),
      name: revForm.name,
      email: revForm.email,
      photos: revForm.photos,
      characteristics: revForm.characteristics
    }, {
      headers: {
        Authorization: token
      }
    })
    .then(res => {
      props.getReviews()
    })
    .catch(err => {
      console.log(err)
    })
  }


  return (
    <Modal styles={modalStyles} show={props.showModal} onClose={() => props.setShowModal(false)}>
    <div className='modal-body'>
      <h1>
        Write a review
      </h1>
      <div>
        <StarRating revForm={revForm} setRevForm={setRevForm}/>
      </div>
      <fieldset>
        <div>Recommend? </div>
        <div>
          <div>
            <input type='radio' name='recommend' id='recYes' value={true} onChange={e => (newInput(e))} required></input><label htmlFor='recYes'>Yes</label>
          </div>
          <div>
            <input type='radio' name='recommend' id='recNo' value={false} onChange={e => (newInput(e))}></input><label htmlFor='recNo'>No</label>
          </div>
        </div>
      </fieldset>
      <div>
        <textarea type='text' id='rev-title' name='summary' maxLength='60' placeholder='Title' onChange={e => (newInput(e), setTitleCount(e.target.value.length))} required></textarea>
        <div className='remaining-characters'>Remaining Characters: {60-titleCount}</div>
      </div>
      <div>
        <textarea type='text' id='rev-body' maxLength='1000' name='body' minLength='50' placeholder='Body' onChange={e => (newInput(e), setBodyCount(e.target.value.length))}required></textarea>
        <div className='remaining-characters'>Remaining Characters: {1000-bodyCount}</div>
      </div>
      <div>
        Add Photos
        <input type='file' multiple accept='image/*' id='revAddImage' plaecholder='Add Image' onChange={e => picturesHandler(e)}></input>
      </div>
      <div>
        {Object.keys(props.characteristics).map((charKey, index) => {
          return(<CharAddReview charKey={charKey} obj={props.characteristics[charKey]} name={props.characteristics[charKey].id} key={index} charHandler={charHandler}/>)
        })}
      </div>
      <div>
        Email: <input type='email' name='email' id='revEmail' onChange={e => newInput(e)} required></input>
      </div>
      <div>
        Username: <input type='text' name='name' id='revUsername' onChange={e => newInput(e)} required></input>
      </div>
        <button type='submit' onClick={e => (handleSubmit())}>Submit</button>
        <button onClick={e => props.setShowModal(false)}>Cancel</button>
    </div>
    </Modal>

    );
}

export default AddReview;