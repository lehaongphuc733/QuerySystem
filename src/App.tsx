import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Login } from "./components/Login";
import { GivePassAgain } from "./components/GivePassAgain";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  // const [] = useState(false);
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/givepassagain" element={<GivePassAgain />} />
        </Routes>
      </BrowserRouter> */}

      {/* <Router>
        <Login />
        <Route path="/quen-mat-khau" component={<GivePassAgain />} />
      </Router> */}
      <Login></Login>
      {/* <GivePassAgain /> */}
    </div>
  );
}

export default App;
