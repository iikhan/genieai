import { useState, useEffect } from 'react';
import { 
  Mail, 
  Search, 
  Image, 
  AlertTriangle, 
  BarChart2, 
  Zap, 
  Globe, 
  Bot, 
  UserCheck, 
  Users,
  ChevronRight,
  ShieldCheck,
  Lock,
  Server,
  Database,
  Cpu,
  Sparkles,
  BrainCircuit
} from 'lucide-react';
import ContactSalesForm from './sales-contact-form';
import GradientHero from './GradientHero';

export default function DarkThemeLandingPage() {
  const [activeTab, setActiveTab] = useState('features');
  const [isIntersecting, setIsIntersecting] = useState(false);

  const features = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: "AI-Powered Email Insight and Rapid Response System",
      description: "AI-powered email analysis and instant response generation"
    },
    {
      icon: <Search className="text-green-400" size={24} />,
      title: "AI-Powered Verification and Monitoring of Google Map Locations",
      description: "AI verification of Google Map locations with near real-time status updates"
    },
    {
      icon: <Database className="text-purple-400" size={24} />,
      title: "AI-Powered Email Generation with End-to-End Data Security",
      description: "Professional email generation with secure data handling"
    },
    {
      icon: <BarChart2 className="text-yellow-400" size={24} />,
      title: "AI-Powered Predictive Analytics System",
      description: "Predictive analytics for cash flow and investment planning"
    },
    {
      icon: <Image className="text-pink-400" size={24} />,
      title: "Next-Gen High-Resolution Visual Content Engine",
      description: "High-fidelity visual content creation"
    },
    {
      icon: <AlertTriangle className="text-red-400" size={24} />,
      title: "AI-Powered Pattern Anomaly Detection and Proactive Notification",
      description: "Early detection of anomalous patterns with proactive alerts"
    },
    {
      icon: <Cpu className="text-blue-500" size={24} />,
      title: "AI-Driven Investment Opportunity Assessment",
      description: "AI-powered evaluation of investment opportunities"
    },
    {
      icon: <Sparkles className="text-yellow-300" size={24} />,
      title: "Smart Refactoring and Code Modernization System",
      description: "Automated codebase refactoring and modernization"
    },
    {
      icon: <BrainCircuit className="text-blue-300" size={24} />,
      title: "Domain-Specific Artificial Intelligence Framework",
      description: "Specialized AI for industry-specific applications"
    },
    {
      icon: <Server className="text-green-300" size={24} />,
      title: "AI-Driven End-to-End IoT Monitoring And Analysis",
      description: "Comprehensive device monitoring with AI analytics"
    },
    {
      icon: <UserCheck className="text-red-300" size={24} />,
      title: "AI-Powered Sentiment Tracking and Trend Insights",
      description: "Sentiment tracking and trend identification"
    },
    {
      icon: <Users className="text-purple-300" size={24} />,
      title: "Orchestrated AI Collaboration for Scalable Workflow Solutions",
      description: "Collaborative AI systems for complex workflows"
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      solutions: ["Fraud detection", "Risk assessment", "Automated reporting"],
      icon: <BarChart2 className="text-indigo-400" size={20} />
    },
    {
      industry: "Healthcare",
      solutions: ["Patient data analysis", "Diagnostic support", "Research automation"],
      icon: <ShieldCheck className="text-green-400" size={20} />
    },
    {
      industry: "Retail",
      solutions: ["Demand forecasting", "Personalized marketing", "Inventory optimization"],
      icon: <Search className="text-yellow-400" size={20} />
    },
    {
      industry: "Manufacturing",
      solutions: ["Predictive maintenance", "Quality control", "Supply chain optimization"],
      icon: <Zap className="text-blue-400" size={20} />
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime Reliability" },
    { value: "256-bit", label: "Data Encryption" },
    { value: "ISO 27001", label: "Certified" },
    { value: "Zero", label: "Data Retention" }
  ];

  const footerLinks = {
    product: ["Features", "Solutions", "Integrations", "API"],
    company: ["About Us", "Leadership", "Careers", "Contact"],
    resources: ["Documentation", "Whitepapers", "Case Studies", "Blog"],
    legal: ["Privacy Policy", "Terms of Service", "Compliance", "Security"]
  };

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-950 text-gray-100 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-md flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Genei AI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200">Solutions</a>
            <a href="#security" className="text-gray-300 hover:text-white transition-colors duration-200">Security</a>
            <a href="#usecases" className="text-gray-300 hover:text-white transition-colors duration-200">Industries</a>
            
          </div>
          <button className="md:hidden text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <GradientHero />

        {/* Trust Badges */}
        <section className="py-8 bg-gray-900/50 border-y border-gray-800">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <ShieldCheck className="text-indigo-400" size={20} />
                  <div>
                    <p className="text-lg font-semibold text-white">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950 animate-on-scroll">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-indigo-900/50 text-indigo-300 mb-4">
                Enterprise AI Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transform Your Business with <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">AI-Powered Intelligence</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Our private LLM solutions deliver enterprise-grade AI without compromising your data security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 border border-gray-700">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                  <a href="#" className="inline-flex items-center mt-4 text-indigo-400 hover:text-indigo-300 transition-colors">
                    Learn more <ChevronRight className="ml-1" size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="py-20 px-4 bg-gray-950 border-t border-b border-gray-800 animate-on-scroll">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-indigo-900/50 text-indigo-300 mb-4">
                Data Security
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Enterprise-Grade <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Security Framework</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Your data remains yours alone. Our architecture ensures complete privacy and compliance with the most stringent regulations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Lock className="text-indigo-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">End-to-End Encryption</h4>
                    <p className="text-gray-400">All data is encrypted in transit and at rest with military-grade protocols.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <ShieldCheck className="text-green-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Compliance Certified</h4>
                    <p className="text-gray-400">GDPR, HIPAA, SOC 2, and ISO 27001 compliant solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Database className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">On-Premises Options</h4>
                    <p className="text-gray-400">Deploy our solutions within your own infrastructure for maximum control.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <div className="relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl"></div>
                <div className="relative z-10 h-full flex flex-col justify-center p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">Security Architecture</h3>
                  <div className="space-y-6">
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">Data Isolation</h4>
                      <p className="text-gray-400 text-sm">Complete separation between client data with dedicated encryption keys.</p>
                    </div>
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">Zero Data Retention</h4>
                      <p className="text-gray-400 text-sm">Your data is never stored beyond the processing window.</p>
                    </div>
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                      <h4 className="font-medium text-white mb-2">Regular Audits</h4>
                      <p className="text-gray-400 text-sm">Third-party security assessments conducted quarterly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="usecases" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900 animate-on-scroll">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-indigo-900/50 text-indigo-300 mb-4">
                Industry Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tailored AI for <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Your Industry</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Discover how Genei AI is transforming businesses across sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                      {useCase.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.industry}</h3>
                  </div>
                  <ul className="space-y-3">
                    {useCase.solutions.map((solution, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-gray-300">{solution}</p>
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="inline-flex items-center mt-6 text-indigo-400 hover:text-indigo-300 transition-colors">
                    View case study <ChevronRight className="ml-1" size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 animate-on-scroll">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-indigo-200 mb-8 text-lg">
                Schedule a consultation with our AI experts to discover how Genei can drive innovation in your organization.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <ContactSalesForm />
                <a 
                  href="#features" 
                  className="px-6 py-3 rounded-md font-medium text-white border border-indigo-400 hover:bg-indigo-900/30 transition-colors duration-200"
                >
                  Explore Solutions
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-md flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  Genei AI
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Enterprise-grade AI solutions that empower your business without compromising your data security.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Genei AI Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}