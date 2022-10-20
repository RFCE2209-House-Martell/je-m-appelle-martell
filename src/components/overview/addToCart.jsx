import React, { useState, useEffect } from 'react';
import _ from 'underscore';

const AddtoCart = (props) => {
  const [skus, setSKUs] = useState([]);
  const [selected, setSelected] = useState(-1);
  const [info, setInfo] = useState([]);
  const [size, setSize] = useState('');
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    if (JSON.stringify(props.data) !== '{}') {
      var found = props.data.results.find(obj => obj.style_id === props.styleId);
      if (found !== undefined) {
        found = found.skus;
        setSKUs(_.pairs(found));
      }
    }
  }, [props.styleId]);

  var setSizeQuant = () => {
    let search = skus.find(obj => String(obj[0]) === document.getElementById("size").value);
    if (search !== undefined) {
      setSize(search[1].size);
      setInfo(search[1]);
      setQuantities(Array.from(Array(search[1].quantity).keys()).slice(1));
    }
  }

  if (document.getElementById("size") !== null && info.length === 0) {
    setSizeQuant();
  }

  var addHandler = () => {
    console.log('size', size);
    console.log('quantity', document.getElementById("quantity").value);
  }

  return (
    <div className="form">
      <p className="formItem">Size</p>
      <p className="formItem">Quantity</p>
      <select id="size" className="formItem" onChange={setSizeQuant}>
        {skus.map((sku, key) => {
          return (<option key={key} value={sku[0]}>{sku[1].size}</option>);
      })}
      </select>
      <select id="quantity" className="formItem">
        {quantities.map((amt, key) => <option key={key}>{amt}</option>)}
      </select>
      <button className="formItem" onClick={addHandler}>Add to Cart</button>
    </div>
  );
};

export default AddtoCart;