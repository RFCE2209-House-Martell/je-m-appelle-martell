import React from 'react';

const CharacteristicsCreator = (props) => {

  return (
    <li className='char-list'>
      <div className='char-container'>
      {props.charKey}: {(Math.round((props.obj.value) * 4) / 4).toFixed(2)}
      </div>
      <input className='char-slider' step='1.6' type='range' key={props.charKey} value={props.obj.value} max='5' readOnly={true}></input>
      <div className='characters'>
        <div className='character-one'></div>
        <div className='character-two'></div>
        <div className='character-three'></div>
      </div>
      {props.charKey === 'Size' || 'Fit' || 'Length' || 'Width' ? <div className='char-level'>
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

export default CharacteristicsCreator;