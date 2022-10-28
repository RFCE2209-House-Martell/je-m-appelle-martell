import React from 'react';

const CharAddReview = (props) => {

  return (
    <li className='char-list'>
      <div className='char-container'>
      {props.charKey}
      </div>
      <input className='char-slider-rev' name={props.name} type='range' key={props.charKey} min='1' max='5' onChange={e => props.charHandler(e)}></input>
      <div className='characters'>
        <div className='character-one'></div>
        <div className='character-two'></div>
        <div className='character-three'></div>
      </div>
      {(props.charKey === 'Size' || props.charKey === 'Fit' || props.charKey === 'Length' || props.charKey === 'Width') ? <div className='char-level'>
        <div className='char-small'>
          Too small
        </div>
        <div className='char-perfect-fit'>
          Perfect
        </div>
        <div className='char-large'>
          Too large
        </div>
      </div> : <div className='char-level'>
        <div className='char-poor'>
          Poor
        </div>
        <div className='char-perfect-qual'>
          Perfect
        </div>
      </div>}
    </li>
  )
}

export default CharAddReview;