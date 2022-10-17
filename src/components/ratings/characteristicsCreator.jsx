import React from 'react';

const CharacteristicsCreator = (props) => {

  return (
    <li>
      {props.charKey}: {props.obj.value}
    </li>
  )
}

export default CharacteristicsCreator;