import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Ratings from './ratings.jsx'
import React from 'react';

test('Sanity Check', () => {
  expect(true).toBe(true);
})

test('Should render', () => {
  render(<Ratings/>)

  const modalBody = screen.querySelector('.modal-body');
  const reviewsList = screen.querySelector('.reviews-list');
  const ratingsSection = screen.querySelector('.ratingsSection');
  const  reviewsSection = screen.querySelector('.reviewsSection');

  expect(modalBody).toBe(null);
  expect(reviewsList).toBeInTheDocument;
  expect(ratingsSection).toBeInTheDocument;
  expect(reviewsSection).toBeInTheDocument;
})

test('Should render Ratings', () => {
  render(<Ratings/>);
  const ratingsStars = screen.querySelector('.ratings-stars');
  const totalStars = screen.querySelector('.total-stars');
  const starsComponent = screen.querySelector('.stars-component');
  const recStars = screen.querySelector('.rec-stars');
  const progressButtons = screen.querySelector('.progress-buttons');
  const progressBars = screen.querySelector('.progress-bars');
  const fiveStarProgress = screen.querySelector('#fiveStarProgress');
  const fourStarProgress = screen.querySelector('#fourStarProgress');
  const threeStarProgress = screen.querySelector('#threeStarProgress');
  const twoStarProgress = screen.querySelector('#twoStarProgress');
  const oneStarProgress = screen.querySelector('#oneStarProgress');

  expect(ratingsStars).toBeInTheDocument;
  expect(totalStars).toBeInTheDocument;
  expect(starsComponent).toBeInTheDocument;
  expect(recStars).toBeInTheDocument;
  expect(reviewsList).toBeInTheDocument;
  expect(progressButtons).toBeInTheDocument;
  expect(progressBars).toBeInTheDocument;
  expect(fiveStarProgress).toBeInTheDocument;
  expect(fourStarProgress).toBeInTheDocument;
  expect(threeStarProgress).toBeInTheDocument;
  expect(twoStarProgress).toBeInTheDocument;
  expect(oneStarProgress).toBeInTheDocument;
})