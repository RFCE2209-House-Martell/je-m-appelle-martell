import React, { useState, useEffect } from 'react';
import ImageGallery from './imageGallery.jsx';
import StyleSelector from './styleSelector.jsx';
import ProductDetails from './ProductDetails.jsx';
import axios from 'axios';
import './styling/overviewStyles.css';

const Overview = (props) => {
  const [data, setData] = useState({});
  const [styleId, setStyleId] = useState(null);
  const [socialPhoto, setSocialPhoto] = useState('');

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
    <div className="widget">
      <ImageGallery data={data} styleId={styleId} setSocialPhoto={setSocialPhoto}/>
      <div>
        <ProductDetails productId={props.productId} data={data} styleId={styleId} socialPhoto={socialPhoto}/>
        <StyleSelector data={data} setStyleId={setStyleId}/>
      </div>
    </div>
  );
}

export default Overview;