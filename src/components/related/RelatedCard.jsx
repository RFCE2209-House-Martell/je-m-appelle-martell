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

// console.log('props.relatedProduct', props.relatedProduct)
  if (props.relatedProduct) {
    return (
      <div style={componentStyle}>
        <div> <button>star</button> </div>
        <div onClick={handleCardClick} >
          <div> <img /> </div>
          <name>{props.relatedProduct.name}</name>
          <div>Category</div>
          <div>description</div>
          <div>price</div>
          <div>rating</div>
        </div>
      </div>
    )
  }
  return null
}

export default RelatedCard;