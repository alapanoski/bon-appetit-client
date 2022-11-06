import logo from "./logo.svg";
import "./App.css";

import { Route, Routes, useNavigate } from "react-router-dom";

import SignupPage from "./components/Signin";
import VolunteerForm from "./components/VolunteerForm";
import Login from "./components/Login";
import { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );

  function Logout() {
    window.localStorage.clear();
    setAuth(false);
    navigate("/");
  }

  return (
    <div className="App">
      <button className="p-2 rounded-lg outline " onClick={Logout}>
        Toggle Auth
      </button>
      <h1 className="text-white bg-slate-500 ">Hello</h1>
      <Routes>
        <Route exact path="/" element={<SignupPage />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
        <Route exact path="/login" element={<Login />} />
        {auth && <Route exact path="/dashboard" element={<Dashboard />} />}
      </Routes>
    </div>
  );
}

export default App;
