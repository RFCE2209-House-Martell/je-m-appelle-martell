import React, { useState, useEffect } from 'react';
import _ from 'underscore';
import axios from 'axios';

const AddtoCart = (props) => {
  const [skus, setSKUs] = useState([]);
  const [selected, setSelected] = useState(0);
  const [info, setInfo] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [cart, setCart] = useState([]);
  const [soldOut, setSoldOut] = useState(false);

  useEffect(() => {
    document.querySelector('#size').value = 0;
    if (JSON.stringify(props.data) !== '{}') {
      var found = props.data.results.find(obj => obj.style_id === props.styleId);
      if (found !== undefined) {
        found = found.skus;
        setSKUs(_.pairs(found));
        setSelected(0);
        setQuantities([]);
      }
    }
  }, [props.styleId]);

  var sizeChange = (e) => {
    setSelected(e.target.value);
    let search = skus.find(obj => String(obj[0]) === e.target.value);
    if (search !== undefined) {
      setQuantities(Array.from(Array(search[1].quantity).keys()).slice(1));
    }
  }

  var carted = (e) => {
    if (selected === 0 || document.querySelector('#quantity').value === '-') { // invalid inputs
      alert('invalid input(s)');
    } else {
      let count = document.querySelector('#quantity').value;
      axios.post(`${process.env.REACT_APP_BASE_URL}cart`,
        {'sku_id': selected, count},
        {headers: {'Authorization': process.env.REACT_APP_API_KEY}}
      ).then((data)=> console.log(data.data));
    }
  }

  if (quantities.length === 0 && selected !== 0 && document.querySelector('.submit') !== null) {
    document.querySelector('.submit').disabled = true; // if out of stock, button is disabled
  } else if (document.querySelector('.submit') !== null) {
    document.querySelector('.submit').disabled = false;
  }

  return (
    <div className="form">
      <p className="formItem">Size</p>
      <p className="formItem">Quantity</p>
      <select id="size" className="formItem" onChange={(e) => sizeChange(e)} required>
        <option value={0}>Select Size</option>
        {skus.map((sku, key) => {
          return (<option key={key} value={sku[0]}>{sku[1].size}</option>);
      })}
      </select>
      <select id="quantity" className="formItem" required>
        {quantities.length === 0 && selected !== 0 ? <option>OUT OF STOCK</option> : <option>-</option>}
        {quantities.map((amt, key) => <option key={key}>{amt}</option>)}
      </select>
      <button className="formItem submit" onClick={(e) => carted(e)}>Add to Cart</button>
    </div>
  );
};

export default AddtoCart;