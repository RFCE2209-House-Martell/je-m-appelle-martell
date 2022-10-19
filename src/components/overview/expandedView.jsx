import React, { useState, useEffect} from 'react';

const ExpandedView = (props) => {
  const [zoomIn, setZoomIn] = useState(false);
  const [mousePos, setMousePos] = useState({x: 0, y: 0});

  // useEffect(() => {

  // }, []);

  var handleZoom = (e) => {
    setMousePos({x: e.clientX, y: e.clientY});
    window.addEventListener('mousemove', (event) => setMousePos({x: event.clientX, y: event.clientY}))
  };

  return (
    <div className="zoomView" onClick={(e) => {
      if (e.target.className === "zoomView") {
        props.setZoom(false);
      }
    }}>
      {props.selected === 0 ? null: <button className="zoomarrow" onClick={() => props.handleArrows('left')}>{'<'}</button>}
      <div className="zoomBorder">
        <img src={props.img} className="zoomImage" onClick={(e) => {
          setZoomIn(!zoomIn);
          if (!zoomIn) {
            handleZoom(e);
          }
        }}/>
        <div className="closeZoom" onClick={() => {props.setZoom(false)}}>𐄂</div>
        {zoomIn ? <div className="movingZoom" style={{left: mousePos.x + 10, top: mousePos.y + 10}}>testing!</div> : null}
      </div>
      {props.selected === props.photos.length - 1 ? null : <button className="zoomarrow" onClick={() => props.handleArrows('right')}>{'>'}</button>}
    </div>
  )
};

export default ExpandedView;