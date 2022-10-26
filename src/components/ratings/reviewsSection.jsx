import React, { useState, useEffect } from 'react';
import LoadReview from './loadReview.jsx';
import StarComponent from '../sharedFolder/starComponent.jsx'

const ReviewsSection = (props) => {

  if (Object.keys(props.reviewData).length < 1) {
    return (
      <div>
        No reviews yet
      </div>
    )
  }

  const [moreResults, setMoreResults] = useState(false);

  const showTempValues = () => {
    let times = 0;
    return props.reviewData.results.map((review, index) => {
      if (review.rating === props.reviewStar && times < 2) {
        times++;
        return(<LoadReview review={review} key={index}/>)
      }
    })
  }

  const onSetData = (e) => {
    let option = e.target.value;
    if (option === 'Helpful') {
      props.setSortedData('helpful');
    } else if (option === 'Newest') {
      props.setSortedData('newest');
    } else if (option === 'Relevant') {
      props.setSortedData('relevant');
    }
  }




  return (
  <div className='reviewsSection'>
    {props.reviewData.results.length} reviews, sorted by <select name='sortReview' onChange={e => onSetData(e)}>
      <option>Newest</option>
      <option>Helpful</option>
      <option>Relevant</option>
    </select>
    <div className='reviews-scroll'>
    {(moreResults) ? (
      props.reviewData.results.map((review, index) => {
        if (props.reviewStar === 0) {
          return(<LoadReview review={review} key={index} getReviews={props.getReviews}/>)
        } else {
          if (review.rating === props.reviewStar) {
            return(<LoadReview review={review} key={index} getReviews={props.getReviews}/>)
          }
        }
      })
    ) : (props.reviewStar === 0) ? (<div>
      <LoadReview review={props.reviewData.results[0]} getReviews={props.getReviews}/>
      <LoadReview review={props.reviewData.results[1]} getReviews={props.getReviews}/>
      </div>) : showTempValues()
    }
    </div>
    <div className='reviews-buttons'>
      <button onClick={e => setMoreResults(!moreResults)} className='more-results-button'>More Results</button>
      <button onClick={e => props.setShowModal(!props.showModal)} className='add-review-button'>Add Review +</button>
    </div>
  </div>);
}

export default ReviewsSection;