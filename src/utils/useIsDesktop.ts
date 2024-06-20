import { useState, useEffect } from "react";

// Custom hook to determine if the screen is laptop size or mobile
const useIsDesktop = () => {
  const [isLaptop, setIsLaptop] = useState<boolean>(window.innerWidth >= 1180);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1180);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isLaptop;
};

export default useIsDesktop;
