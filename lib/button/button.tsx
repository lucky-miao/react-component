import React, { useState } from "react";
import { ButtonHTMLAttributes } from "react";
import classes from "../helpers/classes";
import "./button.scss";
import Icon from "../icon/icon";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: "important" | "danger" | "normal" | "lucky" | "animation" | "circle" | "loading";
}

const Button: React.FunctionComponent<Props> = props => {
  const { className, children, level, ...rest } = props;
  const [loading, setLoading] = useState(false)
  const changeLoadingState = ()=>{
    console.log(loading,123)
    if(!loading){
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },3000)
    }
  }

  if (level === "circle" ) {
    return (
      <button
        className={classes("lui-circle", `lui-circle-${level}`, className)}
        {...rest}
        
      >
        {children}
      </button>
    );
  }else if(level === "loading" ){
    return (
      <button
        className={classes("lui-circle", `lui-circle-${level}`, className)}
        {...rest}
        onClick={changeLoadingState}
      >
        {loading?<Icon name="loading" />:children}
      </button>
    );
  }
  return (
    <button
      className={classes("lui-button", `lui-button-${level}`, className)}
      {...rest}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  level: "normal"
};
export default Button;
