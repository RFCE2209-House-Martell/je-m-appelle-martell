import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import QuestionFooter from '../questionFooter.jsx';

describe('Render QuestionFooter Component', function () {
  const user = userEvent.setup();

  it('should render an instance of QuestionFooter to the dom', () => {
    render(<QuestionFooter loadMoreAnswers={() => console.log('test function')} />);
    const button = screen.getByTestId('footer-button');

    userEvent.click(button).then(() => {
      const modalHeading = screen.getByTestId('modal-heading');
      expect(modalHeading).toHaveTextContent("ASK A QUESTION");
    });
  });

  it('should render two buttons', () => {
    render(<QuestionFooter />);
    const loadMoreButton = screen.getByText('Load More Answers');
    const addQuestionButton = screen.getByText('MORE ANSWERED QUESTIONS');
    expect(loadMoreButton).toBeInTheDocument();
    expect(addQuestionButton).toBeInTheDocument();
  });

  it('should alert test string to the dom on user click', () => {
    render(<QuestionFooter loadMoreAnswers={() => alert('clicked')} />);
    const loadMoreButton = screen.getByText('Load More Answers');

    user.click(loadMoreButton).then(() => {
      const testAlert = getByTestId('clicked');
      expect(testAlert).toBeInTheDocument();
    });
  });

  it('should alert test string to the dom on user click', () => {
    render(<QuestionFooter loadMoreQuestions={() => alert('test function')} />);
    const testAlert = screen.getByTestId('load-more-questions-button');

    user.click(testAlert).then(() => {
      const testAlert = getByTestId('test function');
      expect(testAlert).toBeInTheDocument();
    });
  });

});