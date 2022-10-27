import React from 'react';

const Logger = (props) => {
  return (<div onClick={(e) => props.logHandler(e)}>{props.children}</div>);
};

export default Logger;