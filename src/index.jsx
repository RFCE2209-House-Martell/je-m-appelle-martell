import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/overview/overview.jsx';
import QuestionList from './components/questions/questionList.jsx';
import Ratings from './components/ratings/ratings.jsx';
import RelatedApp from './components/related/RelatedApp.jsx';
import Modal from './components/sharedFolder/modal.jsx';
import QuestionsAnswersContainer from './components/questions/questionsAnswersContainer.jsx';
import axios from 'axios';

const App = () => {
  const [productId, setProductId] = useState(66645);
  const [avgStars, setAvgStars] = useState(0);
  const [outfitProducts, setOutfitProducts] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  const [overviewProductName, setOverviewProductName] = useState('');
  const [relatedProductName, setRelatedProductName] = useState('');
  const [comparisonTable, setComparisonTable] = useState([]);
  const [relatedProductFeatures, setRelatedProductFeatures] = useState([]);
  const [overviewProductFeatures, setOverviewProductFeatures] = useState([]);

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
// console.log('relatedProductFeatures', relatedProductFeatures)
// console.log('overviewProductFeatures', overviewProductFeatures)
//working appropriately

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

  //console.log('traits', traits)
  //traits is working appropriately

  // const createTable = (relatedProductFeatures) => {
  //   const tempAllFeatures = {};
  //   for (let featureAndValue of relatedProductFeatures) {
  //     if (!tempAllFeatures[featureAndValue] || !tempAllFeatures[featureAndValue].feature) {
  //       console.log('youlostcuz')
  //       tempAllFeatures[featureAndValue] = {};
  //       console.log(relatedProductFeatures)
  //       tempAllFeatures[featureAndValue].feature = ['NA', relatedProductFeatures[featureAndValue][]value]
  //     }
  //   }
  //   console.log('CRAZY',tempAllFeatures)
  //   compare(tempAllFeatures)
  // }


  // const stuff = (overviewProductFeatures, allFeatures) => {
  //   let tempAllFeatures = allFeatures
  //   for (let featureAndValue of overviewProductFeatures) {
  //     console.log('STUFF', featureAndValue)
  //     console.log('tempAllFeatures', tempAllFeatures)
  //     if (tempAllFeatures && tempAllFeatures.featureValue && tempAllFeatures.featureValue.feature) {
  //       tempAllFeatures.featureAndValue.feature[0] === overviewProductFeatures.featureAndValue.value
  //     } else if (tempAllFeatures && tempAllFeatures.featureValue && !tempAllFeatures.featureValue.feature) {
  //       tempAllFeatures.featureAndValue.feature = [overviewProductFeatures.featureAndValue.value, 'NA']
  //     }
  //   }
  //   stuff2(tempAllFeatures)
  // }

  // const stuff2 = (allFeatures) => {
  //   const table = []
  //   console.log('AllFeature', allFeatures)
  //   for (let row in allFeatures) {
  //     table.push(allFeatures.row[0], row, allFeatures.row[1])
  //   }
  //   console.log('table', table)
  //   setComparisonTable(table)
  // }


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
    <div>
      {/* <img className="logo" src={require("../public/assets/images/martell-logo.png").default} alt="martell-logo" /> */}
    </div>
    <div>
      <Overview productId={productId} avgStars={avgStars} />
      <RelatedApp changeRelatedProductFeatures={changeRelatedProductFeatures} setShowCompare={setShowCompare} productId={productId} setProductId={setProductId} outfitProducts={outfitProducts} setOutfitProducts={setOutfitProducts} />
      {/* <QuestionList productId={productId} /> */}
      <QuestionsAnswersContainer productId={productId} />
      <Ratings productId={productId} avgStars={avgStars} setAvgStars={setAvgStars} />
    </div>
  </div>
  </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));