import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineStar } from "react-icons/ai";
import { CiCircleRemove } from "react-icons/ci";
import Styles from './Styles.css'

const OutfitCard = (props) => {

  const [productImage, setProductImage] = useState('')

  var noImg = require('./unavailable.jpeg').default;

  const componentStyle = {
    border: '2px solid black',
    alignSelf: '300px',
    width: '300px',
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
    <div style={componentStyle} className='test'>
      <div >
        <div >
          <button className='cards test' onClick={handleClick} ><CiCircleRemove size='25'/></button>
        </div>
        <div onClick={handleCardClick} className='cards'>
          <div> {productImage === null ? <img src={noImg} style={{width:'300px', height:'200px', objectFit:'cover'}} /> : <img src={productImage} style={{height: '200px', margin: 'auto', display: 'block'}} />} </div>
          <div><b>Name: </b> {props.product.name}</div>
          <div><b>Category: </b>{props.product.category}</div>
          <div><b>description: </b>{props.product.description}</div>
          <div><b>price: </b>{props.product.default_price} </div>
          <div><b>rating: </b>{props.product.rating} </div>
        </div>
      </div>
    </div>
  )

}

export default OutfitCard;