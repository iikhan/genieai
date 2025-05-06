import React from 'react';
import { Download, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-r from-primary-900 to-secondary-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-500 rounded-full"></div>
        <div className="absolute top-40 right-10 w-40 h-40 bg-secondary-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/2 w-52 h-52 bg-primary-700 rounded-full"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start coding smarter today
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Download Cursor now and experience the future of coding with AI assistance. 
            Available for macOS, Windows, and Linux.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <a 
              href="#mac-download" 
              className="btn bg-white text-primary-900 hover:bg-neutral-100 px-6 py-3 text-lg"
            >
              <Download size={20} className="mr-2" />
              Download for Mac
            </a>
            <a 
              href="#windows-download" 
              className="btn bg-white/20 text-white hover:bg-white/30 px-6 py-3 text-lg"
            >
              Download for Windows
            </a>
            <a 
              href="#linux-download" 
              className="btn bg-white/20 text-white hover:bg-white/30 px-6 py-3 text-lg"
            >
              Download for Linux
            </a>
          </div>
          
          <div className="text-white/70 text-sm">
            <p>By downloading, you agree to our <a href="#terms" className="underline hover:text-white">Terms of Service</a> and <a href="#privacy" className="underline hover:text-white">Privacy Policy</a>.</p>
            <p className="mt-2">Looking for the source code? <a href="https://github.com/getcursor/cursor" className="flex items-center justify-center gap-1.5 underline hover:text-white"><span>View on GitHub</span> <ArrowRight size={16} /></a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;