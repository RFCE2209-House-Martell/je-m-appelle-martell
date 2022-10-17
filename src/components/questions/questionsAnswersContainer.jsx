import React, { useState, useEffect } from 'react';
import AnswerSearchBar from './answerSearchBar.jsx';
import QuestionList from './questionList.jsx';
import QuestionsFooter from './questionFooter.jsx';

const QuestionsAnswersContainer = (props) => {
  const productId = props.productId;
  // get product here
  // pass down through props
  return (
    <div>
      <h3>Questions and Answers</h3>
      <AnswerSearchBar productId={productId} />
      <QuestionList productId={productId} />
      <QuestionsFooter productId={productId} />
    </div>
  );
}

export default QuestionsAnswersContainer;