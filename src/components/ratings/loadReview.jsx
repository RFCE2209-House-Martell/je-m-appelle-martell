import React, { useState } from 'react';
import StarComponent from '../sharedFolder/starComponent.jsx'

const LoadReview = (props) => {
  const [showFullAns, setShowFullAns] = useState(false);
  const [partAns, setPartAns] = useState(props.review.body.substring(0, 250))

  return (
  <li className='reviews-list'>
    <div className='stars-and-date'>
      <div>
        <StarComponent stars={props.review.rating} />
      </div>
      <div className='username-and-date' >
        {props.review.reviewer_name}, {new Date(props.review.date).toDateString()}
      </div>
    </div>
    <div>
      Title: {props.review.summary}
    </div>
    <div>
      Body: {((props.review.body).length < 250) ? <div>{props.review.body}</div> : showFullAns ? <div>{props.review.body} <button onClick={e => setShowFullAns(!showFullAns)}>Show Less</button> </div> : <div>{partAns + '...'} <button onClick={e => setShowFullAns(!showFullAns)}>Show More</button> </div>}
    </div>
    {props.review.recommend && (<div>
      ✓ I recommend this product
    </div>)}
    <div>
      Helpful? Yes ({props.review.helpfulness}) | Report
    </div>
    {props.review.response && <div>
      Response: {props.review.response}
    </div>}
    {(props.review.photos.length > 0) ? (
      props.review.photos.map((photo, index) => {
        return <img key={index} src={`${photo.url}`} height='50' />
      })
    ) : <div></div>}
  </li>
  );
}

export default LoadReview;