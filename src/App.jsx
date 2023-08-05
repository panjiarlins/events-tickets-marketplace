import React from "react";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Route, Routes } from "react-router-dom";
import { Navbar, toggleMenu } from "./pages/navbar";
import { DetailsProduct } from "./pages/details";
import Dashboard from "./dashboard/dashboard";
import Redirect from "./dashboard/redirect";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<DetailsProduct />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<Redirect />}></Route>
      </Routes>
    </>
  );
};

export default App;
