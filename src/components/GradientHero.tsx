import { useState } from 'react';

export default function AICodeEditor() {
  // Background gradient style
  const gradientStyle = {
    backgroundImage: 'linear-gradient(90deg, #6b21a8, #dc2626, #16a34a, #0369a1)',
    backgroundSize: '200% 100%',
    animation: 'gradientMove 15s linear infinite'
  };

  return (
    <div className="w-full py-16 px-4 flex flex-col items-center justify-center relative" style={gradientStyle}>
      {/* Main Content */}
      <div className="container mx-auto max-w-6xl text-center relative z-10 mb-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
        AI Powered Private LLM
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-12 font-mono max-w-4xl mx-auto">
          
          Enabling enterprises to harness the power of AI without data breaches.
        </p>
        
        {/* Download Buttons */}
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-md flex items-center font-mono hover:bg-gray-100 transition-colors">
            <WindowsIcon /> <span className="ml-2">DOWNLOAD FOR WINDOWS</span>
          </button>
          
          <button className="bg-black text-white px-6 py-3 rounded-md font-mono hover:bg-gray-900 transition-colors">
            ALL DOWNLOADS
          </button>
        </div> */}
        
      </div>
      
      {/* Code Editor Mock */}
     
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

// Windows Icon Component
function WindowsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M0 2.265l6.54-.887.003 6.309-6.535.037L0 2.265zm6.536 6.12l.005 6.313-6.535-.888v-5.459l6.53.034zm.792-7.068L16 0v7.585l-8.672.07V1.317zm8.672 7.824L16 16l-8.672-1.166-.011-5.648 8.683-.045z" />
    </svg>
  );
}