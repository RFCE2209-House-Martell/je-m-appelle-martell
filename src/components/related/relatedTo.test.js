import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import RelatedList from './RelatedList.jsx';
import React from 'react';

test('should render three cards and next button on initial render', () => {
  render(<RelatedList />)

  const previousButton = screen.queryByText('previous')
  const nextButton = screen.queryByText('next')
  const cards = screen.queryAllByText('Category')

  expect(previousButton).not.toBeInTheDocument()
  expect(nextButton).toBeInTheDocument()
  expect(cards).toHaveLength(3)
})