import Hero from "./components/sections/Hero/Hero";
import Loader from "./components/Loader/Loader";
import Introduction from "./components/sections/Introduction/Introduction";
import ShowProduct from "./components/sections/ShowProduct/ShowProduct";
import CommingSoon from "./components/sections/CommingSoon/CommingSoon";
import { VideoOnScroll } from "./components/Video/VideoOnScroll/VideoOnScroll";
import usePageLoaded from "./Hooks/usePageLoaded";
import { useEffect, useState } from "react";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";

function App() {
  const options = {
    lerp: 0.07,
    smooth: true,
    direction: "vertical",
  };

  const isPageLoaded = usePageLoaded(1500);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (isPageLoaded) {
      setShowLoader(false);
    }
  }, [isPageLoaded]);

  return (
    <>
      {/* <ReactLenis root options={{ ...options }}> */}
      <Loader showLoader={showLoader} />
      <main>
        <Hero />
        <Introduction />
        <ShowProduct />
        <VideoOnScroll
          folder="/xiaomi/sequence-03/"
          count={102}
          extension="png"
          pad={3}
          fadeOut={true}
        />
        <CommingSoon />
      </main>
      {/* </ReactLenis> */}
    </>
  );
}

export default App;
