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
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
          {props.children}
        </div>
      </div>
    </div>
  )
};

export default Modal;

// const modalStyles = {
//   position: 'fixed',
//   left: '0',
//   right: '0',
//   top: '0',
//   bottom: '0',
//   backgroundColor: 'rgba(0,0,0,0.5)',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center'
// };