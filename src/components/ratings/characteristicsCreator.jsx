import React from 'react';

const CharacteristicsCreator = (props) => {

  return (
    <li className='char-list'>
      <div className='char-container'>
      {props.charKey}
      </div>
      <input className='char-slider' type='range' key={props.charKey} value={props.obj.value} max='5' readOnly={true}></input>
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

export default CharacteristicsCreator;