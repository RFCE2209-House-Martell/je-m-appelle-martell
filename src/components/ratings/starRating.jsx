import React, { useState, useEffect } from 'react';

const StarRating = (props) => {
  const [hover, setHover] = useState(0);

  return (
    <div className='star-rating'>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button id='star-button' type='button' key={index}
          className={index <= (hover || props.revForm.rating) ? 'star-on' : 'star-off'}
          onClick={e => props.setRevForm({...props.revForm, rating: index})}
          onMouseEnter={e => setHover(index)}
          onMouseLeave={e => setHover(props.revForm.rating)}>
            <span className='star-individual-rating'>&#9733;</span>
          </button>
        )
      })} {props.revForm.rating === 1 ? 'Poor' : props.revForm.rating === 2 ? 'Fair' : props.revForm.rating === 3 ? 'Average' : props.revForm.rating === 4 ? 'Good' : props.revForm.rating === 5 ? 'Great' : ''}
    </div>
  )
}

export default StarRating;