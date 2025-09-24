import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="h-screen grid place-items-center bg-[#efed40]">
      <h1 className="text-[100px] font-bold text-[#242302] font-[Poppins] hover:bg-red-700 hover:text-white cursor-pointer active:scale-95 select-none">
        👋🏻 Lesson-104 👋🏻
      </h1>
    </div>
  </StrictMode>
);


/*
1. JSX
2. .ts vs .tsx vs .js vs .jsx
*/
