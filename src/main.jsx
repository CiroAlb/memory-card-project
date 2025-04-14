import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MemoryCardApp from "./MemoryCardApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoryCardApp></MemoryCardApp>
  </StrictMode>
);
