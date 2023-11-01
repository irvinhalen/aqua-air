import ScrollReveal from 'scrollreveal';
import React, { useEffect, useRef } from 'react';

const ScrollRevealElement = ({ children }) => {
    const elementRef = useRef(null);
  
    useEffect(() => {
      const element = elementRef.current;
  
      // Apply scroll reveal effect to the 'element' using ScrollReveal library
      ScrollReveal().reveal(element, {
        // specify the scroll reveal options here
        origin: 'bottom', // Change this to your desired animation settings
        distance: '150px',
        opacity: 0,
        duration: 1000
        // other options...
      });
    }, []);
  
    return <div ref={elementRef}>{children}</div>;
  };

  export default ScrollRevealElement;
