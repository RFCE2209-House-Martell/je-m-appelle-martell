import React from 'react';

const LoadReview = (props) => {
  return (
  <div>
    Each Review Stars:
    {props.review.rating}
    Username: {props.review.reviewer_name}
    Date: {props.review.date}
    <div>
      Recommended: {props.review.recommend}
    </div>
    <div>
      Title: {props.review.summary}
    </div>
    <div>
      Body: {props.review.body}
    </div>
    <div>
      Helpfulness: {props.review.helpfulness}
    </div>
    <div>
      Response: {props.review.response}
    </div>
  </div>
  );
}

export default LoadReview;