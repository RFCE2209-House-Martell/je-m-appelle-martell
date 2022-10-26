import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFacebookSquare, FaTwitter, FaPinterest } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import StarComponent from '../sharedFolder/starComponent.jsx';

const ProductDetails = (props) => {
  const [data, setData] = useState({});
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}products/${props.productId}`, {
      headers: {
        'Authorization': process.env.REACT_APP_API_KEY
      }
    }).then((data) => {
      setData(data.data);
    }).catch((err) => {
      console.log(err);
    });

    axios.get(`${process.env.REACT_APP_BASE_URL}reviews/meta/?product_id=${props.productId}`, {
      headers: {
        'Authorization': process.env.REACT_APP_API_KEY
      }
    }).then((data) => {
      setRatings(data.data.ratings);
    }).catch((err) => {
      console.log(err);
    });
  }, [props.productId]);

  var avgStars = () => {
    let sum = 0;
    let count = 0;
    for (let num in ratings) {
      count += Number(ratings[num]);
      sum += (num * ratings[num]);
    }
    return sum/count;
  }

  if (JSON.stringify(data) !== '{}') {
    var category = data.category.toUpperCase();
    var title = data.name;
    var description = data.description;
    var price = data.default_price || null;
    var salesPrice = null;
    if (props.data.results !== undefined) {
      var temp = props.data.results.find(obj => obj.style_id === props.styleId);
      if (temp !== undefined) {
        salesPrice = temp.sale_price;
      }
    }
  }

  var texts = ['Check out this cool product! 😎', 'This would be the greatest birthday present 😉🎁', 'OMG 😱 Isn\'t this the coolest thing ever?', 'Look what I found today!! 🤩', 'Just bought this 🤑'];

  return (
    <div className="details">
      <div className="category">{category}</div>
      <h1 className="productName">{title}</h1>
      <StarComponent stars={avgStars()}/>
      {salesPrice === null ? <h2 className='price'>{`$${price}`}</h2> : <h2 className='price'>{`$${salesPrice}\t`}<s>{`$${price}`}</s></h2>}
      <p>{description}</p>
      <p className="share">Share</p>
      <IconContext.Provider value={{color: "#900505", size: "2em"}}>
          <a className="shareIcons" href={`https://www.facebook.com/sharer/sharer.php?u=${props.socialPhoto}`} target="_blank"><FaFacebookSquare/></a>
          <a className="shareIcons" href={`https://twitter.com/intent/tweet?url=${props.socialPhoto}&text=${texts[Math.floor(Math.random() * 5)]}`} target="_blank"><FaTwitter/></a>
          <a className="shareIcons" href={`https://www.pinterest.com/pin-builder/?url=https://www.google.com/&media=${props.socialPhoto}`} target="_blank"><FaPinterest/></a>
      </IconContext.Provider>
    </div>
  )
};

export default ProductDetails;