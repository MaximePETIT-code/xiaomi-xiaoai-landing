import Hero from "./components/sections/Hero/Hero";
import Introduction from "./components/sections/Introduction/Introduction";
import ShowProduct from "./components/sections/ShowProduct/ShowProduct";
import { VideoOnScroll } from "./components/Video/VideoOnScroll/VideoOnScroll";
import { Lenis as ReactLenis } from "@studio-freight/react-lenis";

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
      </ReactLenis>
    </>
  );
}

export default App;
