import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import Answer from '../answer.jsx';

describe('Render Instance of a Answer Component', function () {
  const user = userEvent.setup();

  it('should render a Answer', () => {
    const mockAnswer = {
      answer_id: 1,
      helpfulness: 1,
      date: '2018-01-04T00:00:00.000Z',
      body: 'this is a test',
      answerer_name: 'tester',
      email: 'test@tester.com',
      photos: []
    };

    render(<Answer answer={mockAnswer} helpfulSubmit={() => 'test function'} reportAnswer={() => 'test function'} />);
    const body = screen.getByText('this is a test');
    expect(body).toBeInTheDocument();
  });

});