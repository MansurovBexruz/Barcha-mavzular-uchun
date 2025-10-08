import { createRoot } from "react-dom/client";
import "./index.css";


import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  const colors = Array.from(
    { length: 9 },
    () =>
      "#" +
      Math.floor(Math.random() * 17000000)
        .toString(16)
        .padStart(6, "0")
  );

  function setBodyColor(color: string) {
    document.body.style.backgroundColor = color;
  }

  return (
    <div className="p-[50px] flex flex-wrap gap-[30px] border-[2px] border-gray-500 m-[200px] ml-[400px] w-[765px]">
      <div
        onClick={() => setBodyColor(colors[0])}
        className="w-[200px] h-[100px] border-[2px] rounded-[15px] border-gray-500 hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center text-white font-bold"
        style={{ backgroundColor: colors[0] }}
      >
        {colors[0]}
      </div>
      <div
        onClick={() => setBodyColor(colors[2])}
        className="w-[200px] h-[100px] border-[2px] rounded-[15px] border-gray-500 hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center text-white font-bold"
        style={{ backgroundColor: colors[2] }}
      >
        {colors[2]}
      </div>
      <div
        onClick={() => setBodyColor(colors[3])}
        className="w-[200px] h-[100px] border-[2px] rounded-[15px] border-gray-500 hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center text-white font-bold"
        style={{ backgroundColor: colors[3] }}
      >
        {colors[3]}
      </div>
      <div
        onClick={() => setBodyColor(colors[4])}
        className="w-[200px] h-[100px] border-[2px] rounded-[15px] border-gray-500 hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center text-white font-bold"
        style={{ backgroundColor: colors[4] }}
      >
        {colors[4]}
      </div>
      <div
        onClick={() => setBodyColor(colors[5])}
        className="w-[200px] h-[100px] border-[2px] rounded-[15px] border-gray-500 hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center text-white font-bold"
        style={{ backgroundColor: colors[5] }}
      >
        {colors[5]}
      </div>
      <div
        onClick={() => setBodyColor(colors[6])}
        className="w-[200px] h-[100px] border-[2px] rounded-[15px] border-gray-500 hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center text-white font-bold"
        style={{ backgroundColor: colors[6] }}
      >
        {colors[6]}
      </div>
      <div
        onClick={() => setBodyColor(colors[7])}
        className="w-[200px] h-[100px] border-[2px] rounded-[15px] border-gray-500 hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center text-white font-bold"
        style={{ backgroundColor: colors[7] }}
      >
        {colors[7]}
      </div>
      <div
        onClick={() => setBodyColor(colors[8])}
        className="w-[200px] h-[100px] border-[2px] rounded-[15px] border-gray-500 hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center text-white font-bold"
        style={{ backgroundColor: colors[8] }}
      >
        {colors[8]}
      </div>
      <div
        onClick={() => setBodyColor(colors[1])}
        className="w-[200px] h-[100px] border-[2px] rounded-[15px] border-gray-500 hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center text-white font-bold"
        style={{ backgroundColor: colors[1] }}
      >
        {colors[1]}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
