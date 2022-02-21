import React, { Fragment } from "react";
import Checkbox from "./checkbox";

const CheckboxExample: React.FunctionComponent = () => {
  const examplearr1 = ["北京", "上海", "广州", "深圳"];
  const defaultCheck = [true, false, true, false];
  return(
    <Fragment>
      Example1
       <Checkbox list={examplearr1} defaultCheck={defaultCheck}></Checkbox>
       Example2 limit 3
       <Checkbox list={examplearr1} defaultCheck={defaultCheck} limit={3}></Checkbox>
    </Fragment>
  );
};

export default CheckboxExample;
