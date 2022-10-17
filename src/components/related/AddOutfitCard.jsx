import React from 'react';
// import style from './styling.css'

const AddOutfitCard = (props) => {

  const componentStyle = {
    height: '300px',
    width: '200px',
    borderStyle: 'solid',
    borderColor: 'black'
  }



  return (
    <span style={componentStyle}>
      <button>+</button>
    </span>
  )
}

export default AddOutfitCard;

//style to a particular size
