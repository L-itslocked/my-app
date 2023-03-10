import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <App />
    </div>
    <nav className="navbar fixed-bottom">
      <div className="container-fluid">
        <footer>
          <a
            href="https://github.com/L-itslocked/my-app"
            rel="noreferrer"
            target="_blank"
          >
            Open-source code on GitHub{" "}
          </a>{" "}
          and{" "}
          <a
            href="https://dapper-tiramisu-226c4a.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            hosted on Netlify
          </a>{" "}
          by Laura Doyon
        </footer>
      </div>
    </nav>
  </React.StrictMode>
);
