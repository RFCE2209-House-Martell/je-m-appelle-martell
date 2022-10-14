import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'underscore';

const ImageGallery = (props) => {
  const [data, setData] = useState({});
  const [mainImg, setMainImg] = useState(0);
  const [mainImgUrl, setMainImgUrl] = useState('');
  const [style, setStyle] = useState(0);
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${props.productId}/styles`, {
      headers: {
        'Authorization': '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'
      }
    }).then((data) => {
      setData(data);
      setMainImgUrl(data.data.results[style].photos[mainImg].url);
      setThumbnails(_.pluck(data.data.results[0].photos, 'thumbnail_url'));
    });
  }, [])

  return (
    <div>
      <h1>main img:</h1>
      <img src={mainImgUrl}/>
      <h1>thumbnails:</h1>
      {thumbnails.map((thumbnail, key) => (<img src={thumbnail} key={key} onClick={(e) => {
        setMainImg(key);
        setMainImgUrl(data.data.results[style].photos[mainImg].url);
        console.log('click');
      }}/>))}
    </div>
  )
}

export default ImageGallery;