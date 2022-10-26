import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import Question from '../question.jsx';

describe('Render Instance of a Question Component', function () {
  const user = userEvent.setup();

  it('should render a Question', () => {
    const mockQuestion = {
      question_id: '12345',
      question_body: 'this is a test',
      question_date: '',
      question_helpfulness: '1',
      reported: false,
      asker_name: 'test',
      answers: []
    };

    render(<Question question={mockQuestion} answerPage={1} answerCount={2} helpfulSubmit={() => console.log('test submit')} />);

    const body = screen.getByText('Q: this is a test');
    expect(body).toBeInTheDocument();
  });

});