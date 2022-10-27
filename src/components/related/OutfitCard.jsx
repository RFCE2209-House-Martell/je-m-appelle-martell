import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OutfitCard = (props) => {

  const [productImage, setProductImage] = useState('')

  var noImg = require('./unavailable.jpeg').default;

  const componentStyle = {
    border: '2px solid black',
    alignSelf: '300px',
    width: '150px'
  }

  useEffect(() => {
    axios.get (`${process.env.REACT_APP_BASE_URL}products/${props.product.id}/styles`, {
      headers: {
        'Authorization': process.env.REACT_APP_API_KEY
      },
    })
    .then(data => {
      setProductImage(data.data.results[0].photos[0].thumbnail_url)
    })
    .catch(err => {
      console.log(err)
    })
  }, [props.product])
console.log('stuff', props.product)
  const handleCardClick = (e) => {

    props.setProductId(props.product.id)
  }

  const handleClick = (e) => {
    const filteredOutfits = props.outfitProducts.filter(theProduct => {
      return theProduct.id !== props.product.id
    })
    props.setOutfitProducts(filteredOutfits)
  }
  return (
    <div style={componentStyle} onClick={handleCardClick} >
      <div> <button onClick={handleClick} >x</button> </div>
      <div> <img src={productImage} style={{width: '150px'}}/> </div>
      <div>Name: {props.product.name}</div>
      <div>Category: {props.product.category}</div>
      <div>description: {props.product.description}</div>
      <div>price: {props.product.price} </div>
      <div>rating: {props.product.rating} </div>
    </div>
  )

}

export default OutfitCard;