import React, { useState, useEffect } from 'react';
import LoadReview from './loadReview.jsx';
import StarComponent from './starComponent.jsx'

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
  <fieldset>
    {props.reviewData.results.length} reviews, sorted by <select name='sortReview' onChange={e => onSetData(e)}>
      <option>Newest</option>
      <option>Helpful</option>
      <option>Relevant</option>
    </select>
    <div className='reviewScroll'>
    {(moreResults) ? (
      props.reviewData.results.map((review, index) => {
        if (props.reviewStar === 0) {
          return(<LoadReview review={review} key={index}/>)
        } else {
          if (review.rating === props.reviewStar) {
            return(<LoadReview review={review} key={index}/>)
          }
        }
      })
    ) : (props.reviewStar === 0) ? (<div>
      <LoadReview review={props.reviewData.results[0]}/>
      <LoadReview review={props.reviewData.results[1]}/>
      </div>) : showTempValues()
    }
    </div>
    <div>
    </div>
    <div>
      <button onClick={e => setMoreResults(!moreResults)}>More Results</button>
      <button onClick={e => props.setShowModal(!props.showModal)}>Add Review</button>
    </div>
  </fieldset>);
}

export default ReviewsSection;