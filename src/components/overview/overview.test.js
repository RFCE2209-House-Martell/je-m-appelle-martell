import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Overview from './overview.jsx';
import React from 'react';

test('should render', () => {
  render(<Overview/>);

  // mainview (expandedView shouldn't exit)
  const expandedView = screen.querySelector('.zoomView');
  const productDetails = screen.querySelector('.details');
  const share = screen.querySelector('.share');
  const styleSelector = screen.querySelector('.styleSelector');
  const addToCart = screen.querySelector('.form');

  expect(expandedView).toBe(null);
  expect(productDetails).toBeInTheDocument();
  expect(share).toBeInTheDocument();
  expect(styleSelector).toBeInTheDocument();
  expect(addToCart).toBeInTheDocument();
})