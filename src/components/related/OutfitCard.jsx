import React from 'react';
// import style from './styling.css'

const OutfitCard = (props) => {

  const componentStyle = {
    height: '300px',
    width: '200px',
    borderStyle: 'solid',
    borderColor: 'black',
    opacity: '0'
  }

  // const componentStyleCat = {
  //   textAlign: 'center',
  //   height: '25px',
  //   width: '50px',
  //   padding: '20px',
  //   borderStyle: 'solid',
  //   borderColor: 'black'
  // }

  return (
    <div style={componentStyle}>
      <div>
        <img />
        <div>
          <button>x</button>
          <h2>Category</h2>
          <h2>description</h2>
          <h2>price</h2>
          <h2>rating</h2>
        </div>
      </div>
    </div>
  )
}

export default OutfitCard;