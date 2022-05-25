import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Login } from "./components/Login";
import { GivePassAgain } from "./components/GivePassAgain";
import { GivePassAgainNew } from "./components/GivePassAgainNew";

function App() {
  // const [] = useState(false);
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
