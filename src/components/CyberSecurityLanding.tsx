
import React from 'react';
import { Shield, Lock, Monitor, Database, Users, CheckCircle, ArrowRight, Menu, X, Globe, Mail, Phone, MapPin, ChevronDown, ChevronUp, Zap, Eye, Server } from 'lucide-react';
import NavigationBar from './NavigationBar';

const CyberSecurityLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [expandedService, setExpandedService] = React.useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleService = (serviceName: string) => {
    setExpandedService(expandedService === serviceName ? null : serviceName);
  };

  const services = [
    {
      id: 'data-protection',
      title: 'Data Protection',
      icon: Shield,
      description: 'Advanced encryption and security protocols to protect your sensitive business data from unauthorized access.',
      details: {
        covers: [
          'Encryption: We use industry-standard encryption (AES-256 and SSL/TLS) to secure data at rest and in transit.',
          'Access Control: Only authorized users can access your data through multi-factor authentication (MFA), user role management, and audit logging.',
          'Data Loss Prevention (DLP): Tools to detect and prevent sensitive data from being shared or leaked unintentionally.',
          'Compliance Ready: Support for GDPR, HIPAA, and other compliance frameworks to keep your business legally protected.'
        ],
        prompt: 'Protect your data from prying eyes. We secure your business with cutting-edge encryption, strict access control, and smart data loss prevention. Learn how we help you meet industry standards like GDPR and HIPAA — all while keeping your operations running smoothly.'
      }
    },
    {
      id: 'network-security',
      title: 'Network Security',
      icon: Monitor,
      description: 'Comprehensive network monitoring and protection against intrusions and malicious activities.',
      details: {
        covers: [
          'Intrusion Detection & Prevention (IDS/IPS): Monitors for suspicious activity and blocks threats in real time.',
          'Firewall Management: Configures and maintains firewalls to filter incoming and outgoing traffic.',
          'Endpoint Security: Secures all devices (laptops, phones, etc.) connected to your network against malware and ransomware.',
          'Network Traffic Analysis: Detects anomalies, unauthorized access attempts, or unusual patterns early.'
        ],
        prompt: 'Guard your network 24/7. We monitor every digital door and window. From firewalls to intrusion detection, our network protection ensures cybercriminals stay out — and your data stays in.'
      }
    },
    {
      id: 'backup-solutions',
      title: 'Backup Solutions',
      icon: Database,
      description: 'Reliable backup and recovery systems to ensure your data is always safe and accessible.',
      details: {
        covers: [
          'Automated Backups: Scheduled backups that run without disrupting your work.',
          'Redundant Storage: Data is backed up to multiple secure locations (on-prem, cloud, or hybrid).',
          'Fast Recovery: Get your files back quickly after system failure, deletion, or cyberattacks.',
          'Disaster Recovery Planning: Full strategies in place so you\'re not caught off guard by natural disasters, human error, or cyber incidents.'
        ],
        prompt: 'Never lose your data again. Whether it\'s accidental deletion or a full-on ransomware attack, our backup and recovery systems keep your data safe and your business moving. Let\'s build a recovery plan that works for you.'
      }
    }
  ];

  const procedures = [
    {
      id: 'assessment',
      number: '01',
      title: 'Assessment',
      description: 'Comprehensive security audit and vulnerability assessment of your systems.',
      details: {
        covers: [
          'Security Audits: Full review of your current systems to identify weaknesses, misconfigurations, and outdated software.',
          'Vulnerability Scanning: Uses automated tools and manual techniques to find known vulnerabilities.',
          'Penetration Testing (Optional): Simulated attacks to test how well your systems hold up against real-world threats.',
          'Reporting: Clear documentation of risks with recommendations ranked by severity.'
        ],
        prompt: 'Where are your systems exposed? We\'ll identify blind spots, misconfigurations, and weaknesses before attackers do. Our thorough security audit gives you a clear picture of your vulnerabilities — and how to fix them.'
      }
    },
    {
      id: 'planning',
      number: '02',
      title: 'Planning',
      description: 'Development of customized security strategy based on your specific needs.',
      details: {
        covers: [
          'Custom Security Strategy: Tailored to your business size, industry, risk level, and compliance requirements.',
          'Risk Prioritization: Focuses on what matters most — critical assets, sensitive data, and high-risk vectors.',
          'Policy Design: Help writing or refining cybersecurity policies, access rules, and incident response plans.',
          'Technology Stack Recommendation: Suggests tools and platforms that fit your goals and budget.'
        ],
        prompt: 'A one-size-fits-all plan won\'t protect you. We craft a security strategy based on your unique systems, threats, and priorities. It\'s not just about buying tools — it\'s about making smart choices that work for you.'
      }
    },
    {
      id: 'implementation',
      number: '03',
      title: 'Implementation',
      description: 'Deployment of security measures and protective systems across your infrastructure.',
      details: {
        covers: [
          'Firewall & Endpoint Security Setup: Configure protection on all endpoints and network access points.',
          'Encryption & Access Controls: Deploy tools for data protection and enforce identity verification.',
          'Security Software Integration: We install and integrate antivirus, monitoring tools, VPNs, or SIEMs based on the plan.',
          'User Training (Optional): Educate your team on safe practices to prevent human errors.'
        ],
        prompt: 'Security only works when it\'s actually in place. We\'ll help you turn your strategy into action by installing and configuring the right tools — the right way. From firewall rules to employee awareness, we handle it.'
      }
    },
    {
      id: 'monitoring',
      number: '04',
      title: 'Monitoring',
      description: 'Continuous monitoring and maintenance to ensure ongoing protection.',
      details: {
        covers: [
          'Real-Time Threat Detection: Systems watch for breaches, unusual behavior, and suspicious traffic 24/7.',
          'Log Analysis & Alerts: Review system logs to catch incidents early and respond fast.',
          'Patch & Update Management: Keep software and security tools up to date to close off new vulnerabilities.',
          'Incident Response Support: Ready to act if something goes wrong — minimizing damage and restoring normalcy.'
        ],
        prompt: 'Security isn\'t a one-time job. Threats evolve. We stay on watch. Our continuous monitoring and maintenance keep you protected — even while you sleep.'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 text-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Use the NavigationBar component */}
      <NavigationBar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  WE ARE READY TO
                  <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    PROTECT YOUR DATA
                  </span>
                  <br />
                  FROM HACKERS
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Professional cybersecurity solutions to safeguard your business from evolving threats. 
                  Trust our expert team at Nexus Solutions to secure your digital assets.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="glass-card hover:bg-white/20 text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center group bg-gradient-to-r from-primary to-accent">
                  Get Protected Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="glass border-primary/50 hover:border-primary text-foreground px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card p-8 rounded-3xl">
                <img 
                  src="/lovable-uploads/a385e0ce-c704-4f5d-a1f9-9731400b1b59.png" 
                  alt="Cybersecurity Threat" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Manage Security Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your business from cyber threats
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              const isExpanded = expandedService === service.id;
              
              return (
                <div key={service.id} className="glass-card hover:bg-white/15 transition-all duration-300 rounded-2xl group">
                  <div className="p-8">
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <button
                      onClick={() => toggleService(service.id)}
                      className="inline-flex items-center text-primary hover:text-accent transition-colors font-semibold"
                    >
                      Learn More
                      {isExpanded ? (
                        <ChevronUp className="ml-2 h-5 w-5" />
                      ) : (
                        <ChevronDown className="ml-2 h-5 w-5" />
                      )}
                    </button>
                  </div>
                  
                  {isExpanded && (
                    <div className="px-8 pb-8 border-t border-white/10">
                      <div className="pt-6 space-y-6">
                        <div>
                          <h4 className="font-bold text-lg mb-4 text-foreground">What it covers:</h4>
                          <ul className="space-y-3">
                            {service.details.covers.map((item, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="glass-dark rounded-xl p-4">
                          <p className="text-sm font-semibold text-primary mb-2 flex items-center">
                            <Shield className="h-4 w-4 mr-2" />
                            Why Choose This Service?
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.details.prompt}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              The Procedure That We Operate
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                For Cyber Security
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procedures.map((procedure, index) => {
              const isExpanded = expandedService === procedure.id;
              
              return (
                <div key={procedure.id} className="text-center group">
                  <div className="glass-card hover:bg-white/15 transition-all duration-300 rounded-2xl p-8 mb-6">
                    <div className="bg-gradient-to-br from-primary to-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{procedure.number}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">{procedure.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {procedure.description}
                    </p>
                    
                    <button
                      onClick={() => toggleService(procedure.id)}
                      className="inline-flex items-center text-primary hover:text-accent transition-colors font-semibold"
                    >
                      Learn More
                      {isExpanded ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>
                  </div>
                  
                  {isExpanded && (
                    <div className="glass-card rounded-2xl p-6 text-left">
                      <h4 className="font-bold mb-4 text-center text-foreground">What it covers:</h4>
                      <ul className="space-y-3 mb-6">
                        {procedure.details.covers.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="glass-dark rounded-xl p-4">
                        <p className="text-sm font-semibold text-primary mb-2 flex items-center">
                          <Eye className="h-4 w-4 mr-2" />
                          Our Approach:
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {procedure.details.prompt}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  We Offer Professional Cyber
                  <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Security For Your Business
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our team of certified security experts provides comprehensive protection 
                  against evolving cyber threats. We understand the unique challenges your 
                  business faces in today's digital landscape.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  '24/7 Security Monitoring',
                  'Advanced Threat Detection',
                  'Rapid Incident Response',
                  'Compliance Management'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="glass-card hover:bg-white/20 text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-primary to-accent">
                Learn More
              </button>
            </div>
            
            <div className="relative">
              <div className="glass-card p-8 rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop" 
                  alt="Cybersecurity Team" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We are a dedicated team of cybersecurity professionals committed to protecting your digital assets 
              and empowering your business with cutting-edge security solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Prosper Mbofana', role: 'Founder', initials: 'PM' },
              { name: 'Panashe', role: 'Partner', initials: 'P' },
              { name: 'Gift', role: 'Partner', initials: 'G' },
              { name: 'Esililo', role: 'Partner', initials: 'E' }
            ].map((member, index) => (
              <div key={index} className="glass-card hover:bg-white/15 transition-all duration-300 rounded-2xl overflow-hidden group">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-white">{member.initials}</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Latest News From Blog</h2>
            <p className="text-xl text-muted-foreground">Stay updated with the latest cybersecurity trends and insights</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Top 10 Cybersecurity Threats in 2024',
                date: 'March 15, 2024',
                description: 'Discover the most critical cybersecurity threats businesses face this year and how to protect against them.',
                image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=200&fit=crop'
              },
              {
                title: 'Best Practices for Remote Work Security',
                date: 'March 12, 2024',
                description: 'Essential security measures to protect your business in the remote work environment.',
                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=200&fit=crop'
              },
              {
                title: 'Understanding Zero Trust Architecture',
                date: 'March 10, 2024',
                description: 'Learn how Zero Trust security models can revolutionize your organization\'s cybersecurity posture.',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop'
              }
            ].map((post, index) => (
              <article key={index} className="glass-card hover:bg-white/15 transition-all duration-300 rounded-2xl overflow-hidden group">
                <div className="overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="text-sm text-primary font-semibold">{post.date}</div>
                  <h3 className="text-xl font-bold text-foreground">{post.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                  <a href="#" className="text-primary hover:text-accent inline-flex items-center font-semibold group">
                    Read More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card border-t border-white/10 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Nexus Solutions
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your trusted partner in cybersecurity. Protecting businesses from digital threats with advanced security solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Services</h3>
              <ul className="space-y-2">
                {['Data Protection', 'Network Security', 'Backup Solutions', 'Compliance'].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Company</h3>
              <ul className="space-y-2">
                {['About Us', 'Our Team', 'Careers', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">info@nexussolutions.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">+260974752547</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Lusaka, 9 Miles, Zambia</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Nexus Solutions. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CyberSecurityLanding;
