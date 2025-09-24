import React from "react";

export const Need = () => (
  <div>
    <h1>Hello</h1>
    <div className="box" />
  </div>
);

const a: React.JSX.Element = React.createElement("h1", { children: "Hello World" }); // <h1>Hello World</h1>;
console.log(a);
