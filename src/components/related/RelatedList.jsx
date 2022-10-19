import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import RelatedCard from './RelatedCard.jsx';

const RelatedList = (props) => {

  const [relatedProducts, setRelatedProducts] = useState([1, 2, 3, 4, 5,6, 7, 8]);
  const [renderedProducts, setRenderedProducts] = useState([0, 1, 2]);

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
        return <RelatedCard productIndex={productIndex} key={key}/>
      })}

      {renderedProducts[2] === relatedProducts.length ? null : <button onClick={nextCard} style={{height: '24px'}} >next</button>}
    </div>
  )
}

export default RelatedList;