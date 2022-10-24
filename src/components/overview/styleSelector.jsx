import React, { useState, useEffect } from 'react';

var StyleSelector = (props) => {
  const [styles, setStyles] = useState([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    if (JSON.stringify(props.data) !== '{}') {
      setStyles(props.data.results);
      setSelected(props.data.results[0].name);
    }
  }, [props.data])

  var clickHandler = (e, id, name) => {
    props.setStyleId(id);
    setSelected(name);
  }

  return (
    <div className="styleSelector">
      <h2>Color</h2>
      <div>{selected}</div>
      {styles === [] ? null: <div className="styleSelect">{styles.map((style) => {
        let marked = (style.name === selected);
        return (marked ? <div key={style.style_id} className="style selectedStyle" style={{backgroundImage: `url(${style.photos[0].thumbnail_url})`}} onClick={(e) => {clickHandler(e, style.style_id, style.name)}}></div> : <div key={style.style_id} className="style" style={{backgroundImage: `url(${style.photos[0].thumbnail_url})`}} onClick={(e) => {clickHandler(e, style.style_id, style.name)}}></div>);
      })}</div>}
    </div>
  );
};

export default StyleSelector;