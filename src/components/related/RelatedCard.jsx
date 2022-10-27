import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../sharedFolder/modal.jsx';

const RelatedCard = (props) => {

  const [productImage, setProductImage] = useState([])

  // var noImg = require('./unavailable.jpeg').default;

  const componentStyle = {
    border: '2px solid black',
    alignSelf: '300px',
    width: '150px'
  }

  useEffect(() => {
    if (props.relatedProduct) {
      axios.get(`${process.env.REACT_APP_BASE_URL}products/${props.relatedProduct.id}/related`, {
        headers: {
          'Authorization': process.env.REACT_APP_API_KEY
        },
      })
      .then(data => {
        console.log('DATA', data)
        props.updateRelated(data.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }, [props.productId])

  useEffect(() => {
    if (props.relatedProduct) {
      console.log(props.relatedProduct)
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
    console.log('clicked')
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
          <div> <img style={{width: '150px'}}src={productImage} /> </div>
          <name>Name: {props.relatedProduct.name}</name>
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