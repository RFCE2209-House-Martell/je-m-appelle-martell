import React, { useState, useEffect } from 'react';
import AnswerSearchBar from './answerSearchBar.jsx';
import QuestionList from './questionList.jsx';
import QuestionsFooter from './questionFooter.jsx';
import API from './api.js';

import './styles/questionAnswerStyles.css';

const QuestionsAnswersContainer = (props) => {
  const [questions, setQuestions] = useState([]);
  const [Answers, setAnswers] = useState([]);
  const [answerPage, setAnswerPage] = useState(1);
  const [answerCount, setAnswerCount] = useState(1);

  const [questionPage, setQuestionPage] = useState(1);
  const [questionCount, setQuestionCount] = useState(1);

  const [searchInput, setSearchInput] = useState('');
  const productId = props.productId;

  const onHandleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const onLoadMoreAnswers = () => {
    setAnswerCount(answerCount + 2);
  };

  const onLoadMoreQuestions = () => {
    setQuestionCount(questionCount + 2);
  };

  const onHandleHelpfulSubmit = (e) => {
    API.updateHelpfulQuestion(e.target.id, type).then((res) => {
      return;
    }).catch((err) => console.log('Error updating question helpfulness in container component.'));
  };

  useEffect(() => {
    const loadQuestions = () => {
      if (searchInput === '') {
        API.getQuestionsById(productId, questionCount, questionPage).then((res) => {
          setQuestions(res);
        });
      } else {
        const filteredQuestions = questions.filter((question) => question.question_body.toLowerCase().includes(searchInput.toLowerCase()));
        setQuestions(filteredQuestions);
      }
    }
    loadQuestions();
  }, [searchInput, questionCount, questionPage]);

  return (
    <div className="qa-main-container">
      <h1 className="feature-heading">QUESTIONS AND ANSWERS</h1>
      <div>
        <AnswerSearchBar productId={productId} Input={searchInput} onSearch={onHandleSearch} />
        <QuestionList productId={productId} questions={questions} answerPage={answerPage} answerCount={answerCount} />
        <QuestionsFooter productId={productId} loadMoreAnswers={onLoadMoreAnswers} loadMoreQuestions={onLoadMoreQuestions} />
      </div>
    </div>
  );
}

export default QuestionsAnswersContainer;