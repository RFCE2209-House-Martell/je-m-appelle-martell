import React from 'react';

const RelatedCard = (props) => {

  const componentStyle = {
    height: '300px',
    width: '200px',
    borderStyle: 'solid',
    borderColor: 'black'
  }

  return (
    <span style={componentStyle}>
      {/* <div>
        <img />
        <div>
          <button>star</button>
          <h2>Category</h2>
          <h2>description</h2>
          <h2>price</h2>
          <h2>rating</h2>
        </div>
      </div> */}
        {props.product}
    </span>
  )
}

export default RelatedCard;