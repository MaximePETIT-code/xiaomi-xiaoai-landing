import { useEffect, useState } from "react";

// Don't use overflow: hidden to prevent skipping effect
function preventScroll(event) {
  event.preventDefault();
  window.scrollTo(0, 0);
}

function usePageLoaded(delay = 1000) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleLoad = () => {
      timeoutId = setTimeout(() => {
        setIsLoaded(true);
        window.removeEventListener("scroll", preventScroll);
      }, delay);
    };

    window.addEventListener("scroll", preventScroll);
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return isLoaded;
}

export default usePageLoaded;
