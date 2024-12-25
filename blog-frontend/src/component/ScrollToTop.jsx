import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Try modern instant behavior first
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // This ensures no animation
      });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      // Fallback for older browsers
      // These methods have no animation by default
      if (typeof window.scrollTo === "function") {
        window.scrollTo(0, 0);
      } else if (typeof window.scroll === "function") {
        window.scroll(0, 0);
      } else {
        // Last resort
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; // For Safari
      }
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
