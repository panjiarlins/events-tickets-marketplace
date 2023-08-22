import { useEffect } from 'react';
import {
  Navigate, Route, Routes, useSearchParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { asyncPreloadProcess } from './states/isPreload/action';
import DashboardPage from './pages/DashboardPage';
import { Navbar } from './components/Navbar';
import PaymentPage from './pages/PaymentPage';
import DetailPage from './pages/DetailPage';
import MePage from './pages/MePage';
import { Profile } from './pages/profile';
import Footer from './components/Footer';

function App() {
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/me" element={<MePage />} />
          <Route path="/pay/:transactionId" element={<PaymentPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:productId" element={<DetailPage />} />
          <Route
            path="/dashboard"
            element={<DashboardPage keyword={searchParams.get('city') || ''} />}
          />
          <Route path="*" element={<Navigate to="/dashboard" />} />
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
        <Route path="/me" element={<MePage />} />
        <Route path="/pay/:transactionId" element={<PaymentPage />} />
        <Route path="/products/:productId" element={<DetailPage />} />
        <Route
          path="/dashboard"
          element={<DashboardPage keyword={searchParams.get('city') || ''} />}
        />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
