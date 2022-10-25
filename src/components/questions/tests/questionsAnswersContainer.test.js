import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import QuestionsAnswersContainer from '../questionsAnswersContainer.jsx';

describe('Render Questions Answers main container component', function () {
  const user = userEvent.setup();

  it('should render an the feature heading in an h1 tag', () => {
    render(<QuestionsAnswersContainer productId={66646} />);
    const heading = screen.getByTestId('feature-heading');
    expect(heading).toHaveTextContent("QUESTIONS AND ANSWERS");
  });


});