import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { UploadProvider } from "./context/uploadFile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UploadProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UploadProvider>
  </StrictMode>
);
