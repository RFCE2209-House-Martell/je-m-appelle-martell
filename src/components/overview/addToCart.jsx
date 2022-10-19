import React from 'react';

const AddtoCart = () => {
  var addHandler = () => {
    console.log('added!');
  }

  return (
    <div className="form">
      <p className="formItem">Size</p>
      <p className="formItem">Quantity</p>
      <select className="formItem"/>
      <select className="formItem"/>
      <button className="formItem" onClick={addHandler}>Add to Cart</button>
    </div>
  );
};

export default AddtoCart;