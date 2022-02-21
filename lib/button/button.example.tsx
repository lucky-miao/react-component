import React from "react";
import Button from "./button";

const ButtonExample: React.FunctionComponent = () => {
  return (
    <>
      <Button level="normal">按钮</Button>
      <Button level="animation">按钮</Button>
      <Button level="lucky">按钮</Button>
      <Button level="circle">按钮</Button>
      <Button level="loading">
        按钮
      </Button>
    </>
  );
};

export default ButtonExample;
