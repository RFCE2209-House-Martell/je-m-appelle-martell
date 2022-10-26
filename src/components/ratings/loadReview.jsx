import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarComponent from '../sharedFolder/starComponent.jsx'

const token = process.env.REACT_APP_API_KEY;

const LoadReview = (props) => {
  const [showFullAns, setShowFullAns] = useState(false);
  const [partAns, setPartAns] = useState(props.review.body.substring(0, 250));
  const [isYesDisabled, setIsYesDisabled] = useState(false);
  const [isReportDisabled, setIsReportDisabled] = useState(false);

  const options = { year: 'numeric', month: 'long', day: 'numeric' }

  const setReviewHelpful = (id) => {
    setIsYesDisabled(true)
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/${id}/helpful`, {
      review_id: id
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

  const setReviewReport = (id) => {
    setIsReportDisabled(true);
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/${id}/report`, {
      review_id: id
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
  <li className='reviews-list'>
    <div className='stars-and-date'>
      <div>
        <StarComponent stars={props.review.rating}/>
      </div>
      <div className='username-and-date' >
        {props.review.reviewer_name}, {new Date(props.review.date).toLocaleDateString('en', options)}
      </div>
    </div>
    <h2 className='review-title'>
      {props.review.summary}
    </h2>
    <div className='review-body'>
      {((props.review.body).length < 250) ? <p>{props.review.body}</p> : showFullAns ? <p>{props.review.body} <button onClick={e => setShowFullAns(!showFullAns)}>Show Less</button> </p> : <p>{partAns + '...'} <button onClick={e => setShowFullAns(!showFullAns)}>Show More</button> </p>}
    </div>
    {props.review.recommend && (<div>
      ✓ I recommend this product
    </div>)}
    <div className='helpful-and-report'>
      Helpful? <button className='helpful-yes' disabled={isYesDisabled} onClick={e => (setReviewHelpful(props.review.review_id))}>Yes</button> ({props.review.helpfulness}) | <button className='report-button' disabled={isReportDisabled} onClick={e => (setReviewReport(props.review.review_id))}>Report</button>
    </div>
    {props.review.response && <div className='review-response'>
      Response: {props.review.response}
    </div>}
    {(props.review.photos.length > 0) ? (
      props.review.photos.map((photo, index) => {
        return <img key={index} src={`${photo.url}`} height='50' className='reviews-images'/>
      })
    ) : <div></div>}
  </li>
  );
}

export default LoadReview;