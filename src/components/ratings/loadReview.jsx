import React from 'react';

const LoadReview = (props) => {
  return (
  <li>
    Stars:
    {props.review.rating}
    , Username: {props.review.reviewer_name}
    , Date: {props.review.date}
    {props.review.recommend && (<div>
      ✓ I recommend this product
    </div>)}
    <div>
      Title: {props.review.summary}
    </div>
    <div>
      Body: {props.review.body}
    </div>
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