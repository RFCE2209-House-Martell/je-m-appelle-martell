import React from 'react';
import index from '../../index.jsx';
import OutfitList from './OutfitList.jsx';
// import style from './styling.css'

const AddOutfitCard = (props) => {

  const componentStyle = {
    border: '2px solid black',
    alignSelf: '300px',
    height: '140px',
    width: '150px'
  }

  const handleClick = (e) => {
    props.addToOutfit(props.productId)
    props.updateRelated(props.productId)
  }

  return (
    <div style={componentStyle}>
      <div> <button style={{display: 'flex', justifyContent: 'center'}} onClick={handleClick}>+</button> </div>
    </div>
  )
}

export default AddOutfitCard;

//style to a particular size
