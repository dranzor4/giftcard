import { useState, useEffect } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    

    const handleResize = () => {
        // Check if the window width is less than a certain threshold (e.g., 768 pixels)
        setIsMobile(window.innerWidth < 768);
      };
  
      // Initial check on component mount
      handleResize();
  
      // Attach event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, []);

  return isMobile;
};

export default useIsMobile;