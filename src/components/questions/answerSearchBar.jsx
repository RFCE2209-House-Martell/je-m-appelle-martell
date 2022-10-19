import React, { useState, useEffect } from 'react';

const AnswerSearchBar = (props) => {

  return (
    <div>
      <input type="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS." onChange={(e) => props.onSearch(e)} value={props.Input} />
    </div>
  );
}

export default AnswerSearchBar;