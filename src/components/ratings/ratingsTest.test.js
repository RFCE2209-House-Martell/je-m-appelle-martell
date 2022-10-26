import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ReactDOM from 'react-dom';
import Ratings from './ratings.jsx'
import RatingsSection from './ratingsSection.jsx'
import ReviewsSection from './reviewsSection.jsx'
import LoadReview from './loadReview.jsx';
import React from 'react';
import axios from 'axios';

jest.mock('axios');

const metaData = {
  "product_id": "2",
  "ratings": {
    2: 1,
    3: 1,
    4: 2,
    // ...
  },
  "recommended": {
    0: 5
    // ...
  },
  "characteristics": {
    "Size": {
      "id": 14,
      "value": "4.0000"
    },
    "Width": {
      "id": 15,
      "value": "3.5000"
    },
    "Comfort": {
      "id": 16,
      "value": "4.0000"
    }
    // ...
  }
};

const reviewData = {
  "product": "2",
  "page": 0,
  "count": 5,
  "results": [
    {
      "review_id": 5,
      "rating": 3,
      "summary": "I'm enjoying wearing these shades",
      "recommend": false,
      "response": null,
      "body": "Comfortable and practical.",
      "date": "2019-04-14T00:00:00.000Z",
      "reviewer_name": "shortandsweeet",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/review_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/review_5_photo_number_2.jpg"
        },
        // ...
      ]
    },
    {
      "review_id": 3,
      "rating": 4,
      "summary": "I am liking these glasses",
      "recommend": false,
      "response": "Glad you're enjoying the product!",
      "body": "They are very dark. But that's good because I'm in very sunny spots",
      "date": "2019-06-23T00:00:00.000Z",
      "reviewer_name": "bigbrotherbenjamin",
      "helpfulness": 5,
      "photos": [],
    },
    // ...
  ]
}

let avgStars = 4;

const setAvgStars = (data) => {
  avgStars = data;
};

let reviewStar = 0;

const setReviewStar = (data) => {
  reviewStar = data;
}

const productId = 66642;

const sortedData = 'newest'

const setSortedData = (data) => {
  sortedData = data;
}

const showModal = false;

const setShowModal = (data) => {
  showModal = data;
}

const getReviews = () => {

}

describe('Overall Ratings Test', () => {

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element
    });
    axios.get.mockImplementation((url) => {
      if (url === 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews') {
        return Promise.resolve({data: reviewData})
      } else {
        return Promise.resolve({data: metaData})
      }
    })
  });
  afterEach(() => {
    ReactDOM.createPortal.mockClear();
    cleanup();
  })

  it('Sanity Check', () => {
    expect(true).toBe(true);
  })

  it('Should render', async () => {
    const {container} = render(<Ratings productId={productId} avgStars={avgStars} setAvgStars={setAvgStars}/>);

    const reviewsList = await waitFor(() => container.getElementsByClassName('.reviews-list'));
    const ratingsSection = await waitFor(() => container.getElementsByClassName('.ratingsSection'));
    const  reviewsSection = await waitFor(() => container.getElementsByClassName('.reviewsSection'));

    expect(reviewsList).toBeInTheDocument;
    expect(ratingsSection).toBeInTheDocument;
    expect(reviewsSection).toBeInTheDocument;
  })

  it('Should render Ratings', async () => {

    const {container} = render(<RatingsSection metaData={metaData} setAvgStars={setAvgStars} avgStars={avgStars} reviewStar={reviewStar} setReviewStar={setReviewStar}/>);


    const ratingsStars = await waitFor(() => container.getElementsByClassName('.ratings-stars'));
    const totalStars = await waitFor(() => container.getElementsByClassName('.total-stars'));
    const starsComponent = await waitFor(() => container.getElementsByClassName('.stars-component'));
    const recStars = await waitFor(() => container.getElementsByClassName('.rec-stars'));
    const progressButtons = await waitFor(() => container.getElementsByClassName('.progress-buttons'));
    const progressBars = await waitFor(() => container.getElementsByClassName('.progress-bars'));
    const fiveStarProgress = await waitFor(() => container.querySelector('#fiveStarProgress'));
    const fourStarProgress = await waitFor(() => container.querySelector('#fourStarProgress'));
    const threeStarProgress = await waitFor(() => container.querySelector('#threeStarProgress'));
    const twoStarProgress = await waitFor(() => container.querySelector('#twoStarProgress'));
    const oneStarProgress = await waitFor(() => container.querySelector('#oneStarProgress'));

    expect(ratingsStars).toBeInTheDocument;
    expect(totalStars).toBeInTheDocument;
    expect(starsComponent).toBeInTheDocument;
    expect(recStars).toBeInTheDocument;
    expect(progressButtons).toBeInTheDocument;
    expect(progressBars).toBeInTheDocument;
    expect(fiveStarProgress).toBeInTheDocument;
    expect(fourStarProgress).toBeInTheDocument;
    expect(threeStarProgress).toBeInTheDocument;
    expect(twoStarProgress).toBeInTheDocument;
    expect(oneStarProgress).toBeInTheDocument;
  })

  it('Should render Reviews', async () => {
    const {container} = render(<ReviewsSection reviewData={reviewData} reviewStar={reviewStar} setSortedData={setSortedData} sortedData={sortedData} showModal={showModal} setShowModal={setShowModal} getReviews={getReviews}/>)

    const reviewsScroll = await waitFor(() => container.getElementsByClassName('.reviews-scroll'));
    const reviewsButtons = await waitFor(() => container.getElementsByClassName('.reviews-buttons'));
    const moreResultsButton = await waitFor(() => container.getElementsByClassName('.more-results-button'));
    const addReviewButton = await waitFor(() => container.getElementsByClassName('.add-review-button'));

    expect(reviewsScroll).toBeInTheDocument;
    expect(reviewsButtons).toBeInTheDocument;
    expect(moreResultsButton).toBeInTheDocument;
    expect(addReviewButton).toBeInTheDocument;
  })

  it('Should render LoadReview', async () => {
    const {container} = render(reviewData.results.map((review, index) => {
      return(<LoadReview review={review} key={index} getReviews={getReviews}/>)
    }))

    const reviewsList = await waitFor(() => container.getElementsByClassName('.reviews-list'));
    const starsAndDate = await waitFor(() => container.getElementsByClassName('.stars-and-date'));
    const usernameAndDate = await waitFor(() => container.getElementsByClassName('.username-and-date'));
    const reviewTitle = await waitFor(() => container.getElementsByClassName('.review-title'));
    const reviewBody = await waitFor(() => container.getElementsByClassName('.review-body'));
    const helpfulAndReport = await waitFor(() => container.getElementsByClassName('.helpful-and-report'));
    const helpfulYes = await waitFor(() => container.getElementsByClassName('.helpful-yes'));
    const reportButton = await waitFor(() => container.getElementsByClassName('.report-button'));

    expect(reviewsList).toBeInTheDocument;
    expect(starsAndDate).toBeInTheDocument;
    expect(usernameAndDate).toBeInTheDocument;
    expect(reviewTitle).toBeInTheDocument;
    expect(reviewBody).toBeInTheDocument;
    expect(helpfulAndReport).toBeInTheDocument;
    expect(helpfulYes).toBeInTheDocument;
    expect(reportButton).toBeInTheDocument;
  })
})