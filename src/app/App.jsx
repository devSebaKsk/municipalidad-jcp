import React, { useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import HomeView from '../components/home/HomeView';
import LoginView from '../components/login/LoginView';
import LoginEmpleadosView from '../components/login/LoginEmpleadosView';
import DashboardView from '../components/dashboard/DashboardView';
import { initMunicipalAnimations } from '../scripts/municipalAnimations';

function App() {
  useEffect(() => {
    initMunicipalAnimations();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HomeView />
      <LoginView />
      <LoginEmpleadosView />
      <DashboardView />
    </div>
  );
}

export default App;
