import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="w-[2px] h-[100%] bg-[#E3E8EE] absolute left-[230px]"></div>
    <nav className="flex items-center">
      <img src="/public/logo.svg" alt="" className="p-[24px] mr-[150px]" />
      <ul className="flex items-center gap-[40px]">
        <li className="text-blue-600 font-bold">
          <a href="#">Board</a>
        </li>
        <li className="font-medium">
          <a href="">List</a>
        </li>
        <li className="font-medium">
          <a href="">Calendar</a>
        </li>
      </ul>
      <div className="ml-[570px] flex gap-[20px]">
        <input
          type="search"
          placeholder="Search"
          className="w-[240px] h-[40px] rounded-[6px] p-[13px] pl-[20px] border-[2px] border-[#DDE2E4]"
        />
        <img src="/public/settings-logo.svg" alt="" />
      </div>
    </nav>
    <div className="w-[100%] h-[1.5px] bg-[#E3E8EE]"></div>

    <div className="flex flex-col gap-[272px] absolute top-[90px]">
      <div className="h-[100%] w-[240px] py-[60px] px-[28px] flex flex-col gap-[20px]">
        <div className="flex items-center gap-[15px]">
          <img src="/public/dashboard.svg" alt="" />
          <p className="text-[#344054] font-medium">Dashboard</p>
        </div>
        <div className="flex items-center gap-[15px]">
          <img src="/public/project.svg" alt="" />
          <p className="text-[#344054] font-medium">Project</p>
          <img src="/public/bottom.svg" className="ml-[60px] mt-[3px]" />
        </div>
        <div className="flex items-center gap-[15px]">
          <img src="/public/tasks.svg" alt="" />
          <p className="text-[#344054] font-medium">Tasks</p>
          <div className="ml-[60px] text-[15px] px-[10px] py-[2px] rounded-[16px] bg-[#F2F4F7]">10</div>
        </div>
        <div className="flex items-center gap-[15px]">
          <img src="/public/message.svg" alt="" />
          <p className="text-[#344054] font-medium">Message</p>
        </div>
        <div className="flex items-center gap-[15px]">
          <img src="/public/users.svg" alt="" />
          <p className="text-[#344054] font-medium">Users</p>
        </div>
      </div>

      <div className="flex flex-col gap-[24px]">
        <div className="flex gap-[10px] bg-[#F5F5F5] w-[100px] h-[40px] p-[5px] rounded-4xl ml-[28px]">
          <div className="">
            <img src="/public/light.svg" alt="" className="w-[40px] h-[30px] py-[4px] bg-white rounded-2xl" />
          </div>
          <img src="/public/dark.svg" alt="" className="w-[40px] h-[30px] py-[4px]" />
        </div>
        <div className="w-[180px] h-[1.5px] bg-[#E3E8EE] ml-[28px]"></div>
        <div className="flex gap-[3px] ml-[28px] items-center">
          <img src="/public/avatar.svg" alt="" />
          <div>
            <p className="text-black text-[14px]">Donye</p>
            <p className="text-[#667085] text-[12px]">collins@brees.com</p>
          </div>
          <div className="px-[9px] py-[14px] ml-[10px] border border-[#EBEBEB] rounded-[6px]">
            <img src="/public/nuqta.svg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div className="ml-[235px] p-[32px] flex items-start gap-[700px]">
      <div className="flex flex-col gap-[32px] items-start">
        <div>
          <p className="text-[#5B6871] text-[12px]">Project - International - Product Web</p>
          <h1 className="text-black text-[50px] font-bold">My tasks</h1>
        </div>
        <img src="/public/avatars.svg" alt="" />
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[6px] border border-[#D0D5DD]">
          <img src="/public/setting.svg" alt="" className="w-[20px]"/>
        </div>
        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[6px] border border-[#D0D5DD]">
          <img src="/public/nuqta.svg" alt="" className="w-[20px]"/>
        </div>
        <button className="px-[24.5px] py-[8px] rounded-[6px] bg-[#1458DD] text-white font-medium">+ New Task</button>
      </div>
    </div>
  </StrictMode>
);

/*
1. JSX
2. .ts vs .tsx vs .js vs .jsx
*/
