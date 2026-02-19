import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeView from '../components/home/HomeView';
import LoginView from '../components/login/LoginView';
import LoginEmpleadosView from '../components/login/LoginEmpleadosView';
import IdentityCaptureView from '../components/login/IdentityCaptureView';
import DashboardView from '../components/dashboard/DashboardView';
import DashboardEmpleadosView from '../components/dashboard/DashboardEmpleadosView';
import RecibosListView from '../components/dashboard/RecibosListView';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/login-empleados" element={<LoginEmpleadosView />} />
      <Route path="/verificacion" element={<IdentityCaptureView />} />
      <Route path="/dashboard" element={<DashboardView />} />
      <Route path="/dashboard-empleados" element={<DashboardEmpleadosView />} />
      <Route path="/recibos" element={<RecibosListView />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
