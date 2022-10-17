import React from 'react';
import { useState, useEffect } from 'react';
import RelatedCard from './RelatedCard.jsx';

const RelatedList = (props) => {

  const [relatedProducts, setRelatedProducts] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [renderedProducts, setRenderedProducts] = useState([1, 2, 3])



  return (
    <div>
      <button>previous</button>
      <span>
        {renderedProducts.map(product => {
          return <RelatedCard product={product} />
        })}
      </span>
      <button>next</button>
    </div>
  )
}

export default RelatedList;