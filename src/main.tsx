import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <nav className="flex items-center px-[60px] py-[40px]">
      <div className="flex gap-[65px]">
        <h1 className="text-[#3563E9] text-[32px] font-medium">MORENT</h1>
        <div className="rounded-[70px] border-[1px] border-[#C3D4E966] px-[20px] py-[10px] flex items-center gap-[10px]">
          <img src="/public/search.svg" alt="" />
          <input type="search" placeholder="Search something here" className="w-[400px]" />
          <img src="/public/config.svg" alt="" />
        </div>
      </div>
      <img src="/public/accaount.svg" alt="" className="ml-[500px]" />
    </nav>
    <footer className="px-[60px] py-[80px]">
      <div>
        <h1 className="text-[#3563E9] text-[32px] font-medium">MORENT</h1>
        <p className="text-gray-500">Our vision is to provide convenience <br /> and help increase your sales business.</p>
      </div>
    </footer>
  </StrictMode>
);

/*
1. JSX
2. .ts vs .tsx vs .js vs .jsx
*/
