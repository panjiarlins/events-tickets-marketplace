import React, { useEffect } from 'react';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DetailsProduct } from './pages/details';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import DashboardPage from './pages/DashboardPage';
import { Navbar } from './components/Navbar';

const App = () => {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload === null) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/details/:productId' element={<DetailsProduct />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='*' element={<Navigate to={'/dashboard'} />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/details/:productId' element={<DetailsProduct />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='*' element={<Navigate to={'/dashboard'} />} />
      </Routes>
    </>
  );
};

export default App;
