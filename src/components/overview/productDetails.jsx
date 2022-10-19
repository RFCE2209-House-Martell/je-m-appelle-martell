import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = (props) => {
  const [data, setData] = useState({});

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
  }, []);

  if (JSON.stringify(data) !== '{}') {
    var category = data.category;
    var title = data.name;
    var description = data.description;
    var price = data.default_price;
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
    <div className="productDetails">
      <div>{category}</div>
      <h1>{title}</h1>
      <div>* * * * * (reviews will go here)</div>
      {salesPrice === null ? <h3>{`$${price}`}</h3> : <h3>{`$${salesPrice}\t`}<s>{`$${price}`}</s></h3>}
      <p>{description}</p>
      <p>Share:</p>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${props.socialPhoto}`} target="_blank"><p>facebook</p></a>
      <a href={`https://twitter.com/intent/tweet?url=${props.socialPhoto}&text=${texts[Math.floor(Math.random() * 5)]}`} target="_blank"><p>twitter</p></a>
      <a href={`https://www.pinterest.com/pin-builder/?url=https://www.google.com/&media=${props.socialPhoto}`} target="_blank"><p>pinterest</p></a>
    </div>
  )
};

export default ProductDetails;