import React from 'react';
// import style from './styling.css'

const AddOutfitCard = (props) => {

  const componentStyle = {
    border: '2px solid black',
    alignSelf: '300px',
    height: '140px',
    width: '150px'
  }

  return (
    <div style={componentStyle}>
      <div> <button style={{display: 'flex', justifyContent: 'center'}}>+</button> </div>
    </div>
  )
}

export default AddOutfitCard;

//style to a particular size
