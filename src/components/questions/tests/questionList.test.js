import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import QuestionList from '../questionList.jsx';

describe('Render Question List Component', function () {
  const user = userEvent.setup();

  it('should render list of questions', () => {
    const mockQuestions = [{
      question_id: '12345',
      question_body: 'this is a test',
      question_date: '',
      question_helpfulness: '1',
      reported: false,
      asker_name: 'test',
      answers: []
    },
    {
      question_id: '6789',
      question_body: 'this is a test',
      question_date: '',
      question_helpfulness: '2',
      reported: false,
      asker_name: 'test',
      answers: []
    },
    {
      question_id: '10111213',
      question_body: 'this is a test',
      question_date: '',
      question_helpfulness: '3',
      reported: false,
      asker_name: 'test',
      answers: []
    }];

    render(<QuestionList questions={mockQuestions} />);
    const questionsByText = screen.getAllByText('Q: this is a test');
    expect(questionsByText.length).toBe(3);
  });

});