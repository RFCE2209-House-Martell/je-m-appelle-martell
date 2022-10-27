import React from 'react';
import api from './api.js';

const Logger = (props) => {
  return (<div onClick={(e) => props.logHandler(e)}>{props.children}</div>);
};

export default Logger;