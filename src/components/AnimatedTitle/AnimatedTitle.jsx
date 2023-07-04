import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useSplitTextAnimation } from "../../Hooks/useSplitTextAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AnimatedTitle = ({ children }) => {
  const titleRef = useRef(null);
  const animatedTitleRef = useSplitTextAnimation(titleRef);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animatedTitleRef.current,
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    tl.fromTo(
      animatedTitleRef.current.querySelectorAll(".character"),
      { opacity: 0.15 },
      { opacity: 1, stagger: 0.2, ease: "easeOut" }
    );
  }, [animatedTitleRef]);

  return <h2 ref={animatedTitleRef}>{children}</h2>;
};

AnimatedTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
