import React, { useState, useEffect } from 'react';
import LoadReview from './loadReview.jsx';

const ReviewsSection = (props) => {
  const data = props.reviewData.results;
  const [moreResults, setMoreResults] = useState(false);

  if (Object.keys(props.reviewData).length < 1) {
    return (
      <div>
        No reviews yet
      </div>
    )
  }

  const showTempValues = () => {
    console.log('yes')
    let times = 0;
    return data.map((review, index) => {
      if (review.rating === props.reviewStar && times < 2) {
        times++;
        return(<LoadReview review={review} key={index}/>)
      }
    })
  }

  return (
  <div>
    Reviews count: {data.length}
    <div class='reviewScroll'>
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
    ) : (props.reviewStar === 0) ? (<div>
      <LoadReview review={data[0]}/>
      <LoadReview review={data[1]}/>
      </div>) : showTempValues()
    }
    </div>
    <div>
      <button onClick={e => setMoreResults(!moreResults)}>More Results</button>
    </div>
  </div>);
}

export default ReviewsSection;