import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GivePassAgain } from "./components/GivePassAgain";
import { Login } from "./components/Login";
import { GivePassAgainNew } from "./components/GivePassAgainNew";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { PageInf } from "./components/Dashboard/PageInf";
import { Device } from "./components/Device/Device";
import { Services } from "./components/Service/Services";
import { NumberOf } from "./components/NumberOf/NumberOf";
import { AddDevice } from "./components/Device/AddDevice";
import { DetailDevice } from "./components/Device/Detail/DetailDevice";
import { UpdateDevice } from "./components/Device/Update/UpdateDevice";
import { DetailService } from "./components/Service/Detail/DetailService";
import { UpdateService } from "./components/Service/Update/UpdateService";
import { AddService } from "./components/Service/Add/AddService";
import { DetailNumber } from "./components/NumberOf/Detail/DetailNumber";
import { AddNumber } from "./components/NumberOf/AddNumber/AddNumber";
import { NewNumber } from "./components/NumberOf/AddNumber/NewNumber";
import { Report } from "./components/Report/Report";
import { ManageRole } from "./components/ManageRole/ManageRole";
import { UpdateRole } from "./components/ManageRole/UpdateRole/UpdateRole";
import { AddRole } from "./components/ManageRole/AddRole/AddRole";
import { MaAcc } from "./components/ManageAccount/MaAcc";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/info" element={<PageInf />} />

        {/* Device */}
        <Route path="/device" element={<Device />} />
        <Route path="/add-device" element={<AddDevice />} />
        <Route path="/detail-device" element={<DetailDevice />} />
        <Route path="/update-device" element={<UpdateDevice />} />

        {/* Service */}
        <Route path="/add-service" element={<AddService />} />
        <Route path="/detail-service" element={<DetailService />} />
        <Route path="/update-service" element={<UpdateService />} />
        <Route path="/services" element={<Services />} />

        {/* Number Of */}
        <Route path="/numberof" element={<NumberOf />} />
        <Route path="/detail-number" element={<DetailNumber />} />
        <Route path="/add-number" element={<AddNumber />} />
        {/* <Route path="/new-number" element={<NewNumber />} /> */}

        {/* User */}
        <Route path="/quen-mat-khau" element={<GivePassAgain />} />
        <Route
          path="/login"
          element={<Login name="lequynhaivan01" password="12345678" />}
        />
        <Route path="/dat-lai-mat-khau" element={<GivePassAgainNew />} />

        {/*  Report*/}
        <Route path="/report" element={<Report />} />

        {/* Manage Role */}
        <Route path="/manage-role" element={<ManageRole />} />
        <Route path="/update-role" element={<UpdateRole />} />
        <Route path="/add-role" element={<AddRole />} />

        {/* Manage Account */}
        <Route path="/manage-account" element={<MaAcc />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
