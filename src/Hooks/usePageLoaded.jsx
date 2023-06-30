import { useEffect, useState } from "react";

function usePageLoaded(delay = 1500) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleLoad = () => {
      timeoutId = setTimeout(() => {
        setIsLoaded(true);
        document.body.style.overflow = "visible";
      }, delay);
    };

    // document.body.style.overflow = "hidden";
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return isLoaded;
}

export default usePageLoaded;
