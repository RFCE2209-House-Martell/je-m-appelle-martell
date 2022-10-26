import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import QuestionFooter from '../questionFooter.jsx';

describe('Render QuestionFooter Component', function () {
  const user = userEvent.setup();

  it('should render two buttons', () => {
    render(<QuestionFooter />);
    const loadMoreButton = screen.getByText('Load More Answers');
    const addQuestionButton = screen.getByText('MORE ANSWERED QUESTIONS');
    expect(loadMoreButton).toBeInTheDocument();
    expect(addQuestionButton).toBeInTheDocument();
  });

});