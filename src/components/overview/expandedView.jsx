import React from 'react';

const ExpandedView = (props) => {
  return (
    <div className="zoomView" onClick={() => props.setZoom(false)}>
      <div className="zoomBorder" onClick={(e) => e.stopPropagation()}>
        <img src={props.img} className="zoomImage" onClick={() => console.log('test')}/>
        <div className="closeZoom" onClick={() => props.setZoom(false)}>x</div>
      </div>
    </div>
  )
};

export default ExpandedView;