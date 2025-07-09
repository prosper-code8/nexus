import React from 'react';
import { Shield, Lock, Monitor, Database, Users, CheckCircle, ArrowRight, Menu, X, Globe, Mail, Phone, MapPin } from 'lucide-react';
import NavigationBar from './NavigationBar';

const CyberSecurityLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Use the NavigationBar component */}
      <NavigationBar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                WE ARE READY TO
                <br />
                <span className="text-primary">PROTECT YOUR DATA</span>
                <br />
                FROM HACKERS
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional cybersecurity solutions to safeguard your business from evolving threats. 
                Trust our expert team at Nexus Solutions to secure your digital assets.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center">
                Get Protected Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-border">
                <img 
                  src="/lovable-uploads/f4b4f0ef-642b-4c54-a87f-aeb4e88f8c85.png" 
                  alt="Cybersecurity Illustration" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manage Security Services */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Manage Security Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your business from cyber threats
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-colors shadow-sm">
              <div className="bg-primary/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced encryption and security protocols to protect your sensitive business data from unauthorized access.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-colors shadow-sm">
              <div className="bg-primary/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Monitor className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Network Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive network monitoring and protection against intrusions and malicious activities.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-colors shadow-sm">
              <div className="bg-primary/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Backup Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reliable backup and recovery systems to ensure your data is always safe and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Procedure Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Procedure That We Operate
              <br />
              For Cyber Security
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Assessment</h3>
              <p className="text-muted-foreground">
                Comprehensive security audit and vulnerability assessment of your systems.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Planning</h3>
              <p className="text-muted-foreground">
                Development of customized security strategy based on your specific needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Implementation</h3>
              <p className="text-muted-foreground">
                Deployment of security measures and protective systems across your infrastructure.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Monitoring</h3>
              <p className="text-muted-foreground">
                Continuous monitoring and maintenance to ensure ongoing protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Cyber Security Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We Offer Professional Cyber
                <br />
                Security For Your Business
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our team of certified security experts provides comprehensive protection 
                against evolving cyber threats. We understand the unique challenges your 
                business faces in today's digital landscape.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-muted-foreground">24/7 Security Monitoring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-muted-foreground">Advanced Threat Detection</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-muted-foreground">Rapid Incident Response</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-muted-foreground">Compliance Management</span>
                </div>
              </div>
              
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop" 
                  alt="Cybersecurity Team" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We are a dedicated team of cybersecurity professionals committed to protecting your digital assets 
              and empowering your business with cutting-edge security solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors shadow-sm">
              <div className="aspect-square bg-muted flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">PM</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Prosper Mbofana</h3>
                <p className="text-primary text-sm">Founder</p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors shadow-sm">
              <div className="aspect-square bg-muted flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">P</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Panashe</h3>
                <p className="text-primary text-sm">Partner</p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors shadow-sm">
              <div className="aspect-square bg-muted flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">G</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Gift</h3>
                <p className="text-primary text-sm">Partner</p>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors shadow-sm">
              <div className="aspect-square bg-muted flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">E</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Esililo</h3>
                <p className="text-primary text-sm">Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News From Blog */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News From Blog</h2>
            <p className="text-xl text-muted-foreground">Stay updated with the latest cybersecurity trends and insights</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=200&fit=crop" 
                alt="Blog Post Image" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-primary mb-2">March 15, 2024</div>
                <h3 className="text-xl font-semibold mb-3">Top 10 Cybersecurity Threats in 2024</h3>
                <p className="text-muted-foreground mb-4">
                  Discover the most critical cybersecurity threats businesses face this year and how to protect against them.
                </p>
                <a href="#" className="text-primary hover:text-primary/80 inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </article>
            
            <article className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=200&fit=crop" 
                alt="Blog Post Image" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-primary mb-2">March 12, 2024</div>
                <h3 className="text-xl font-semibold mb-3">Best Practices for Remote Work Security</h3>
                <p className="text-muted-foreground mb-4">
                  Essential security measures to protect your business in the remote work environment.
                </p>
                <a href="#" className="text-primary hover:text-primary/80 inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </article>
            
            <article className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop" 
                alt="Blog Post Image" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-primary mb-2">March 10, 2024</div>
                <h3 className="text-xl font-semibold mb-3">Understanding Zero Trust Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  Learn how Zero Trust security models can revolutionize your organization's cybersecurity posture.
                </p>
                <a href="#" className="text-primary hover:text-primary/80 inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">Nexus Solutions</div>
              <p className="text-muted-foreground leading-relaxed">
                Your trusted partner in cybersecurity. Protecting businesses from digital threats with advanced security solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Data Protection</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Network Security</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Backup Solutions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Compliance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <span>info@nexussolutions.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <span>+260974752547</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <span>Lusaka, 9 Miles, Zambia</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Nexus Solutions. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CyberSecurityLanding;
