import React from "react";
import ReactDOM from "react-dom";
import Icon from "./icon/icon";

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
};

ReactDOM.render(
  <Icon 
    name="wechat" 
    onClick={fn} 
    onMouseEnter={()=>console.log('onMouseEnter')}
    onMouseLeave={()=>console.log('onMouseLeave')}
  />,
  document.querySelector('#root')
);

// export {Button, };
