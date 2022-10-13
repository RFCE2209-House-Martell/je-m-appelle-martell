import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/overview/overview.jsx';
import Qa from './components/qa/qa.jsx';
import Ratings from './components/ratings/ratings.jsx';
import RelatedApp from './components/related/RelatedApp.jsx';


const App = () => {
  return (<div>
    <div>
      <h1>Hello World Again!</h1>
    </div>
    <div>
      <Overview />
      <RelatedApp />
      <Qa />
      <Ratings />
    </div>
  </div>);
}

ReactDOM.render(<App />, document.getElementById('root'));