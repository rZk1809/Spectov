import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { About, Contact, Experience, Hero, Works, Team, Donation, StarsCanvas } from "./index";

const Home = () => {
  const location = useLocation();

  // Scroll to top on page load/reload or when navigating to home
  useEffect(() => {
    // Always scroll to top when Home component mounts
    window.scrollTo(0, 0);
    
    // Handle hash navigation if present in URL
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
      <Works />
      <About />
      <Team />
      <Experience />
      <Donation />
      
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Home;