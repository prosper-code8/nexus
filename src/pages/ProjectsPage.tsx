
import React from 'react';
import NavigationBar from '@/components/NavigationBar';
import ProjectCard from '@/components/ProjectCard';
import ProjectForm from '@/components/ProjectForm';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Security Audit Platform",
      description: "Advanced vulnerability assessment tool for enterprise networks with real-time monitoring capabilities.",
      imageUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=240&fit=crop",
      status: "In Progress" as const
    },
    {
      title: "Penetration Testing Suite",
      description: "Comprehensive penetration testing framework for identifying security weaknesses.",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=240&fit=crop",
      status: "Completed" as const
    },
    {
      title: "Incident Response System",
      description: "Automated incident detection and response system for critical infrastructure protection.",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=240&fit=crop",
      status: "In Progress" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Projects</h1>
          <p className="text-xl text-muted-foreground">Explore our latest cybersecurity solutions and software development projects.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="border-t border-border pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Start a New Project</h2>
          <ProjectForm />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
