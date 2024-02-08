import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";

if (process.env.REACT_APP_MICROAPP_ENV === "production") {
  class Microapp2 extends HTMLElement {
    connectedCallback() {
      const mountPoint = document.createElement("div");
      this.attachShadow({ mode: "open" }).appendChild(mountPoint);
      ReactDOM.render(<App />, mountPoint);
    }
  }

  customElements.define("microapp2-root", Microapp2);
} else {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
