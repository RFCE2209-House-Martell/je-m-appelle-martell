import React, { useState, useEffect } from 'react';

var StyleSelector = (props) => {
  const [styleId, setStyleId] = useState(null);
  const [styles, setStyles] = useState([]);

  if (props.data.results !== undefined && styleId === null) {
    setStyleId(props.data.results[0].style_id);
    setStyles(props.data.results);
  }

  return (
    <div>
      now
      {styles === [] ? null: <div>{styles.map((style, key) => (<div key={key}>{style.name}</div>))}</div>}
    </div>
  );
};

export default StyleSelector;