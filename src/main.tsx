import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <nav className="px-[100px] py-[42px] flex gap-[450px]">
      <div className="flex gap-[40px] items-center">
        <img src="/public/logo.svg" alt="" />
        <div className="flex gap-[40px]">
          <p>Home</p>
          <p>About</p>
          <p>Properties</p>
          <p>Agents</p>
          <p>Blog</p>
        </div>
      </div>
      <button className="text-[16px] font-bold px-[24px] py-[15px] bg-[#070707] text-white rounded-[12px]">
        Get started
      </button>
    </nav>

    <section>
      <div className="flex items-start p-[100px] gap-[230px]">
        <h1 className="font-bold text-[70px]">
          About our real <br /> state firm
        </h1>
        <div className="flex flex-col items-start gap-[60px]">
          <p className="mt-[20px] text-[18px] text-[#070707]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit et dui{" "}
            <br />
            tellus morbi integer neque, malesuada ac nulla tellu
          </p>
          <button className="rounded-[12px] bg-[#F15A29] px-[24px] py-[15px] font-bold text-[#FFFFFF]">
            Join our team
          </button>
        </div>
      </div>
    </section>

    <div className="px-[100px]">
      <img src="/public/room1.svg" alt="" />
      <img
        src="/public/room2.svg"
        className="relative left-[490px] bottom-[400px]"
      />
    </div>

    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Meet our team members
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl  shadow-lg text-center">
          <img src="/public/avatar1.svg" alt="" />
          <div className="flex p-[40px] items-start ">
            <div className="text-start">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Tom Holland
              </h3>
              <p className="text-gray-600 ">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
            </div>
            <a
              href="#"
              className="bg-[#F15A29] text-white px-[12px] font-bold text-[20px] py-[6px] rounded-[8px]"
            >
              in
            </a>
          </div>
        </div>
        <div className="bg-white rounded-xl  shadow-lg text-center">
          <img src="/public/avatar2.svg" alt="" />
          <div className="flex p-[40px] items-start ">
            <div className="text-start">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Tom Holland
              </h3>
              <p className="text-gray-600 ">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
            </div>
            <a
              href="#"
              className="bg-[#F15A29] text-white px-[12px] font-bold text-[20px] py-[6px] rounded-[8px]"
            >
              in
            </a>
          </div>
        </div>
        <div className="bg-white rounded-xl  shadow-lg text-center">
          <img src="/public/avatar3.svg" alt="" />
          <div className="flex p-[40px] items-start ">
            <div className="text-start">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Tom Holland
              </h3>
              <p className="text-gray-600 ">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
            </div>
            <a
              href="#"
              className="bg-[#F15A29] text-white px-[12px] font-bold text-[20px] py-[6px] rounded-[8px]"
            >
              in
            </a>
          </div>
        </div>
        <div className="bg-white rounded-xl  shadow-lg text-center">
          <img src="/public/avatar4.svg" alt="" />
          <div className="flex p-[40px] items-start ">
            <div className="text-start">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Tom Holland
              </h3>
              <p className="text-gray-600 ">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
            </div>
            <a
              href="#"
              className="bg-[#F15A29] text-white px-[12px] font-bold text-[20px] py-[6px] rounded-[8px]"
            >
              in
            </a>
          </div>
        </div>
        <div className="bg-white rounded-xl  shadow-lg text-center">
          <img src="/public/avatar5.svg" alt="" />
          <div className="flex p-[40px] items-start ">
            <div className="text-start">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Tom Holland
              </h3>
              <p className="text-gray-600 ">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
            </div>
            <a
              href="#"
              className="bg-[#F15A29] text-white px-[12px] font-bold text-[20px] py-[6px] rounded-[8px]"
            >
              in
            </a>
          </div>
        </div>
        <div className="bg-white rounded-xl  shadow-lg text-center">
          <img src="/public/avatar6.svg" alt="" />
          <div className="flex p-[40px] items-start ">
            <div className="text-start">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Tom Holland
              </h3>
              <p className="text-gray-600 ">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
            </div>
            <a
              href="#"
              className="bg-[#F15A29] text-white px-[12px] font-bold text-[20px] py-[6px] rounded-[8px]"
            >
              in
            </a>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <div className="px-[73px] py-[120px] bg-[#070707] ">
        <img src="/public/logo1.svg" alt="" />
        <p className="text-gray-500 mt-[20px]">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
          doin tempor <br /> incididunt labore et magna
        </p>
      </div>
    </footer>
  </StrictMode>
);
