import React, { useState } from 'react';
import LoadReview from './loadReview.jsx';

const ReviewsSection = (props) => {
  const [moreResults, setMoreResults] = useState(false);
  if (Object.keys(props.reviewData).length < 1) {
    return (
      <div>
        No reviews yet
      </div>
    )
  }
  const data = props.reviewData.results;
  return (
  <div>
    Reviews count: {data.length}
    {(moreResults) ? (
      data.map((review, index) => {
        if (props.reviewStar === 0) {
          return(<LoadReview review={review} key={index}/>)
        } else {
          if (review.rating === props.reviewStar) {
            return(<LoadReview review={review} key={index}/>)
          }
        }
      })
    ) : <div>
      <LoadReview review={data[0]}/>
      <LoadReview review={data[1]}/>
      </div>
    }
  </div>);
}

export default ReviewsSection;