import React, { useState, useEffect } from 'react';
import _ from 'underscore';
import ExpandedView from './expandedView.jsx';
import './unavailable.jpeg';

const ImageGallery = (props) => {
  const [photos, setPhotos] = useState([]);
  const [mainImg, setMainImg] = useState('');
  const [thumbnails, setThumbnails] = useState([]);
  const [selected, setSelected] = useState(0);
  const [zoom, setZoom] = useState(false);

  var noImg = require('./unavailable.jpeg').default;
  // check for changes to style
  useEffect(() => {
    if (JSON.stringify(props.data) !== '{}') {
      var photoList = props.data.results.find(obj => obj.style_id === props.styleId);
      if (photoList !== undefined) {
        photoList = photoList.photos;
        setThumbnails(_.pluck(photoList, 'thumbnail_url'));
        var tempSelected = selected;
        if (selected >= photoList.length) {
          tempSelected = photoList.length - 1;
        }
        if (photoList[tempSelected].url !== null) {
          setMainImg(photoList[tempSelected].url);
          setPhotos(photoList);
        } else {
          setMainImg(noImg);
          setPhotos([]);
          setThumbnails([]);
        }
        props.setSocialPhoto(photoList[0].url);
      }
    }
  }, [props.styleId]);

  var clickHandler = (key) => {
    setMainImg(photos[key].url);
    setSelected(key);
  };

  var handleArrows = (direction) => {
    let temp = selected;
    if (direction === 'right' && selected !== photos.length - 1) {
      setMainImg(photos[temp + 1].url);
      setSelected(temp + 1);
    } else if (direction === 'left' && selected !== 0) {
      setMainImg(photos[temp - 1].url);
      setSelected(temp - 1);
    }
  }

  var panThumbnails = (direction) => {
    if (direction ==='right') {

    } else if (direction === 'left') {

    }
  }

  var zoomIn = () => {
    setZoom(true);
  }

  return (
    <div className="imgContainer">
      <div className="thumbnailContainer">
        {thumbnails.map((thumbnail, key) => {
          let marked = (key === selected);
          return (marked ? <img className="thumbnail selected" src={thumbnail} key={key} onClick={(e) => clickHandler(key)}/> : <img className="thumbnail" src={thumbnail} key={key} onClick={(e) => clickHandler(key)}/>);
        })}
      </div>

      <div className="carousel">
        {selected === 0 ? null: <button className="arrow arrowL" onClick={() => handleArrows('left')}>{'<'}</button>}
        <img src={mainImg} className="mainImg" onClick={zoomIn}/>
        {selected === photos.length - 1 || photos.length === 0 ? null : <button className="arrow arrowR" onClick={() => handleArrows('right')}>{'>'}</button>}
        {zoom ? <ExpandedView img={mainImg} setZoom={setZoom} selected={selected} photos={photos} handleArrows={handleArrows}/> : null}
      </div>
    </div>
  )
}

export default ImageGallery;