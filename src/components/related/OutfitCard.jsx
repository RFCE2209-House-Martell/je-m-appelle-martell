import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OutfitCard = (props) => {

  const [productImage, setProductImage] = useState('')

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
      // data.data.map((id) => {
      //   for (let i = 0; i < props.allProducts.length; i++) {
      //     if (id === props.allProducts[i].id) {
      //       tempArr.push(props.allProducts[i])
      //     } else {
      //       null
      //     }
      //   }
      // })
      // setRelatedProducts(tempArr)
      // setRenderedProducts([0, 1, 2])
    })
    .catch(err => {
      console.log(err)
    })
  }, [props.product])

  const handleClick = (e) => {
    const filteredOutfits = props.outfitProducts.filter(theProduct => {
      return theProduct.id !== props.product.id
    })
    props.setOutfitProducts(filteredOutfits)
  }
  console.log('PRODCUT', productImage)
  return (
    <div style={componentStyle}  >
      <div> <button onClick={handleClick} >x</button> </div>
      <div> <img src={productImage} style={{width: '150px'}}/> </div>
      <name>Name: {props.product.name}</name>
      <div>Category: {props.product.category}</div>
      <div>description: {props.product.description}</div>
      <div>price: {props.product.price} </div>
      <div>rating: {props.product.rating} </div>
    </div>
  )

}

export default OutfitCard;