import Icon from './icon';
import React from 'react';

import ReactDOM from 'react-dom';
const fn = ()=>{
  console.log(1);
};


ReactDOM.render(<Icon name='wechat' onclick ={fn} />,document.querySelector('#root'))

// export {Button, };