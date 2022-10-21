import React from 'react';

const OutfitCard = (props) => {

  const componentStyle = {
    border: '2px solid black',
    alignSelf: '300px',
    width: '150px'
  }

  const handleClick = (e) => {
    const filteredOutfits = props.outfitProducts.filter(theProduct => {
      console.log('props', props)
      console.log('STUFF', theProduct.id, props.outfitProducts.id)
      return theProduct.id !== props.product.id
    })
    console.log(filteredOutfits)
    props.setOutfitProducts(filteredOutfits)
  }

  return (
    <div style={componentStyle}  >
      <div> <button onClick={handleClick} >x</button> </div>
      <div> <img  /> </div>
      <name>Name: {props.product.name}</name>
      <div>Category: {props.product.category}</div>
      <div>description: {props.product.description}</div>
      <div>price: {props.product.price} </div>
      <div>rating: {props.product.rating} </div>
    </div>
  )

}

export default OutfitCard;