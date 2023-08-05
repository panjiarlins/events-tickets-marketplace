import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from './dashboard/dashboard';

const App = () => {
  return (
  <>
  <Routes>
    <Route path="dashboard" element={<Dashboard/>}/>


  </Routes>
  </>
  );
};

export default App;
