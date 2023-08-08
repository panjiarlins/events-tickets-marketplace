import React, { useEffect } from 'react';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import DashboardPage from './pages/DashboardPage';
import { Navbar } from './components/Navbar';
import { DetailPage } from './pages/tempDetailPage';
// import { asyncReceiveUsers } from './states/users/action';

const App = () => {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
    // dispatch(asyncReceiveUsers());
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
          <Route path='/products/:productId' element={<DetailPage />} />
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
        <Route path='/products/:productId' element={<DetailPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='*' element={<Navigate to={'/dashboard'} />} />
      </Routes>
    </>
  );
};

export default App;
