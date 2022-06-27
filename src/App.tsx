import "./App.css";
import { Login } from "./components/Login";
import { Route, Routes } from "react-router-dom";

import { Dashboard } from "./components/Dashboard/Dashboard";
import { PageInf } from "./components/Dashboard/PageInf";
import { Device } from "./components/Device/Device";
import { AddDevice } from "./components/Device/AddDevice";
import { DetailDevice } from "./components/Device/Detail/DetailDevice";
import { UpdateDevice } from "./components/Device/Update/UpdateDevice";
import { AddService } from "./components/Service/Add/AddService";
import { DetailService } from "./components/Service/Detail/DetailService";
import { UpdateService } from "./components/Service/Update/UpdateService";
import { Services } from "./components/Service/Services";
import { NumberOf } from "./components/NumberOf/NumberOf";
import { DetailNumber } from "./components/NumberOf/Detail/DetailNumber";
import { AddNumber } from "./components/NumberOf/AddNumber/AddNumber";
import { GivePassAgain } from "./components/GivePassAgain";
import { GivePassAgainNew } from "./components/GivePassAgainNew";
import { Report } from "./components/Report/Report";
import { ManageRole } from "./components/ManageRole/ManageRole";
import { UpdateRole } from "./components/ManageRole/UpdateRole/UpdateRole";
import { AddRole } from "./components/ManageRole/AddRole/AddRole";
import { MaAcc } from "./components/ManageAccount/MaAcc";
import { AddAct } from "./components/ManageAccount/AddAccount/AddAct";
import { UpdateAct } from "./components/ManageAccount/UpdateAccount/UpdateAct";
import { UserLog } from "./components/UserLog/UserLog";

function App() {
  return (
    <Routes>
      {/* User */}
      <Route path="/quen-mat-khau" element={<GivePassAgain />} />
      <Route
        path="/login"
        element={<Login name="lequynhaivan01" password="12345678" />}
      />
      <Route path="/dat-lai-mat-khau" element={<GivePassAgainNew />} />

      {/* Dashboard */}
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

      {/*  Report*/}
      <Route path="/report" element={<Report />} />

      {/* Manage Role */}
      <Route path="/manage-role" element={<ManageRole />} />
      <Route path="/update-role" element={<UpdateRole />} />
      <Route path="/add-role" element={<AddRole />} />

      {/* Manage Account */}
      <Route path="/manage-account" element={<MaAcc />} />
      <Route path="/add-account" element={<AddAct />} />
      <Route path="/update-maAct" element={<UpdateAct />} />

      {/* User Log */}
      <Route path="/user-log" element={<UserLog />} />
    </Routes>
  );
}
export default App;
