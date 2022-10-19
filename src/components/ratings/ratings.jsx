import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddReview from './addReview.jsx';
import RatingsSection from './ratingsSection.jsx';
import ReviewsSection from './reviewsSection.jsx';

const token = process.env.REACT_APP_API_KEY;

const Ratings = (props) => {
  const [reviewData, setReviewData] = useState({});
  const [metaData, setMetaData] = useState({});
  const [reviewStar, setReviewStar] = useState(0);

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews', {
      headers: {
        'Authorization': token
      },
      params: {
        product_id: props.productId,
        count: 1000
      }
    })
    .then(data => {
      setReviewData(data.data);
    })
    .catch(err => {
      console.log(err);
    })

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta', {
      headers: {
        'Authorization': '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'
      },
      params: {
        product_id: props.productId
      }
    })
    .then(data => {
      setMetaData(data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div>
      <RatingsSection metaData={metaData} setAvgStars={props.setAvgStars} avgStars={props.avgStars} reviewStar={reviewStar} setReviewStar={setReviewStar}/>
      <ReviewsSection reviewData={reviewData} reviewStar={reviewStar}/>
    </div>
  );
}

export default Ratings;