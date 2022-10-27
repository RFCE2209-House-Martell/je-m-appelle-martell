import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../sharedFolder/modal.jsx';
import noImg from './unavailable.jpeg';
import Styles from './Styles.css';
import { AiOutlineStar } from "react-icons/ai";
// var noImg = require('../overview/unavailable.jpeg').default;

const RelatedCard = (props) => {

  const [productImage, setProductImage] = useState([])

  const componentStyle = {
    border: '2px solid black',
    alignSelf: '300px',
    width: '300px',
    backgroundColor: '#f5ebd8',
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
      <div style={componentStyle} >
        <div>
          <div style={{backgroundColor: '#f5ebd8'}}>
            <button onClick={handleModalClick} className='cards' ><AiOutlineStar size='25' /></button>
          </div>
          <div onClick={handleCardClick} className='cards'>
            <div >
              <div> {productImage === null ? <img src={noImg} style={{width:'300px', height:'200px', objectFit:'cover'}} /> : <img style={{height: '200px', margin: 'auto', display: 'block'}} src={productImage} />} </div>
            </div>
            <div><b>Name: </b>{props.relatedProduct.name}</div>
            <div><b>Category: </b>{props.relatedProduct.category}</div>
            <div><b>description: </b> {props.relatedProduct.description}</div>
            <div><b>price: </b> {props.relatedProduct.default_price} </div>
            <div><b>rating: </b> {props.relatedProduct.rating} </div>
          </div>
        </div>
      </div>
    )
  }
  return null
}

export default RelatedCard;