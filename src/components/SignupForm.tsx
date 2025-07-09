
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    reason: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [signups] = useState([
    { name: 'Alex Johnson', email: 'alex@email.com', reason: 'Career transition to cybersecurity' },
    { name: 'Sarah Davis', email: 'sarah@email.com', reason: 'Enhance current IT skills' },
    { name: 'Mike Chen', email: 'mike@email.com', reason: 'Start cybersecurity consultancy' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup submitted:', formData);
    setIsSubmitted(true);
    setFormData({ fullName: '', email: '', reason: '' });
    
    // Reset thank you message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Learn Cybersecurity</h2>
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="text-green-500 text-6xl mb-4">✓</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground">We'll be in touch soon with more information.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-sm font-medium text-foreground">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="reason" className="text-sm font-medium text-foreground">Why are you interested in cybersecurity?</Label>
              <Textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Tell us about your interest in cybersecurity..."
                required
                className="mt-1"
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full">
              Sign Up for Updates
            </Button>
          </form>
        )}
      </div>

      {/* Mock Signups List */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Recent Signups</h3>
        <div className="space-y-3">
          {signups.map((signup, index) => (
            <div key={index} className="border-b border-border pb-3 last:border-b-0">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-foreground">{signup.name}</p>
                  <p className="text-sm text-muted-foreground">{signup.email}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-1 italic">"{signup.reason}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
