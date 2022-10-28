import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import OutfitList from './OutfitList.jsx';
import RelatedList from './RelatedList.jsx';


const RelatedApp = (props) => {

  const [allProducts, setAllProducts] = useState([])
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [productRatings, setProductRatings] = useState([]);


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

  const findAvgStars = (ratingsObj) => {
    var arr = Object.keys(ratingsObj);
    let count = 0
    for (let i = 0; i < arr.length; i++) {
      count += Number(arr[i])
    }

    const avg = count/arr.length

    return avg
  }

  const getProductRating = (id) => {
    return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta', {
      headers: {
        'Authorization': process.env.REACT_APP_API_KEY
      },
      params: {
        product_id: id
      }
    })
    .then(res => {
      const productRatingAvg = findAvgStars(res.data.ratings)
      return productRatingAvg;
    })
    .catch(err => {
      console.log(err);
    })
  }

  const updateRelated = (productId) => {
    const filteredRelated = relatedProducts.filter(id => id !== productId)
    setRelatedProducts(filteredRelated)
  }

  return (
    <div>
      <div>
      <h1 style={{textAlign: 'center'}} >Related Products</h1>
      </div>
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
      getProductRating={getProductRating}
      />

      <h1 style={{textAlign: 'center'}} >Your Outfit</h1>
      <OutfitList allProducts={allProducts}
      relatedProducts={relatedProducts}
      productId={props.productId}
      outfitProducts={props.outfitProducts}
      setOutfitProducts={props.setOutfitProducts}
      setProductId={props.setProductId}
      updateRelated={updateRelated}
      getProductRating={getProductRating}
      />
    </div>
  );
}

export default RelatedApp;