import React from 'react';
import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center space-x-2 text-white mb-4">
              <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="512" height="512" rx="128" fill="#1E1B4B" className="scale-75"/>
                <path d="M352 160L160 208V304L352 352V160Z" fill="url(#paint0_linear)"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="160" y1="160" x2="352" y2="352" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6271FC"/>
                    <stop offset="1" stopColor="#9761FF"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-semibold">Genei AI</span>
            </a>
            <p className="text-neutral-400 mb-6 max-w-md">
              Genei AI enabling enterprise to harness the power of AI without compromising data
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/getcursor/cursor" className="text-neutral-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#twitter" className="text-neutral-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#linkedin" className="text-neutral-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#youtube" className="text-neutral-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-neutral-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-neutral-400 hover:text-white transition-colors">Pricing</a></li>
              {/* <li><a href="#download" className="text-neutral-400 hover:text-white transition-colors">Download</a></li> */}
              <li><a href="#updates" className="text-neutral-400 hover:text-white transition-colors">Updates</a></li>
              <li><a href="#roadmap" className="text-neutral-400 hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-neutral-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="text-neutral-400 hover:text-white transition-colors">Careers</a></li>
              {/* <li><a href="#blog" className="text-neutral-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#press" className="text-neutral-400 hover:text-white transition-colors">Press</a></li> */}
              <li><a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#docs" className="text-neutral-400 hover:text-white transition-colors">Documentation</a></li>
              {/* <li><a href="#community" className="text-neutral-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="#tutorials" className="text-neutral-400 hover:text-white transition-colors">Tutorials</a></li> */}
              <li><a href="#privacy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Cursor, Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <select className="bg-neutral-800 text-neutral-400 rounded px-3 py-1 border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-primary-500">
              <option>English (US)</option>
              <option>Español</option>
              <option>Français</option>
              <option>Deutsch</option>
              <option>日本語</option>
            </select>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;