import React from "react";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Route, Routes } from "react-router-dom";
import { Navbar, toggleMenu } from "./pages/navbar";
import { DetailsProduct } from "./pages/details";
import { NavMobile } from "./pages/navmobile";
import { useSelector } from "react-redux";

const App = () => {
  const { authUser } = useSelector((states) => states);

  return (
    <>
      {/* <NavMobile /> */}
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<DetailsProduct />} />
      </Routes>
    </>
  );
};

export default App;
