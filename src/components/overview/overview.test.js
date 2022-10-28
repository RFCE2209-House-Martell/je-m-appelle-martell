import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Overview from './overview.jsx';
import ImageGallery from './imageGallery.jsx';
import ExpandedView from './expandedView.jsx';
import StyleSelector from './styleSelector.jsx';
import ProductDetails from './productDetails.jsx';
import AddtoCart from './addToCart.jsx';
import React from 'react';
import axios from 'axios';

jest.mock('axios');
jest.mock('./overview.jsx', () => () => <div></div>);

test('should render Image Gallery module', async () => {
  render(<ImageGallery data={dummyData} styleId={styleId} setSocialPhoto={() => {}}/>);

  const mainImg = screen.queryByAltText('main image');
  const thumbnails = screen.queryAllByAltText('thumbnail image(s)');
  const leftArrow = screen.queryByRole('button', { name: '<' });
  const rightArrow = screen.queryByRole('button', { name: '>' });
  const expanded = screen.queryBy

  expect(mainImg).toBeInTheDocument();
  expect(thumbnails.length).toBe(3); // 3 thumbnail photos
  expect(leftArrow).toBe(null); // no left arrow: default main image is the first
  expect(rightArrow).toBeInTheDocument();
});

test('should render Style Selector module', async () => {
  render(<StyleSelector data={dummyData}/>);

  const selected = screen.getByRole('currentColor');

  expect(selected).toBeInTheDocument;
});

test('should render Add To Cart module', async () => {
  render(<AddtoCart data={dummyData}/>);

  const size = screen.queryByText('Size');
  const quantity = screen.queryByText('Quantity');
  const sizeSelect = screen.getByRole('option', { name: 'Select Size' });
  const quantSelect = screen.getByRole('option', { name: '-' });
  const addButton = screen.getByRole('button', { name: 'Add to Cart' })

  expect(size).toBeInTheDocument();
  expect(quantity).toBeInTheDocument();
  expect(sizeSelect.selected).toBe(true);
  expect(quantSelect.selected).toBe(true);
  expect(addButton).toBeInTheDocument();
});

const productId = 66642;
const styleId = 411534;
const dummyData = {
  'product_id': '66642',
  'results': [{
      "style_id": 411534,
      "name": "Forest Green & Black",
      "original_price": "140.00",
      "sale_price": null,
      "default?": true,
      "photos": [
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
        }
      ],
      "skus": {
          "2390357": {
              "quantity": 8,
              "size": "XS"
          },
          "2390358": {
              "quantity": 16,
              "size": "S"
          },
          "2390359": {
              "quantity": 17,
              "size": "M"
          },
          "2390360": {
              "quantity": 10,
              "size": "L"
          },
          "2390361": {
              "quantity": 15,
              "size": "XL"
          },
          "2390362": {
              "quantity": 4,
              "size": "XL"
          }
      }
  }]
};