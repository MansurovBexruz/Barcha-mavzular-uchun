import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  // 9 ta box uchun ranglar
  const [colors] = useState(
    Array.from({ length: 9 }, () =>
      "#" + Math.floor(Math.random() * 16777215).toString(16)
    )
  );

  // box bosilganda body rangini o'zgartiruvchi funksiya
  const setBodyColor = (color: string) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div className="p-[50px] flex flex-wrap gap-[30px] border-[2px] border-gray-500 m-[200px] ml-[400px] w-[765px]">
      {colors.map((color, idx) => (
        <div
          key={idx}
          onClick={() => setBodyColor(color)}
          className="w-[200px] h-[100px] border-[2px] rounded-[15px] border-gray-500 hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center text-white font-bold"
          style={{ backgroundColor: color }}
        >
          {color}
        </div>
      ))}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
