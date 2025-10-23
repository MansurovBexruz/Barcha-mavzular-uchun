import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <div className="grid h-screen place-items-center bg-[#2b87d1]">
      <App />
    </div>
  </StrictMode>
);
