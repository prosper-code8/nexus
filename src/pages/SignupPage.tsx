
import React from 'react';
import NavigationBar from '@/components/NavigationBar';
import SignupForm from '@/components/SignupForm';

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Join Nexus Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to advance your cybersecurity career? Sign up to receive updates about our training programs, 
            workshops, and career opportunities in the cybersecurity field.
          </p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
