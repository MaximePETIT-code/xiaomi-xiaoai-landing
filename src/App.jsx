import Hero from "./components/sections/Hero/Hero";
import Loader from "./components/Loader/Loader";
import Introduction from "./components/sections/Introduction/Introduction";
import ShowProduct from "./components/sections/ShowProduct/ShowProduct";
import CommingSoon from "./components/sections/CommingSoon/CommingSoon";
import { VideoOnScroll } from "./components/Video/VideoOnScroll/VideoOnScroll";
import usePageLoaded from "./Hooks/usePageLoaded";
import { useScreenSize } from "./Hooks/useScreenSize";
import { useEffect, useState } from "react";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

function App() {
  const isMobile = useScreenSize(900);
  const [smoothScroll, setSmoothScroll] = useState(false);
  const isPageLoaded = usePageLoaded(1000);
  const [showLoader, setShowLoader] = useState(true);

  const scrollOptions = {
    lerp: 0.07,
    smooth: smoothScroll,
    direction: "vertical",
  };

  useEffect(() => {
    if (isPageLoaded) {
      setShowLoader(false);
    }
  }, [isPageLoaded]);

  return (
    <>
      <ReactLenis root options={{ ...scrollOptions }}>
        <Loader showLoader={showLoader} />
        <main>
          <Hero setSmoothScroll={setSmoothScroll} isPageLoaded={isPageLoaded} />
          <Introduction />
          <ShowProduct />
          {!isMobile && (
            <VideoOnScroll
              folder="/xiaomi/sequence-03/"
              count={102}
              extension="png"
              pad={3}
              fadeOut={true}
              setSmoothScroll={setSmoothScroll}
            />
          )}
          <CommingSoon />
        </main>
      </ReactLenis>
    </>
  );
}

export default App;
