import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white bg-opacity-90 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 text-primary-800 font-semibold text-xl">
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
          <span>Genie AI</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="nav-link">Features</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          {/* <a href="#download" className="nav-link">Download</a>
          <a href="https://github.com/getcursor/cursor" target="_blank" rel="noopener noreferrer" className="nav-link flex items-center gap-1.5">
            <Github size={18} />
            <span>GitHub</span>
          </a> */}
        </nav>

        {/* <div className="hidden md:flex items-center space-x-4">
          <a href="#download" className="btn-primary">
            Download
          </a>
        </div> */}

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-800 focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fadeIn">
          <div className="container flex flex-col space-y-4">
            <a href="#features" className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#pricing" className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#download" className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Download</a>
            <a 
              href="https://github.com/getcursor/cursor" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-link py-2 flex items-center gap-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a href="#download" className="btn-primary w-full text-center" onClick={() => setMobileMenuOpen(false)}>
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;