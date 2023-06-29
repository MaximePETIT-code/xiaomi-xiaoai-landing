import Hero from "./components/sections/Hero/Hero";
import Introduction from "./components/sections/Introduction/Introduction";
import ShowProduct from "./components/sections/ShowProduct/ShowProduct";
import CommingSoon from "./components/sections/CommingSoon/CommingSoon";
import { VideoOnScroll } from "./components/Video/VideoOnScroll/VideoOnScroll";
import { Lenis as ReactLenis, useLenis } from "@studio-freight/react-lenis";

function App() {
  const options = {
    lerp: 0.07,
    smooth: true,
    direction: "vertical",
  };

  return (
    <>
      <ReactLenis root options={{ ...options }}>
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
        <CommingSoon/>
      </ReactLenis>
    </>
  );
}

export default App;
