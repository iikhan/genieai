import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeDemo from './components/CodeDemo';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import DarkThemeLandingPage from './components/DarkThemeLandingPage'

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      { <DarkThemeLandingPage/> }
      {/* <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Features />
        <CodeDemo />
        <Testimonials />
        <Pricing /> 
         <CTA /> 
      </main>
      <Footer /> */}
    </div>
  );
}

export default App;