import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';

const AnswerSearchBar = (props) => {

  return (
    <div className="search-container">
      <input className="search-bar" type="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS. " onChange={(e) => props.onSearch(e)} value={props.Input} />
      <div className="search-icon-container">
      <BsSearch color={'black'} size="30px" />
      </div>
    </div>
  );
}

export default AnswerSearchBar;