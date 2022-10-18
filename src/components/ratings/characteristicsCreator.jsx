import React from 'react';

const CharacteristicsCreator = (props) => {

  return (
    <li>
      <div>
      {props.charKey}: {(Math.round((props.obj.value) * 4) / 4).toFixed(2)}
      </div>
      <progress id={props.charKey} value={props.obj.value} max='5'>
        <progress max='1.6'></progress>
        <progress max='3.4'></progress>
      </progress>
    </li>
  )
}

export default CharacteristicsCreator;