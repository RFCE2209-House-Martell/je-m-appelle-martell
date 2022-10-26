import React, { useState, useEffect } from 'react';
import ImageGallery from './imageGallery.jsx';
import StyleSelector from './styleSelector.jsx';
import ProductDetails from './productDetails.jsx';
import AddtoCart from './addToCart.jsx';
import axios from 'axios';
import './styling/overviewStyles.css';

const Overview = (props) => {
  const [data, setData] = useState({});
  const [styleId, setStyleId] = useState(null);
  const [socialPhoto, setSocialPhoto] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}products/${props.productId}/styles`, {
      headers: {
        'Authorization': process.env.REACT_APP_API_KEY
      }
    }).then((data) => {
      setData(data.data);
      setStyleId(data.data.results[0].style_id);
    }).catch((err) => {
      console.log(err);
    });
  }, [props.productId]);


  return (
    <div className="widget">
      <ImageGallery data={data} styleId={styleId} setSocialPhoto={setSocialPhoto}/>
      <div className="productDetails">
        <ProductDetails productId={props.productId} data={data} styleId={styleId} socialPhoto={socialPhoto}/>
        <StyleSelector productId={props.productId} data={data} setStyleId={setStyleId}/>
        <AddtoCart data={data} styleId={styleId} setCart={props.setCart}/>
      </div>
    </div>
  );
}

export default Overview;