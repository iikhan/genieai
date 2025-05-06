import React from 'react';
import { 
  Bot, 
  Sparkles, 
  Code2, 
  Zap, 
  Search, 
  RefreshCw, 
  Globe, 
  Lock
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card p-6 hover:shadow-lg transition-all duration-300">
      <div className="feature-icon mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Bot size={24} />,
      title: "Auto Email Responder",
      description: "Enabling enterprise instant dispute resolution"
    },
    ,{
      icon: <Bot size={24} />,
      title: "AI Google Map Wrong Marker Identifier",
      description: "Ask questions about wrong locations and get instant reply and status of coordination with google staff"
    },
    {
      icon: <Sparkles size={24} />,
      title: "Enhance Outlook Email",
      description: "Enable LLM to write professional email, talk with the confidential data sources"
    },
    {
      icon: <Code2 size={24} />,
      title: "Cash forecasting",
      description: "Ask questions about the trends"
    },
    {
      icon: <Zap size={24} />,
      title: "Image Generation",
      description: "Redesign marketing material."
    },
    {
      icon: <Search size={24} />,
      title: "Fraud Detection",
      description: "Enabling enterprise to detect frauds early and take proactive actions."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Investment GPT",
      description: "Allowing enterprise to consider viable options for the investments"
    },
    {
      icon: <Globe size={24} />,
      title: "Tranformer",
      description: "Enabling organizations to refactor and upgrade codebase"
    },
    {
      icon: <Lock size={24} />,
      title: "Domain Specific Language Model",
      description: "Enabling organizations to work with private SLM "
    },
    {
      icon: <Lock size={24} />,
      title: "IoT",
      description: "End-To-End Monitoring And Reporting"
    },
    {
      icon: <Lock size={24} />,
      title: "Social Media Handling Agent",
      description: "Identify disputes and trends"
    }
    ,
    {
      icon: <Lock size={24} />,
      title: "VIRTUAL teams",
      description: "Army of agents working towards excellency"
    }
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4">
            Manage Enterprise <span className="text-gradient">better</span> than ever
          </h2>
          <p className="text-lg">
            AI Labs combines the power of AI with your data to solve organizational problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;