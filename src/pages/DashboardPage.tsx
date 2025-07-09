
import React from 'react';
import NavigationBar from '@/components/NavigationBar';
import Dashboard from '@/components/Dashboard';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
