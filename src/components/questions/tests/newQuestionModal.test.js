import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import NewQuestionModal from '../newQuestionModal.jsx';

describe('Render NewAnswerModal Component', function () {
  const user = userEvent.setup();

  it('should render an instance NewQuestionModal', () => {
    render(<NewQuestionModal />);
    const button = screen.getByTestId('modal-button');
    userEvent.click(button).then(() => {
      const modalHeading = screen.getByTestId('modal-heading');
      expect(modalHeading).toHaveTextContent("ASK A QUESTION");
    });
  });

});