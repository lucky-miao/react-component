import React, { useState } from "react";
import Dialog, { alert, confirm, modal } from "./dialog";
import Button from '../button/button';

export default function() {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const openModal = () => {
    modal(
      <h1>
        你好
      </h1>
    );
  };
  return (
    <div>
      <div>
        <h1>example 4</h1>
        <Button onClick={openModal}>modal</Button>
      </div>

      <div>
        <h1>example 3</h1>
        <Button onClick={() => alert("1")}>alert</Button>
        <Button
          onClick={() =>
            confirm(
              "1",
              () => {
                console.log("你点击了yes");
              },
              () => {
                console.log("你点击了no");
              }
            )
          }
        >
          confirm
        </Button>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          border: "1px solid red",
          color: "red"
        }}
      >
        <h1>example 1</h1>
        <Button onClick={() => setX(!x)}>click</Button>
        <Dialog
          visible={x}
          buttons={[
            <Button
              level="lucky"
              onClick={() => {
                setX(false);
              }}
            >
              确定
            </Button>,
            <Button
             onClick={() => {
               setX(false);
             }}
           >
             重置
           </Button>
          ]}
          onClose={() => {
            setX(false);
          }}
        >
          <strong>hi</strong>
        </Dialog>
      </div>

      <div style={{ position: "relative", zIndex: 9 }}>
        <h1>example 2</h1>
        <Button onClick={() => setY(!y)}>click</Button>
        <Dialog
          visible={y}
          closeOnClickMask={true}
          buttons={[
            <Button
            level="lucky"
              onClick={() => {
                setY(false);
              }}
            >
              确定
            </Button>
          ]}
          onClose={() => {
            setY(false);
          }}
        >
          <strong>content ......</strong>
        </Dialog>
      </div>
    </div>
  );
}
