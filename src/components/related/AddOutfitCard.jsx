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
    <div style={componentStyle}>
      <button>+</button>
    </div>
  )
}

export default AddOutfitCard;

//style to a particular size
