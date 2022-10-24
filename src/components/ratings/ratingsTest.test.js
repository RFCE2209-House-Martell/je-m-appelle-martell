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