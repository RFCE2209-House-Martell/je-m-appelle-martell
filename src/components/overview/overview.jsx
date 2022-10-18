import React, { useState, useEffect } from 'react';
import ImageGallery from './imageGallery.jsx';
import StyleSelector from './styleSelector.jsx';
import ProductDetails from './ProductDetails.jsx';
import axios from 'axios';
import './styling/overviewStyles.css';

const Overview = (props) => {
  const [styleData, setStyleData] = useState({});
  const [prodData, setProdData] = useState({});
  const [styleId, setStyleId] = useState(null);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${props.productId}/styles`, {
      headers: {
        'Authorization': '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'
      }
    }).then((data) => {
      setStyleData(data.data);
      setStyleId(data.data.results[0].style_id);
    });

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${props.productId}`, {
      headers: {
        'Authorization': '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'
      }
    }).then((data) => {
      setProdData(data.data);
    })
  }, []);

  return (
    <div className="widget">
      <ImageGallery data={styleData} styleId={styleId}/>
      <div>
        <ProductDetails data={prodData} styleId={styleId}/>
        <StyleSelector data={styleData} setStyleId={setStyleId}/>
      </div>
    </div>
  );
}

export default Overview;