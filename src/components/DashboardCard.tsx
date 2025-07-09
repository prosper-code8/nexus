
import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

const DashboardCard = ({ title, value, icon, color = 'blue' }: DashboardCardProps) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return 'border-green-500/20 bg-green-500/5';
      case 'purple':
        return 'border-purple-500/20 bg-purple-500/5';
      case 'orange':
        return 'border-orange-500/20 bg-orange-500/5';
      case 'red':
        return 'border-red-500/20 bg-red-500/5';
      default:
        return 'border-blue-500/20 bg-blue-500/5';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'green':
        return 'text-green-500';
      case 'purple':
        return 'text-purple-500';
      case 'orange':
        return 'text-orange-500';
      case 'red':
        return 'text-red-500';
      default:
        return 'text-blue-500';
    }
  };

  return (
    <div className={`bg-card border rounded-lg p-6 ${getColorClasses(color)} hover:shadow-md transition-shadow`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
        </div>
        {icon && (
          <div className={`${getIconColor(color)} opacity-80`}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
