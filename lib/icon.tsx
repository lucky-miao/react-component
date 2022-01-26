import React from 'react';
import './importIcons';
import './icon.scss';

interface IconProps  {
  name: string,
  onclick: () => void,
  //React.MouseEventHandler<SVGAElement>
}


const Icon:React.FunctionComponent<IconProps> = (props)=>{
  return (
      <svg className='lui-icon'>
        <use xlinkHref = {`#${props.name}`} onClick={props.onclick} />
      </svg>
  )
}

export default Icon;