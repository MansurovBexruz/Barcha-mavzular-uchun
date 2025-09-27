import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <body className="grid place-items-center bg-[#efed40]">
      <h1 className="text-[100px] text-blue-500 text-center mt-[300px]">Hello world</h1>
    </body>
  </StrictMode>
);

/*
1. JSX
2. .ts vs .tsx vs .js vs .jsx
*/
