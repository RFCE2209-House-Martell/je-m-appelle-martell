import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/overview/overview.jsx';
import QuestionList from './components/questions/QuestionList.jsx';
import Ratings from './components/ratings/ratings.jsx';
import RelatedApp from './components/related/RelatedApp.jsx';

const App = () => {
  const [productId, setProductId] = useState(66642);
  const [avgStars, setAvgStars] = useState(0);

  return (<div>
    <div>
      <h1>Hello World Again!</h1>
    </div>
    <div>
      <Overview productId={productId} avgStars={avgStars} />
      <RelatedApp productId={productId} setProductId={setProductId} />
      <QuestionList productId={productId} />
      <Ratings productId={productId} avgStars={avgStars} setAvgStars={setAvgStars} />
    </div>
  </div>);
}

ReactDOM.render(<App />, document.getElementById('root'));