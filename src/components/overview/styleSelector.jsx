import React, { useState } from 'react';

var StyleSelector = (props) => {
  const [styles, setStyles] = useState([]);
  const [selected, setSelected] = useState('');

  if (JSON.stringify(props.data) !== '{}' && styles.length === 0) {
    setStyles(props.data.results);
    setSelected(props.data.results[0].name);
  }

  var clickHandler = (e, id, name) => {
    props.setStyleId(id);
    setSelected(name);
  }

  return (
    <div>
      <h2>Color</h2>
      <div>{selected}</div>
      {styles === [] ? null: <div className="styleSelect">{styles.map((style) => {
        let marked = (style.name === selected);
        return (marked ? <div key={style.style_id} className="style selected" onClick={(e) => {clickHandler(e, style.style_id, style.name)}}></div> : <div key={style.style_id} className="style" onClick={(e) => {clickHandler(e, style.style_id, style.name)}}></div>);
      })}</div>}
      {/* thumbnail/color needs to go here ^ */}
    </div>
  );
};

export default StyleSelector;