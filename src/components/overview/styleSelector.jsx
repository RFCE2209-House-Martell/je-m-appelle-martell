import React, { useState, useEffect } from 'react';

var StyleSelector = (props) => {
  const [styles, setStyles] = useState([]);

  if (JSON.stringify(props.data) !== '{}' && styles.length === 0) {
    setStyles(props.data.results);
  }

  var clickHandler = (e, id) => {
    props.setStyleId(id);
  }

  return (
    <div>
      {/* need to make this into circles in css and remove the style.name in the div*/}
      {styles === [] ? null: <div>{styles.map((style) => (<div key={style.style_id} className="styleSelect" onClick={(e) => {clickHandler(e, style.style_id)}}>{style.name}</div>))}</div>}
    </div>
  );
};

export default StyleSelector;