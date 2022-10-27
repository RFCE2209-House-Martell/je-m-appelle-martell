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
  const [questionCount, setQuestionCount] = useState(2);

  const [searchInput, setSearchInput] = useState('');
  const productId = props.productId;

  const onHandleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const onLoadMoreAnswers = () => {
    setAnswerCount(answerCount + 2);
  };

  const onLoadMoreQuestions = () => {
    setQuestionCount(questionCount + 1);
  };

  const onHandleReportSubmit = (id, type) => {
    if (type === 'questions') {
      return API.reportQuestion(id);
    } else if (type === 'answer') {
      return API.reportQuestion(id);
    }
  };

  const onHandleHelpfulSubmit = (id) => {
    return API.updateHelpfulQuestion(id).then(() => {
      return API.getQuestionsById(productId, questionPage, questionCount).then((res) => {
        setQuestions(res.reverse());
      });
    }).catch((err) => console.log('Error updating question helpfulness in container component.'));
  };

  useEffect(() => {
    const loadQuestions = () => {
      if (searchInput === '') {
        API.getQuestionsById(productId, questionPage, questionCount).then((res) => {
          setQuestions(res.reverse());
        });
      } else {
        const filteredQuestions = questions.filter((question) => question.question_body.toLowerCase().includes(searchInput.toLowerCase()));
        setQuestions(filteredQuestions);
      }
    }
    loadQuestions();
  }, [searchInput, questionCount, questionPage, productId]);

  return (
    <div className="top-qa-container">
      <div id="qa-widget" className="qa-main-container">
        <h1 data-testid="feature-heading" className="feature-heading">QUESTIONS AND ANSWERS</h1>
        <div>
          <AnswerSearchBar productId={productId} Input={searchInput} onSearch={onHandleSearch} />
          <div className="qa-section-container">
            <QuestionList productId={productId} questions={questions} answerPage={answerPage} answerCount={answerCount} helpfulSubmit={onHandleHelpfulSubmit} />
          </div>
          <QuestionsFooter productId={productId} loadMoreAnswers={onLoadMoreAnswers} loadMoreQuestions={onLoadMoreQuestions} />
        </div>
      </div>
    </div>
  );
}

export default QuestionsAnswersContainer;