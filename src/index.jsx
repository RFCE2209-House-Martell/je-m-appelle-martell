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
import { HiOutlineSun, HiMoon } from "react-icons/hi";
import { IconContext } from 'react-icons';
import axios from 'axios';
import Modal from './components/sharedFolder/modal.jsx';

const App = () => {
  const [productId, setProductId] = useState(66642);
  const [avgStars, setAvgStars] = useState(0);
  const [outfitProducts, setOutfitProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  const [overviewProductName, setOverviewProductName] = useState('');
  const [relatedProductName, setRelatedProductName] = useState('');
  const [relatedProductFeatures, setRelatedProductFeatures] = useState([]);
  const [overviewProductFeatures, setOverviewProductFeatures] = useState([]);
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}cart`, {
      headers: {
        'Authorization': process.env.REACT_APP_API_KEY
      }
    }).then((data) => setCart(data.data));
  }, []);

  const changeRelatedProductFeatures = (id) => {
    axios.get (`${process.env.REACT_APP_BASE_URL}products/${id}`, {
      headers: {
        'Authorization': process.env.REACT_APP_API_KEY
      },
    })
    .then(data => {
      console.log('DATA', data)
      setRelatedProductName(data.data.name)
      setRelatedProductFeatures(data.data.features)
      getOverviewFeatures(productId)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const getOverviewFeatures = (id) => {
    axios.get (`${process.env.REACT_APP_BASE_URL}products/${id}`, {
      headers: {
        'Authorization': process.env.REACT_APP_API_KEY
      },
    })
    .then(data => {
      setOverviewProductName(data.data.name)
      setOverviewProductFeatures(data.data.features)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const traits = {};

  overviewProductFeatures.forEach((trait) => {
    if (!traits[trait.feature]) {
      traits[trait.feature] = {}
    }
    traits[trait.feature].overviewProductFeatures = trait.value
  })

  relatedProductFeatures.forEach((trait) => {
    if (!traits[trait.feature]) {
      traits[trait.feature] = {}
    }
    traits[trait.feature].relatedProductFeatures = trait.value
  })

  const compareModalStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  }

  var showCart = () => {
    console.log(cart);
  };

  var flipSwitch = () => {
    if (!nightMode) {
      document.body.style.backgroundColor = "	#282828";
      document.body.style.color = "white";
      document.querySelectorAll('.single-star-container').forEach((star) => star.style.filter = "invert(90%)");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.querySelectorAll('.single-star-container').forEach((star) => star.style.filter = "none");
    }
    setNightMode(!nightMode);
  };

  return (
    <>
      <div>
        <Modal className='compare' show={showCompare} onClose={() => setShowCompare(false)} styles={compareModalStyle} >
          <button onClick={() => {setShowCompare(false)}}>X</button>
            <h3 style={{justifyContent: 'center', display: 'flex'}}>Comparision</h3>
          <table>
            <tr>
              <th>{overviewProductName}</th>
              <th>Feature</th>
              <th>{relatedProductName}</th>
            </tr>
              {Object.keys(traits).map((trait) => {
                return (
                  <tr>
                    <th>{traits[trait].relatedProductFeatures}</th>
                    <th>{trait}</th>
                    <th>{traits[trait].overviewProductFeatures}</th>
                  </tr>
                )
              })}
          </table>
        </Modal>
        <div className="header">
          <img className="logo" src={require('./components/sharedFolder/martell-logo.png').default} alt="martell-logo" />
          <IconContext.Provider value={{size: '25px'}}>
            { nightMode ? <HiMoon onClick={flipSwitch} className="lightSwitch moon"/> : <HiOutlineSun onClick={flipSwitch} className="lightSwitch sun"/> }
          </IconContext.Provider>
          <div className="cart" onClick={showCart}>
            <div className="cartCount">{cart.length}</div>
            <IconContext.Provider value={{size: '40px'}}>
              <AiOutlineShoppingCart className="cartIcon"/>
            </IconContext.Provider>
          </div>
        </div>
        <div className="app">
          <Overview productId={productId} avgStars={avgStars} />
          <RelatedApp changeRelatedProductFeatures={changeRelatedProductFeatures} setShowCompare={setShowCompare} productId={productId} setProductId={setProductId} outfitProducts={outfitProducts} setOutfitProducts={setOutfitProducts} />
          <QuestionsAnswersContainer productId={productId} />
          <Ratings productId={productId} avgStars={avgStars} setAvgStars={setAvgStars} />
        </div>
      </div>
    </>
);
}

ReactDOM.render(<App />, document.getElementById('root'));