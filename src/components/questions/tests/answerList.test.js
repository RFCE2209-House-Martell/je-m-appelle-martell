import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import AnswerList from '../answerList.jsx';

describe('Render Answer List Component', function () {
  const user = userEvent.setup();

  it('should render a string on an empty list', () => {
    render(<AnswerList productId={0} />);
    const emptylist = screen.getByTestId('answer-list');
    expect(emptylist).toHaveTextContent("There are currently no answers for this question. Be the first? Add an answer!");
  });

});