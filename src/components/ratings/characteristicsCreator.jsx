import React from 'react';

const CharacteristicsCreator = (props) => {

  return (
    <li>
      <div>
      {props.charKey}: {(Math.round((props.obj.value) * 4) / 4).toFixed(2)}
      </div>
      <input className='char-slider' step='1.6' type='range' key={props.charKey} value={props.obj.value} max='5' readOnly={true} list='char-list'></input>
      <datalist id='char-list'>
        <option value='Too little'></option>
        <option value='Perfect'></option>
        <option value='Too much'></option>
      </datalist>
    </li>
  )
}

export default CharacteristicsCreator;