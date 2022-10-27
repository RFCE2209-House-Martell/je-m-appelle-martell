import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import OutfitList from './OutfitList.jsx';
import RelatedList from './RelatedList.jsx';


const RelatedApp = (props) => {

  const [allProducts, setAllProducts] = useState([])
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios.get (`${process.env.REACT_APP_BASE_URL}products`, {
      headers: {
        'Authorization': process.env.REACT_APP_API_KEY
      },
      params: {
        'count': 1011
      }
    })
    .then(data => {
      setAllProducts(data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const updateRelated = (productId) => {
    const filteredRelated = relatedProducts.filter(id => id !== productId)
    setRelatedProducts(filteredRelated)
  }

  return (
    <div>
      <h1>Related Products</h1>
      <RelatedList
      setShowCompare={props.setShowCompare}
      allProducts={allProducts}
      changeRelatedProductFeatures={props.changeRelatedProductFeatures}
      setProductId={props.setProductId}
      productId={props.productId}
      relatedProducts={relatedProducts}
      updateRelated={updateRelated}
      setRelatedProducts={setRelatedProducts}
      outfitProducts={props.outfitProducts}
      />

      <h1>Your Outfit</h1>
      <OutfitList allProducts={allProducts}
      relatedProducts={relatedProducts}
      productId={props.productId}
      outfitProducts={props.outfitProducts}
      setOutfitProducts={props.setOutfitProducts}
      setProductId={props.setProductId}
      updateRelated={updateRelated}/>
    </div>
  );
}

export default RelatedApp;