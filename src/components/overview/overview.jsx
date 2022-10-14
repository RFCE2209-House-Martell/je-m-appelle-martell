import React, { useState, useEffect } from 'react';
import ImageGallery from './imageGallery.jsx';
import StyleSelector from './styleSelector.jsx';
import axios from 'axios';

const Overview = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${props.productId}/styles`, {
      headers: {
        'Authorization': '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'
      }
    }).then((data) => {
      setData(data.data);
    });
  }, []);

  return (
    <div>
      Overview
      <ImageGallery productId={props.productId}/>
      <StyleSelector productId={props.productId} data={data}/>
    </div>
  );
}

export default Overview;