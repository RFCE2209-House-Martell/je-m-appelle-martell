import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'underscore';

const ImageGallery = (props) => {
  const [photos, setPhotos] = useState(null);
  const [mainImg, setMainImg] = useState('');
  const [thumbnails, setThumbnails] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(null);

  if (props.data.results !== undefined) {
    var photoList = props.data.results.find(obj => obj.style_id === props.styleId);
    if (photoList !== undefined && currentStyle !== props.styleId) {
      console.log(currentStyle);
      console.log(props.styleId)
      photoList = photoList.photos;
      setThumbnails(_.pluck(photoList, 'thumbnail_url'));
      setMainImg(photoList[0].url);
      setPhotos(photoList);
      setCurrentStyle(props.styleId);
    }
  }

  var clickHandler = (key) => {
    setMainImg(photos[key].url);
  };

  return (
    <div>
      <img src={mainImg} height="500"/>
      <br/>
      {thumbnails.map((thumbnail, key) => (<img src={thumbnail} key={key} height="150" onClick={(e) => clickHandler(key)}/>))}
    </div>
  )
}

export default ImageGallery;