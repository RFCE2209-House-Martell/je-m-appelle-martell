import React, { useState, useEffect } from 'react';
import AnswerSearchBar from './answerSearchBar.jsx';
import QuestionList from './questionList.jsx';
import QuestionsFooter from './questionFooter.jsx';
import API from './api.js';

const QuestionsAnswersContainer = (props) => {
  const [questions, setQuestions] = useState([]);
  const [Answers, setAnswers] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const productId = props.productId;

  const onHandleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const onLoadMoreAnswers = () => {
    setCount(count + 2);
  };

  const onHandleHelpfulSubmit = (e) => {
    API.updateHelpfulQuestion(e.target.id, type).then((res) => {
      return;
    }).catch((err) => console.log('Error updating question helpfulness in container component.'));
  };

  useEffect(() => {
    const loadQuestions = () => {
      if (searchInput === '') {
        API.getQuestionsById(productId).then((res) => {
          setQuestions(res);
        });
      } else {
        const filteredQuestions = questions.filter((question) => question.question_body.includes(searchInput));
        setQuestions(filteredQuestions);
      }
    }
    loadQuestions();
  }, [searchInput]);

  return (
    <div>
      <h3 style={{ padding: '32px' }}>Questions and Answers</h3>
      <div style={{ border: '1px solid grey', padding: '32px', margin: '32px' }}>
        <AnswerSearchBar productId={productId} Input={searchInput} onSearch={onHandleSearch} />
        <QuestionList productId={productId} questions={questions} page={page} count={count} />
        <QuestionsFooter productId={productId} loadMoreAnswers={onLoadMoreAnswers} />
      </div>
    </div>
  );
}

export default QuestionsAnswersContainer;