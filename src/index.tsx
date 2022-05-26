import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GivePassAgain } from "./components/GivePassAgain";
import { Login } from "./components/Login";
import { GivePassAgainNew } from "./components/GivePassAgainNew";
import { MyDashboard } from "./components/Dashboard/MyDashboard";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dang-nhap" element={<MyDashboard />} />
        <Route path="/quen-mat-khau" element={<GivePassAgain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dat-lai-mat-khau" element={<GivePassAgainNew />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
