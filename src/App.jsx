
import React, { useEffect } from "react";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./pages/navbar";
import { Profile } from "./pages/profile";
import { useDispatch, useSelector } from "react-redux";
import { asyncPreloadProcess } from "./states/isPreload/action";
import { asyncUnsetAuthUser } from "./states/authUser/action";
import Dashboard from "./pages/dashboard";
import { DetailsProduct } from "./pages/detailevent";

const App = () => {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload === null) {
    return null;
  }

  return (
    <>
      {/* <NavMobile /> */}
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/details" element={<DetailsProduct />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </>
  );
};

export default App;
