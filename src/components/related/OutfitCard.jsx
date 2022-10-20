import React from 'react';

const OutfitCard = (props) => {

  const componentStyle = {
    border: '2px solid black',
    alignSelf: '300px',
    width: '150px'
  }

  const handleClick = (e) => {
    console.log('asdfaevsc', props.product)
    let filteredOutfits = props.outfitProducts.filter(theProduct => {
      console.log('prop', props.outfitProducts)
      console.log('notprop:', theProduct.id)
      theProduct.id !== props.outfitProducts.id
    })
    props.setOutfitProducts(filteredOutfits)
  }

  const handleCardClick = (e) => {
    props.setProductId(props.product.id)
  }

  return (
    <div style={componentStyle}  >
      <div> <button onClick={handleClick} >x</button> </div>
      <div> <img /> </div>
      <div>Category</div>
      <div>description</div>
      <div>price</div>
      <div>rating</div>
    </div>
  )
}

export default OutfitCard;