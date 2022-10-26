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

    const user = screen.getByTestId('tester-name');
    expect(user).toHaveTextContent('by tester - Wed Jan 03 2018 |');
  });

  it('should alert the user', () => {
    const mockAnswer = {
      answer_id: 1,
      helpfulness: 1,
      date: '2018-01-04T00:00:00.000Z',
      body: 'this is a test',
      answerer_name: 'tester',
      email: 'test@tester.com',
      photos: []
    };

    render(<Answer answer={mockAnswer} helpfulSubmit={() => 'test function'} reportAnswer={() => alert('test alert')} />);
    const alertButton = screen.getByText('Report');
    user.click(alertButton).then(() => {
      const testAlert = screen.getByText('test alert');
      expect(testAlert).toBeInTheDocument();
    });
  });

  it('should alert the user', () => {
    const mockAnswer = {
      answer_id: 1,
      helpfulness: 1,
      date: '2018-01-04T00:00:00.000Z',
      body: 'this is a test',
      answerer_name: 'tester',
      email: 'test@tester.com',
      photos: []
    };

    render(<Answer answer={mockAnswer} helpfulSubmit={() => alert('test alert')} reportAnswer={() => alert('test alert')} />);
    const alertButton = screen.getByText('Yes');
    user.click(alertButton).then(() => {
      const testAlert = screen.getByText('test alert');
      expect(testAlert).toBeInTheDocument();
    });
  });

});