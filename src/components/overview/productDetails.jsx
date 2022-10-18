import React, { useState, useEffect } from 'react';

const ProductDetails = (props) => {

  console.log(JSON.stringify(props.data) === '{}');

  return (
    <div>
      <h1>{}</h1>
    </div>
  )
};

export default ProductDetails;