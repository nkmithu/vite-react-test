import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dasboard';
import Articles from './components/Articles';
import NoPageFound from './components/NoPageFound';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
