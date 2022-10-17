import React, { useState, useEffect } from 'react';
import ImageGallery from './imageGallery.jsx';
import StyleSelector from './styleSelector.jsx';
import axios from 'axios';
import './overviewStyles.css';

const Overview = (props) => {
  const [data, setData] = useState({});
  const [styleId, setStyleId] = useState(null);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${props.productId}/styles`, {
      headers: {
        'Authorization': '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'
      }
    }).then((data) => {
      setData(data.data);
      setStyleId(data.data.results[0].style_id);
    });
  }, []);

  return (
    <div>
      Overview
      <ImageGallery productId={props.productId} data={data} styleId={styleId}/>
      <StyleSelector productId={props.productId} data={data} setStyleId={setStyleId}/>
    </div>
  );
}

export default Overview;