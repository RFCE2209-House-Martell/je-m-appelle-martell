import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import RelatedList from './RelatedList.jsx';
import React from 'react';
import axios from 'axios';

jest.mock('axios')
jest.mock("./RelatedCard.jsx", ()=> ()=><div>Category</div>)


test('should render three cards and next button on initial render', async () => {
  axios.get = jest.fn().mockImplementation((url) => {
    console.log(url);
    return Promise.resolve({ data: [66642, 66643, 66645, 66646, 66649] });
  });
  const allProducts = []
  const productId = 66642
  render(<RelatedList allProducts={allProducts} productId={productId}/>)

  const previousButton = await waitFor(() => screen.queryByText("previous"));
const nextButton = await waitFor(() => screen.queryByText("next"));
const cards = await waitFor(() => screen.queryAllByText("Category"));

  expect(previousButton).not.toBeInTheDocument()
  expect(nextButton).toBeInTheDocument()
  expect(cards).toHaveLength(3)
})