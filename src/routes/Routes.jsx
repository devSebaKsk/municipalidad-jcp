import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeView from '../components/home/HomeView';
import LoginView from '../components/login/LoginView';
import LoginEmpleadosView from '../components/login/LoginEmpleadosView';
import DashboardView from '../components/dashboard/DashboardView';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/login-empleados" element={<LoginEmpleadosView />} />
      <Route path="/dashboard" element={<DashboardView />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
