import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';
import OutfitCard from './OutfitCard.jsx';
import React from 'react';
import axios from 'axios';


jest.mock('axios')
jest.mock("./RelatedCard.jsx", ()=> ()=><div>Category</div>)
jest.mock("./AddOutfitCard.jsx", ()=> ()=> <button>+</button>)

describe.only('relatedTo and Outfit Lists', () => {
  test('should render three cards and next button on initial render', async () => {
    axios.get = jest.fn().mockImplementation((url) => {
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

  test('should render only a addOutfitCard on initial render', async () => {
    axios.get = jest.fn().mockImplementation((url) => {
      return Promise.resolve({ data: [66642, 66643, 66645, 66646, 66649] });
    });
    const allProducts = []
    const productId = 66642
    const outfitProducts = []
    render(<OutfitList productId={productId} allProducts={allProducts} outfitProducts={outfitProducts} />)

    const previousButton = await waitFor(() => screen.queryByText("previous"));
    const nextButton = await waitFor(() => screen.queryByText("next"));
    const card = await waitFor(() => screen.queryAllByText("+"));

    expect(card).toHaveLength(1)
    expect(previousButton).not.toBeInTheDocument()
    expect(nextButton).not.toBeInTheDocument()

  })

  test('OutfitCard has an X button and appears when given appropriate props', () => {
    const product = {
      name: 'jz',
      category: 'stuff',
      description: 'more stuff',
    }
    const productId = 66645
    const outfitProducts = [66643, 66645]
    render(<OutfitCard product={product} productId={productId} outfitProducts={outfitProducts} />)

    const card = screen.getByText('Name: jz')
    console.log('card', card)
    const button = screen.getByText('x')
    const category = screen.getByText('Category: stuff')
    const description = screen.getByText('description: more stuff')

    expect(card).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(category).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})