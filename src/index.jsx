import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styling/styleSheet.css';
import Overview from './components/overview/overview.jsx';
import RelatedApp from './components/related/RelatedApp.jsx';
import QuestionList from './components/questions/questionList.jsx';
import QuestionsAnswersContainer from './components/questions/questionsAnswersContainer.jsx';
import Ratings from './components/ratings/ratings.jsx';
import './components/sharedFolder/martell-logo.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import axios from 'axios';

const App = () => {
  const [productId, setProductId] = useState(66642);
  const [avgStars, setAvgStars] = useState(0);
  const [outfitProducts, setOutfitProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}cart`, {
      headers: {
        'Authorization': process.env.REACT_APP_API_KEY
      }
    }).then((data) => setCart(data.data));
  }, []);

  var showCart = () => {
    console.log(cart);
  };

  return (
    <div>
      <div className="header">
        <img className="logo" src={require('./components/sharedFolder/martell-logo.png').default} alt="martell-logo" />
        <div className="cart" onClick={showCart}>
          <div className="cartCount">{cart.length}</div>
          <IconContext.Provider value={{size: '40px'}}>
            <AiOutlineShoppingCart className="cartIcon"/>
          </IconContext.Provider>
        </div>
      </div>
      <div className="app">
        <Overview productId={productId} />
        <RelatedApp productId={productId} setProductId={setProductId} outfitProducts={outfitProducts} setOutfitProducts={setOutfitProducts} />
        {/* <QuestionList productId={productId} /> */}
        <QuestionsAnswersContainer productId={productId} />
        <Ratings productId={productId} avgStars={avgStars} setAvgStars={setAvgStars} />
      </div>
    </div>);
}

ReactDOM.render(<App />, document.getElementById('root'));