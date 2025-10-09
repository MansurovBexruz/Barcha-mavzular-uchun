import { StrictMode, useState, useEffect } from "react";
import "./index.css";

export function App() {
  const [time, setTime] = useState(0.1 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime(prev => prev - 1); 
    }, 1000);

    return () => clearInterval(interval); 
  }, [isRunning, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <body className="bg-[#BA4949]">
      <div className="bg-[#FFFFFF1A] w-[550px] h-[350px] ml-[480px] mt-[250px] flex flex-col justify-center items-center gap-[15px] rounded-[10px]">
        <div className="flex gap-[20px]">
          <p className="px-[10px] rounded-[4px] text-[18px] font-mono font-medium text-white bg-[#0000001e] cursor-pointer hover:scale-110 transition-transform">
            Pomodoro
          </p>
          <p className="px-[10px] rounded-[4px] text-[18px] font-mono font-medium text-white bg-[#0000001e] cursor-pointer hover:scale-110 transition-transform">
            Short Break
          </p>
          <p className="px-[10px] rounded-[4px] text-[18px] font-mono font-medium text-white bg-[#0000001e] cursor-pointer hover:scale-110 transition-transform">
            Long Break
          </p>
        </div>
        <h1 className="text-[100px] text-white font-mono font-bold">
          {" "}
          {formatNumber(minutes)}:{formatNumber(seconds)}
        </h1>
        <button
          onClick={() => setIsRunning(true)}
          className="text-[20px] font-bold px-[40px] rounded-[5px] py-[10px] bg-white text-[#BA4949] active:relative top-[2px] cursor-pointer hover:scale-110 transition-transform"
        >
          START
        </button>
      </div>
    </body>
  );
}
