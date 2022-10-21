import React, { useEffect } from 'react';
import axios from 'axios';

const RelatedCard = (props) => {

  const componentStyle = {
    border: '2px solid black',
    alignSelf: '300px',
    width: '150px'
  }

  useEffect(() => {
    if (props.relatedProduct) {axios.get (`${process.env.REACT_APP_BASE_URL}products/${props.relatedProduct.id}/related`, {
      headers: {
        'Authorization': process.env.REACT_APP_API_KEY
      },
    })
    .then(data => {
      props.updateRelated(data.data)
    })
    .catch(err => {
      console.log(err)
    })}
  }, [props.productId])

  const handleCardClick = (e) => {
    props.setProductId(props.relatedProduct.id)
  }

  if (props.relatedProduct) {
    return (
      <div style={componentStyle}>
        <div> <button>star</button> </div>
        <div onClick={handleCardClick} >
          <div> <img  /> </div>
          <name>Name: {props.relatedProduct.name}</name>
          <div>Category: {props.relatedProduct.category}</div>
          <div>description: {props.relatedProduct.description}</div>
          <div>price: {props.relatedProduct.price} </div>
          <div>rating: {props.relatedProduct.rating} </div>
        </div>
      </div>
    )
  }
  return null
}

export default RelatedCard;