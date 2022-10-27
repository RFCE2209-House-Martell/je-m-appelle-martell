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
import Logger from './components/logger/logger.jsx';
import loggerAPI from './components/logger/api.js';

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
  const [lightMode, setLightMode] = useState(true); // light mode is true when light mode, and false when dark mode
  // feel free to pass into your components to change any colors you want to change
  // see lines 103-114 of this file to see how I changed the colors of things

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
    if (lightMode) {
      document.body.style.backgroundColor = "	#282828";
      document.body.style.color = "white";
      document.querySelectorAll('.single-star-container').forEach((star) => star.style.filter = "invert(90%)");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.querySelectorAll('.single-star-container').forEach((star) => star.style.filter = "none");
    }
    setLightMode(!lightMode);
  };

  const handleElementClick = (e) => {
    if (e.target.id) {
      return loggerAPI.logUserInteraction(e).then((res) => {
        console.log('Result from logger' + res);
      }).catch((err) => console.log('Err in logger' + err));
    };
  }

  return (
    <>
      <Logger logHandler={(e) => handleElementClick(e)}>
        <div>
          <Modal className='compare' show={showCompare} onClose={() => setShowCompare(false)} styles={compareModalStyle} >
            <button onClick={() => { setShowCompare(false) }}>X</button>
            <h3 style={{ justifyContent: 'center', display: 'flex' }}>Comparision</h3>
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
            <div className="cart" onClick={showCart}>
              <div className="cartCount">{cart.length}</div>
              <IconContext.Provider value={{ size: '40px' }}>
                <AiOutlineShoppingCart className="cartIcon" />
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
      </Logger>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));