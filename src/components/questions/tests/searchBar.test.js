import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import AnswerSearchBar from '../answerSearchBar.jsx';


describe('Render NewAnswerModal Component', function () {
  const user = userEvent.setup();

  it('should render an instance NewAnswerModal', () => {
    render(<AnswerSearchBar />);

    const input = screen.getByTestId('search-input');

    expect(input).toHaveTextContent("");
  });

});