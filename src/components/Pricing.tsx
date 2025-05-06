import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  buttonText: string;
  popular?: boolean;
}

const PricingCard: React.FC<PricingPlan> = ({
  name,
  price,
  description,
  features,
  buttonText,
  popular
}) => {
  return (
    <div 
      className={`card p-6 flex flex-col h-full ${
        popular 
          ? 'gradient-border relative shadow-xl scale-105 z-10 bg-white' 
          : 'border border-neutral-200'
      }`}
    >
      {popular && (
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      )}
      
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Free' && <span className="text-neutral-500 ml-1">/month</span>}
      </div>
      <p className="text-neutral-600 mb-6">{description}</p>
      
      <div className="flex-grow mb-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              ) : (
                <X size={18} className="text-neutral-400 mt-0.5 mr-2 flex-shrink-0" />
              )}
              <span className={feature.included ? 'text-neutral-700' : 'text-neutral-500'}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      <a 
        href="#download" 
        className={popular ? 'btn-primary w-full' : 'btn-outline w-full'}
      >
        {buttonText}
      </a>
    </div>
  );
};

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans: PricingPlan[] = [
    {
      name: "Free",
      price: "Free",
      description: "For individual developers just getting started with AI coding.",
      features: [
        { name: "Basic AI code generation", included: true },
        { name: "Limited AI chat capabilities", included: true },
        { name: "Standard code editing features", included: true },
        { name: "Community support", included: true },
        { name: "Local project support only", included: true },
        { name: "Basic GPT-3.5 model access", included: true },
        { name: "Advanced GPT-4 model access", included: false },
        { name: "Multi-repo support", included: false },
        { name: "Team collaboration", included: false },
      ],
      buttonText: "Download Free"
    },
    {
      name: "Pro",
      price: annual ? "$20" : "$24",
      description: "For professional developers who want the full AI experience.",
      features: [
        { name: "Advanced AI code generation", included: true },
        { name: "Unlimited AI chat & code assistance", included: true },
        { name: "Enhanced editing capabilities", included: true },
        { name: "Priority email support", included: true },
        { name: "Multi-repository support", included: true },
        { name: "Advanced GPT-4 model access", included: true },
        { name: "Local models for privacy", included: true },
        { name: "Custom snippets & templates", included: true },
        { name: "Limited team collaboration", included: false },
      ],
      buttonText: "Get Pro",
      popular: true
    },
    {
      name: "Team",
      price: annual ? "$39" : "$49",
      description: "For teams who need collaborative AI-powered coding.",
      features: [
        { name: "Everything in Pro plan", included: true },
        { name: "Team collaboration features", included: true },
        { name: "Admin dashboard & controls", included: true },
        { name: "Dedicated support channel", included: true },
        { name: "Shared custom templates", included: true },
        { name: "Advanced security features", included: true },
        { name: "Usage analytics & reporting", included: true },
        { name: "Custom training for teams", included: true },
        { name: "Enterprise SSO integration", included: false },
      ],
      buttonText: "Get Team"
    }
  ];

  return (
    <section id="pricing" className="section bg-neutral-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">Choose your <span className="text-gradient">plan</span></h2>
          <p className="text-lg mb-8">
            Select the perfect plan for your needs. All plans come with a 7-day trial.
          </p>
          
          <div className="inline-flex items-center p-1 bg-neutral-100 rounded-lg mb-8">
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                annual ? 'bg-white shadow-sm' : 'text-neutral-600'
              }`}
              onClick={() => setAnnual(true)}
            >
              Annual <span className="text-sm text-green-500 font-medium ml-1">Save 20%</span>
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                !annual ? 'bg-white shadow-sm' : 'text-neutral-600'
              }`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        
        <div className="text-center max-w-2xl mx-auto mt-12">
          <p className="text-neutral-500">
            Need a custom solution for your enterprise?{' '}
            <a href="#contact" className="text-primary-600 hover:underline">Contact us</a> for pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;