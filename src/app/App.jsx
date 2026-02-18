import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import AppRoutes from '../routes/Routes';
import { initMunicipalAnimations } from '../scripts/municipalAnimations';

function App() {
  useEffect(() => {
    initMunicipalAnimations();
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
