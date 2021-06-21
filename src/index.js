import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NavProvider from "./contexts/navContext";
import reportWebVitals from "./reportWebVitals";
import HomeProvider from "./contexts/HomeContext";
import ProvProvider from "./contexts/providerContext";

ReactDOM.render(
  <React.StrictMode>
    <NavProvider>
      <HomeProvider>
        <ProvProvider>
        <App />
        </ProvProvider>
      </HomeProvider>
    </NavProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
