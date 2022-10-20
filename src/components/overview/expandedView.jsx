import React, { useState, useEffect} from 'react';

const ExpandedView = (props) => {
  const [zoomIn, setZoomIn] = useState(false);
  const [mousePos, setMousePos] = useState({x: 0, y: 0});
  const [overImg, setOverImg] = useState(true);

  var handleMouseMove = (e) => {
    setMousePos({x: e.clientX, y: e.clientY}); // position of mouse move
    setOverImg(event.target.className.includes('zoomImage')); // sets overImg as false when mouse is not over image
  }

  return (
    <div className="zoomView" onMouseMove={(e) => handleMouseMove(e)} onClick={(e) => {
      if (e.target.className === "zoomView") {
        props.setZoom(false);
      }
    }}>
      {props.selected === 0 ? <div className="placeholder">{'<'}</div> : <button className="zoomarrow" onClick={() => props.handleArrows('left')}>{'<'}</button>}
      <div className="zoomBorder">
        <img src={props.img} className={`zoomImage zoomImage-${zoomIn}`} onClick={(e) => {
          setZoomIn(!zoomIn);
        }}/>
        <div className="closeZoom" onClick={() => {props.setZoom(false)}}>𐄂</div>
        {zoomIn && overImg ? <div className="movingZoom" style={{left: mousePos.x + 10, top: mousePos.y + 10}}>testing!</div> : null}
      </div>
      {props.selected === props.photos.length - 1 ? <div className="placeholder">{'<'}</div> : <button className="zoomarrow" onClick={() => props.handleArrows('right')}>{'>'}</button>}
    </div>
  )
};

export default ExpandedView;