import React from 'react'; import ReactDOM from 'react-dom';
import Overview from './compontents/overview/overview.jsx';
import Qa from './compontents/qa/qa.jsx';
import Ratings from './compontents/ratings/ratings.jsx';
import Related from './compontents/related/related.jsx';

const App = () => {
  return (<div>
    <div>
      <h1>Hello World Again!</h1>
    </div>
    <div>
      <Overview />
      <Related />
      <Qa />
      <Ratings />
    </div>
  </div>);
}

ReactDOM.render(<App />, document.getElementById('root'));