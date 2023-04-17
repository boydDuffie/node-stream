import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  // FIXME: We need to find a way to ensure the Game is only mounted once
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
