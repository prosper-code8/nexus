
import React, { useState, useEffect } from 'react';
import DashboardCard from './DashboardCard';
import { Users, Folder, UserPlus, Activity, Clock } from 'lucide-react';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date: Date) => {
    return date.toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to Nexus Solutions Analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <DashboardCard
          title="Total Visitors"
          value="12,847"
          icon={<Users size={24} />}
          color="blue"
        />
        
        <DashboardCard
          title="Projects Count"
          value="24"
          icon={<Folder size={24} />}
          color="green"
        />
        
        <DashboardCard
          title="Signups Count"
          value="156"
          icon={<UserPlus size={24} />}
          color="purple"
        />
        
        <DashboardCard
          title="Uptime Status"
          value="Online ✅"
          icon={<Activity size={24} />}
          color="green"
        />
        
        <DashboardCard
          title="Current Time"
          value={formatDateTime(currentTime)}
          icon={<Clock size={24} />}
          color="orange"
        />
      </div>

      {/* Additional Dashboard Content */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-muted-foreground">New project "Security Audit" created</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-muted-foreground">User Sarah Davis signed up</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-muted-foreground">Project "Penetration Testing" completed</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">System Status</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Server Status</span>
              <span className="text-sm text-green-500 font-medium">Operational</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Database</span>
              <span className="text-sm text-green-500 font-medium">Connected</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">API Response</span>
              <span className="text-sm text-green-500 font-medium">Fast</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
