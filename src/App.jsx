import React, { useEffect } from 'react';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPreloadProcess } from './states/isPreload/action';
import DashboardPage from './pages/DashboardPage';
import { Navbar } from './components/Navbar';
import { DetailPage } from './pages/tempDetailPage';
import PaymentPage from './pages/PaymentPage';

const App = () => {
  const authUser = useSelector((states) => states.authUser);
  const isPreload = useSelector((states) => states.isPreload);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSearchHandler = ({ target }) => {
    setSearchParams({
      city: target.value,
    });
  };

  if (isPreload === null) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Navbar
          onSearch={onSearchHandler}
          keyword={searchParams.get('city') || ''}
        />
        <Routes>
          <Route path='/pay/:transactionId' element={<PaymentPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products/:productId' element={<DetailPage />} />
          <Route
            path='/dashboard'
            element={<DashboardPage keyword={searchParams.get('city') || ''} />}
          />
          <Route path='*' element={<Navigate to={'/dashboard'} />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Navbar
        onSearch={onSearchHandler}
        keyword={searchParams.get('city') || ''}
      />
      <Routes>
        <Route path='/pay/:transactionId' element={<PaymentPage />} />
        <Route path='/products/:productId' element={<DetailPage />} />
        <Route
          path='/dashboard'
          element={<DashboardPage keyword={searchParams.get('city') || ''} />}
        />
        <Route path='*' element={<Navigate to={'/dashboard'} />} />
      </Routes>
    </>
  );
};

export default App;
