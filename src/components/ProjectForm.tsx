
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
    status: 'In Progress'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Project submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      description: '',
      imageUrl: '',
      status: 'In Progress'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-foreground">Project Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter project name"
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="description" className="text-sm font-medium text-foreground">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Brief project description"
            required
            className="mt-1"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="imageUrl" className="text-sm font-medium text-foreground">Image URL</Label>
          <Input
            id="imageUrl"
            name="imageUrl"
            type="url"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="status" className="text-sm font-medium text-foreground">Status</Label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <Button type="submit" className="w-full">
          Add Project
        </Button>
      </form>
    </div>
  );
};

export default ProjectForm;
