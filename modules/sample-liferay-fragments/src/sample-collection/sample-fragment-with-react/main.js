import React from "react";
import Button from "./Button";

export default function (props) {
  console.log("props", props);

  return (
    <div>
      <Button text="Hi There"></Button>
      <h1>Hello world IS again!</h1>
    </div>
  );
}
