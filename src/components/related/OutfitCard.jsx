import React from 'react';

const OutfitCard = (props) => {

  const componentStyle = {
    border: '2px solid black',
    alignSelf: '300px',
    width: '150px'
  }

  const handleClick = (e) => {
    let filteredOutfits = props.outfitProducts.filter(theProduct => {

      theProduct.id !== props.outfitProducts.id
    })
    props.setOutfitProducts(filteredOutfits)
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