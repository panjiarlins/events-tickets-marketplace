import React, { useEffect } from 'react';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './pages/navbar';
import { DetailsProduct } from './pages/details';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { NavMobile } from "./pages/navmobile";
import { useSelector } from "react-redux";


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
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/details' element={<DetailsProduct />} />
      </Routes>
    </>
  );
};

export default App;
