import React from 'react';
import { Shield, Lock, Monitor, Database, Users, CheckCircle, ArrowRight, Menu, X, Globe, Mail, Phone, MapPin } from 'lucide-react';

const CyberSecurityLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-2xl font-bold text-blue-400">SECUREX</div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-white hover:text-blue-400 transition-colors">Home</a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="hidden md:block">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-400 hover:text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
              <a href="#" className="text-white block px-3 py-2 rounded-md">Home</a>
              <a href="#" className="text-gray-300 block px-3 py-2 rounded-md">About</a>
              <a href="#" className="text-gray-300 block px-3 py-2 rounded-md">Services</a>
              <a href="#" className="text-gray-300 block px-3 py-2 rounded-md">Blog</a>
              <a href="#" className="text-gray-300 block px-3 py-2 rounded-md">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                WE ARE READY TO
                <br />
                <span className="text-blue-400">PROTECT YOUR DATA</span>
                <br />
                FROM HACKERS
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional cybersecurity solutions to safeguard your business from evolving threats. 
                Trust our expert team to secure your digital assets.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center">
                Get Protected Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8">
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
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Manage Security Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your business from cyber threats
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="bg-blue-600/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
              <p className="text-gray-300 leading-relaxed">
                Advanced encryption and security protocols to protect your sensitive business data from unauthorized access.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-colors">
              <div className="bg-purple-600/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Monitor className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Network Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive network monitoring and protection against intrusions and malicious activities.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-colors">
              <div className="bg-green-600/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Backup Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
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
              <div className="bg-blue-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-400">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Assessment</h3>
              <p className="text-gray-300">
                Comprehensive security audit and vulnerability assessment of your systems.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-400">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Planning</h3>
              <p className="text-gray-300">
                Development of customized security strategy based on your specific needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-400">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Implementation</h3>
              <p className="text-gray-300">
                Deployment of security measures and protective systems across your infrastructure.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-yellow-400">04</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Monitoring</h3>
              <p className="text-gray-300">
                Continuous monitoring and maintenance to ensure ongoing protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Cyber Security Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We Offer Professional Cyber
                <br />
                Security For Your Business
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our team of certified security experts provides comprehensive protection 
                against evolving cyber threats. We understand the unique challenges your 
                business faces in today's digital landscape.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-gray-300">24/7 Security Monitoring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-gray-300">Advanced Threat Detection</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-gray-300">Rapid Incident Response</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-gray-300">Compliance Management</span>
                </div>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who we are</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a curated team of international experts united by a single goal: to create category-
              defining brands and digital experiences that make an impact, shape culture and connect
              people.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="aspect-square bg-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face" 
                  alt="Lindsay Smith - Founder & CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Lindsay Smith</h3>
                <p className="text-blue-400 text-sm">Founder + CEO</p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-colors">
              <div className="aspect-square bg-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" 
                  alt="Brian Thomas - Partner & Executive Creative Director" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Brian Thomas</h3>
                <p className="text-purple-400 text-sm">Partner + Executive Creative Director</p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500 transition-colors">
              <div className="aspect-square bg-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                  alt="James Voth - CTO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">James Voth</h3>
                <p className="text-green-400 text-sm">CTO</p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-500 transition-colors">
              <div className="aspect-square bg-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face" 
                  alt="Prem Sai Samani - VP Strategy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Prem Sai Samani</h3>
                <p className="text-yellow-400 text-sm">VP Strategy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News From Blog */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News From Blog</h2>
            <p className="text-xl text-gray-300">Stay updated with the latest cybersecurity trends and insights</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=200&fit=crop" 
                alt="Blog Post Image" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-400 mb-2">March 15, 2024</div>
                <h3 className="text-xl font-semibold mb-3">Top 10 Cybersecurity Threats in 2024</h3>
                <p className="text-gray-300 mb-4">
                  Discover the most critical cybersecurity threats businesses face this year and how to protect against them.
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </article>
            
            <article className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=200&fit=crop" 
                alt="Blog Post Image" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-purple-400 mb-2">March 12, 2024</div>
                <h3 className="text-xl font-semibold mb-3">Best Practices for Remote Work Security</h3>
                <p className="text-gray-300 mb-4">
                  Essential security measures to protect your business in the remote work environment.
                </p>
                <a href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </article>
            
            <article className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500 transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop" 
                alt="Blog Post Image" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-green-400 mb-2">March 10, 2024</div>
                <h3 className="text-xl font-semibold mb-3">Understanding Zero Trust Architecture</h3>
                <p className="text-gray-300 mb-4">
                  Learn how Zero Trust security models can revolutionize your organization's cybersecurity posture.
                </p>
                <a href="#" className="text-green-400 hover:text-green-300 inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">SECUREX</div>
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner in cybersecurity. Protecting businesses from digital threats with advanced security solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Data Protection</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Network Security</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Backup Solutions</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Compliance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <span>info@securex.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                  <span>123 Security St, Tech City</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SecureX. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CyberSecurityLanding;
