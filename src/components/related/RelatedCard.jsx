import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../sharedFolder/modal.jsx';
import noImg from './unavailable.jpeg';
// var noImg = require('../overview/unavailable.jpeg').default;

const RelatedCard = (props) => {

  const [productImage, setProductImage] = useState([])

  const componentStyle = {
    border: '2px solid black',
    alignSelf: '300px',
    width: '150px'
  }

  useEffect(() => {
    if (props.relatedProduct) {
      axios.get (`${process.env.REACT_APP_BASE_URL}products/${props.relatedProduct.id}/styles`, {
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
    }
  }, [props.allProducts, props.productId, props.relatedProduct])

  const handleCardClick = (e) => {
    props.setProductId(props.relatedProduct.id)
  }

  const handleModalClick = (e) => {
    props.setShowCompare(true)
    props.changeRelatedProductFeatures(props.relatedProduct.id)
  }

  if (props.relatedProduct) {
    return (
      <div style={componentStyle}>
        <div >
          <button onClick={handleModalClick}>star</button>
        </div>
        <div onClick={handleCardClick} >
          <div> {productImage === null ? <img src={noImg} style={{width:'150px'}} /> : <img style={{width:'150px'}} src={productImage} />} </div>
          <div>Name: {props.relatedProduct.name}</div>
          <div>Category: {props.relatedProduct.category}</div>
          <div>description: {props.relatedProduct.description}</div>
          <div>price: {props.relatedProduct.default_price} </div>
          <div>rating: {props.relatedProduct.rating} </div>
        </div>
      </div>
    )
  }
  return null
}

export default RelatedCard;