import React, { HTMLAttributes, useState } from "react";
import "./checkbox.scss";
import classes from "../helpers/classes";
import  { modal } from "../dialog/dialog";


interface Props extends HTMLAttributes<HTMLDivElement> {
  list: Array<String>;
  defaultCheck: Array<Boolean>;
  limit?: Number;
}

const Checkbox: React.FunctionComponent<Props> = props => {
  const { className, list, defaultCheck, limit,...rest } = props;
  const [checkState, setCheckState] = useState(defaultCheck)

  const changeCheckState = (i:number)=>{
    let newState = [...checkState]
    let count = checkState.reduce((a,b)=>{
      console.log(a,Number(b),'123')
      return  a+Number(b)
    },0)
    if(limit && count>=limit && !newState[i]){
      modal('超过最大限制')
      return 
    }else{
      newState[i] = !newState[i]
      setCheckState(newState)

    }
  }
  return (
    <div className={classes("lui-checkbox", className)} {...rest}>
      {list.map((el,i) => {
        const classList = `lui-checkbox-item ${checkState[i]? 'lui-checkbox-item-selected':''}`
        return <div onClick={()=>changeCheckState(i)} className={classList}>{el}</div>;
      })}
    </div>
  );
};

export default Checkbox;
