import React, { useState, useEffect } from 'react';
import LoadReview from './loadReview.jsx';

const ReviewsSection = (props) => {
  if (Object.keys(props.reviewData).length < 1) {
    return (
      <div>
        No reviews yet
      </div>
    )
  }

  const [data, setData] = useState(props.reviewData.results);
  const [helpfulData, setHelpfulData] = useState([]);
  const [newestData, setNewestData] = useState([]);
  const [relevantData, setRelevantData] = useState([]);
  const [moreResults, setMoreResults] = useState(false);

  const showTempValues = () => {
    let times = 0;
    return data.map((review, index) => {
      if (review.rating === props.reviewStar && times < 2) {
        times++;
        return(<LoadReview review={review} key={index}/>)
      }
    })
  }

  const findHelpfulData = () => {
    let tempData = props.reviewData.results;
    tempData = tempData.sort((a, b) => {
      a.helpfulness - b.helpfulness
    })
    console.log('Helpfull: ', tempData)
    setHelpfulData(tempData);
  }

  const findNewestData = () => {
    let tempData = props.reviewData.results;
    console.log(new Date(tempData[0].date).getTime())
    console.log(new Date(tempData[1].date).getTime())
    tempData.sort((a, b) => {
      ((new Date(a.date).getTime()) - (new Date(b.date).getTime()))
    })

    console.log('Newest: ', tempData)
    setNewestData(tempData);
  }

  useEffect(() => {
    findHelpfulData()
    findNewestData()
  }, [])

  return (
  <div>
    {data.length} reviews, sorted by <select name='sortReview'>
      <option>Newest</option>
      <option>Helpful</option>
      <option>Relevant</option>
    </select>
    <div className='reviewScroll'>
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