import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CalenderContextProvider } from "./context/CalenderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CalenderContextProvider>
        <App />
      </CalenderContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
