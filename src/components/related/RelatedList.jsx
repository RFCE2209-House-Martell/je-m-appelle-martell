import React from 'react';
import { useState, useEffect } from 'react';
import RelatedCard from './RelatedCard.jsx';
import axios from 'axios';

const RelatedList = (props) => {

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [renderedProducts, setRenderedProducts] = useState([0, 1, 2]);

  useEffect(() => {
    axios.get (`${process.env.REACT_APP_BASE_URL}products/${props.productId}/related`, {
      headers: {
        'Authorization': process.env.REACT_APP_API_KEY
      },
    })
    .then(data => {
      console.log(data.data)
      let tempArr = []
      let realData = data.data
      console.log(realData)
      realData.map((id) => {
        for (let i = 0; i < props.allProducts.length; i++) {
          if (id === props.allProducts[i].id) {
            tempArr.push(props.allProducts[i])
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
  }, [props.allProducts, props.productId])

  const updateRelated = (arr) => {
    let tempArr = []
    arr.map((id) => {
      for (let i = 0; i < props.allProducts.length; i++) {
        if (id === props.allProducts[i].id) {
          tempArr.push(props.allProducts[i])
        }
      }
    })
    setRelatedProducts(tempArr)
  }

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
    <div style={{display: 'flex', columnGap: '8px'}}>
      {renderedProducts[0] === 0 ? null : <button onClick={previousCard}style={{height: '24px'}}>previous</button>}
      {renderedProducts.map((productIndex, key) => {
        return <RelatedCard productIndex={productIndex} key={key} setProductId={props.setProductId} productId={props.productId} setRelatedProducts={setRelatedProducts} relatedProduct={relatedProducts[productIndex]} updateRelated={updateRelated}/>
      })}

      {renderedProducts[2] === relatedProducts.length ? null : <button onClick={nextCard} style={{height: '24px'}} >next</button>}
    </div>
  )
}

export default RelatedList;