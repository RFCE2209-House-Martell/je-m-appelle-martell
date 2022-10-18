import React, { useState, useEffect } from 'react';

// In parent component
//   const [show, setShow] = useState(false);

//<div>
// <button onClick={() => setShow(true)}>Click Here</button>
//  <Modal show={show} onClose={() => setShow(false)}>
//     "Whatever you want to render in the modal"
// </Modal>
// </div>

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" style={props.styles}>
      <div className="modal-content">
        <div className="modal-body">
          {props.children}
        </div>
      </div>
    </div>
  )
};

export default Modal;