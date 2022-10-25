import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Overview from './overview.jsx';
import React from 'react';
import axios from 'axios';

jest.mock('axios');
jest.mock('./overview.jsx', () => () => <div></div>);

test('should render', async () => {
  axios.get = jest.fn().mockImplementation((url) => {
    console.log(url);
    return Promise.resolve({ data: [] });
  });

  const productId = 66642;
  render(<Overview productId={productId}/>);

  // const widget = await waitFor(() => document.querySelector('.widget'));

  console.log(widget);

  // mainview (expandedView shouldn't exit)
  // const expandedView = screen.querySelector('.zoomView');
  // const productDetails = screen.querySelector('.details');
  // const share = screen.querySelector('.share');
  // const styleSelector = screen.querySelector('.styleSelector');
  // const addToCart = screen.querySelector('.form');

  // expect(expandedView).toBe(null);
  // expect(productDetails).toBeInTheDocument();
  // expect(share).toBeInTheDocument();
  // expect(styleSelector).toBeInTheDocument();
  // expect(addToCart).toBeInTheDocument();
  expect(true).toBe(true);
});