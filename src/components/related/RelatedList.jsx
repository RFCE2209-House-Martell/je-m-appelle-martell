import React from 'react';
import { useState, useEffect } from 'react';
import RelatedCard from './RelatedCard.jsx';
import axios from 'axios';

const RelatedList = (props) => {
  const updateRelated = props.updateRelated
  const relatedProducts = props.relatedProducts
  const setRelatedProducts = props.setRelatedProducts
  const [renderedProducts, setRenderedProducts] = useState([0, 1, 2]);


  // var noImg = require('./unavailable.jpeg').default;

  useEffect(() => {
    axios.get (`${process.env.REACT_APP_BASE_URL}products/${props.productId}/related`, {
      headers: {
        'Authorization': process.env.REACT_APP_API_KEY
      },
    })
    .then(data => {
      let tempArr = []
      let realData = data.data
      realData.forEach((id) => {
        for (let i = 0; i < props.allProducts.length; i++) {
          if (id === props.allProducts[i].id) {
            if (!props.outfitProducts.find(product => product.id === id)) {
            tempArr.push(props.allProducts[i])
            }
          } else {
            null
          }
        }
      })
      setRelatedProducts(tempArr)
      setRenderedProducts([0, 1, 2])
    })
    .catch(err => {
      console.log(err)
    })
  }, [props.allProducts, props.productId, props.outfitProducts])

  const previousCard = (e) => {
    const newRenderedProducts = renderedProducts.map(product => {
      return product - 1
    });
    setRenderedProducts(newRenderedProducts)
  }

  const nextCard = (e) => {
    const newRenderedProducts = renderedProducts.map(product => {
      return product + 1
    });
    setRenderedProducts(newRenderedProducts)
  }

  return (
    <div style={{display: 'flex', columnGap: '50px', justifyContent: 'center'}}>
      {renderedProducts[0] === 0 ? null : <button onClick={previousCard}style={{height: '475px', color: '#e49b34' }} className='arrow'>{'<'}</button>}
      {renderedProducts.map((productIndex, key) => {
        return <RelatedCard
        changeRelatedProductFeatures={props.changeRelatedProductFeatures} setShowCompare={props.setShowCompare}
        productIndex={productIndex}
        key={`${Math.ceil(Math.random() * 999)}`}
        setProductId={props.setProductId}
        productId={props.productId}
        setRelatedProducts={setRelatedProducts}
        relatedProduct={relatedProducts[productIndex]}
        updateRelated={updateRelated}
        allProducts={props.allProducts}
        getProductRating={props.getProductRating}
        />
      })}

      {renderedProducts[2] === relatedProducts.length ? null : <button onClick={nextCard} style={{height: '475px', color: '#e49b34' }} className='arrow' >{'>'}</button>}
    </div>
  )
}

export default RelatedList;