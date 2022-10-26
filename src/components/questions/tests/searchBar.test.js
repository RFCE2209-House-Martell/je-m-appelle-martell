import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import AnswerSearchBar from '../answerSearchBar.jsx';

describe('Render Answer Search Bar Component', function () {
  const user = userEvent.setup();

  it('should render an instance NewAnswerModal', () => {
    render(<AnswerSearchBar />);
    const input = screen.getByTestId('search-input');
    expect(input).toHaveTextContent("");
  });

  it('should', () => {
    render(<AnswerSearchBar />);
    const input = screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS.');
    expect(input).toBeInTheDocument();
  });
});