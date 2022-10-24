import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RatingsSection from './ratingsSection.jsx';
import ReviewsSection from './reviewsSection.jsx';
import AddReview from './addReview.jsx';
import './ratingsStyles.css'

const token = process.env.REACT_APP_API_KEY;

const Ratings = (props) => {
  const [reviewData, setReviewData] = useState({});
  const [metaData, setMetaData] = useState({});
  const [reviewStar, setReviewStar] = useState(0);
  const [sortedData, setSortedData] = useState('newest');
  const [showModal, setShowModal] = useState(false);

  const getReviews = () => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews', {
      headers: {
        Authorization: token
      },
      params: {
        product_id: props.productId,
        count: 1000,
        sort: sortedData
      }
    })
    .then(res => {
      setReviewData(res.data);
    })
    .catch(err => {
      console.log(err);
    })

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta', {
      headers: {
        'Authorization': token
      },
      params: {
        product_id: props.productId
      }
    })
    .then(res => {
      setMetaData(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }


  useEffect(() => {
    getReviews();
  }, [sortedData]);

  return (
    <div>
      <RatingsSection metaData={metaData} setAvgStars={props.setAvgStars} avgStars={props.avgStars} reviewStar={reviewStar} setReviewStar={setReviewStar}/>
      <ReviewsSection reviewData={reviewData} reviewStar={reviewStar} setSortedData={setSortedData} sortedData={sortedData} showModal={showModal} setShowModal={setShowModal} getReviews={getReviews}/>
      <AddReview showModal={showModal} setShowModal={setShowModal} characteristics={metaData.characteristics}/>
    </div>
  );
}

export default Ratings;