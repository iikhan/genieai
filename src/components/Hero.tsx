import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      heroRef.current.style.transform = `perspective(1000px) rotateY(${x * 2}deg) rotateX(${y * -2}deg)`;
    };
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-hero-pattern overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="mb-6">
            <span className="text-gradient">AI Powered Private LLM</span>
            {/* <span className="text-gradient">AI-first</span> code editor that <br className="hidden md:block" />
            helps you code <span className="text-gradient">2-5x faster</span> */}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Enabling the power of AI without compromising your DATA footprints
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            {/* <a href="#download" className="btn-primary px-6 py-3 text-lg">
              <Download size={20} className="mr-2" />
              Download for free
            </a> */}
             <a href="#features" className="btn-outline px-6 py-3 text-lg">
              See features
              <ArrowRight size={20} className="ml-2" />
            </a> 
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default Hero;