import React from 'react';

const CharacteristicsCreator = (props) => {

  return (
    <li>
      <div>
      {props.charKey}: {(Math.round((props.obj.value) * 4) / 4).toFixed(2)}
      </div>
      <input type='range' key={props.charKey} value={props.obj.value} max='5' readOnly={true} ></input>
    </li>
  )
}

export default CharacteristicsCreator;