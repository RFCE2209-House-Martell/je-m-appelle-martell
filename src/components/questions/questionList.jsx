import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Question from './question.jsx';
import API from './api.js';

const QuestionList = (props) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const loadQuestions = async () => {

      const headers = {
        Authorization: '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',
      };

      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions?product_id=66642`, { headers: headers }).then((res) => {
        setQuestions(res.data.results);
      });

    };

    loadQuestions();
  }, []);

  return (<div>{questions.length > 0 ? questions.map((question) => {
    return (<Question key={question.question_id} question={question} />)
  }) : null}</div>);
}

export default QuestionList;

