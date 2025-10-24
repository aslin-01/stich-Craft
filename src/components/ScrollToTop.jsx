import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ✅ Always scroll to top for every route change
    // Multiple methods for maximum compatibility
    window.scrollTo(0, 0);

    // Backup methods for different browsers
    setTimeout(() => {
      window.scrollTo(0, 0);
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
    }, 0);

    console.log(`✅ Scrolled to top on: ${pathname}`);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
