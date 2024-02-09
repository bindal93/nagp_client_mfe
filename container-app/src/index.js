import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

const injectScript = (src) => {
  const script = document.createElement("script");
  script.defer = true;
  script.src = src;
  document.head.appendChild(script);
};

// Function to inject link elements
const injectStylesheet = (href) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
};

// Inject scripts and stylesheets
// const microappsPath = [
//   "https://elegant-trifle-b28a51.netlify.app/microapp1/",
//   "https://elegant-trifle-b28a51.netlify.app/microapp2/"
// ];
const microappsPath = ["http://192.168.1.6:8081/", "http://192.168.1.6:8082/"];
microappsPath.forEach((path) => {
  injectScript(`${path}static/js/main.js`);
  injectStylesheet(`${path}static/css/main.css`);
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
