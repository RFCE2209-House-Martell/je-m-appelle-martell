import React from 'react';

const RelatedCard = (props) => {

  const componentStyle = {
    border: '2px solid black',
    alignSelf: '300px',
    width: '150px'
  }

  return (
    <div style={componentStyle}>
      {props.product}
      <div> <button>star</button> </div>
      <div> <img /> </div>
      <div>Category</div>
      <div>description</div>
      <div>price</div>
      <div>rating</div>
    </div>
  )
}

export default RelatedCard;