import React from 'react';
import LoadReview from './loadReview.jsx';

const ReviewsSection = (props) => {
  const data = props.sampleReviewData.results;
  return (
  <div>
    Reviews count: {props.sampleReviewData.count}
    {data.map((review, index) => {
      return(<LoadReview review={review} key={index}/>)
    })}
  </div>);
}

export default ReviewsSection;