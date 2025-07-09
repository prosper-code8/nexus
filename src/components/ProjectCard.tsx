
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  status: 'In Progress' | 'Completed';
}

const ProjectCard = ({ title, description, imageUrl, status }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    return status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500';
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video bg-muted">
        <img 
          src={imageUrl || "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240&fit=crop"} 
          alt={`${title} project preview`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <Badge 
            className={`${getStatusColor(status)} text-white text-xs px-2 py-1`}
          >
            {status}
          </Badge>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
