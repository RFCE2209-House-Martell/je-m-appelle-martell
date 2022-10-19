import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import OutfitList from './OutfitList.jsx';
import RelatedList from './RelatedList.jsx';


const RelatedApp = (props) => {

  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    axios.get (`${process.env.REACT_APP_BASE_URL}products`, {
      headers: {
        'Authorization': process.env.REACT_APP_API_KEY
      }
    })
    .then(data => {
      setAllProducts(data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div>
      {console.log(allProducts)}
      <h1>Related Products</h1>
      <RelatedList />
      <h1>Your Outfit</h1>
      <OutfitList />
    </div>
  );
}

export default RelatedApp;