import { useRef, useEffect } from "react";
import Button from "../../Button/Button";
import { useSplitTextAnimation } from "../../../Hooks/useSplitTextAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CommingSoon.scss";

gsap.registerPlugin(ScrollTrigger);

export default function CommingSoon() {
  const titleRef = useRef(null);
  const animatedTitleRef = useSplitTextAnimation(titleRef, true);

  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    console.log(buttonRef);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animatedTitleRef.current,
        start: "100px 90%",
        end: "bottom+=100px 90%",
      },
    });

    tl.from(animatedTitleRef.current.querySelectorAll(".character"), {
      opacity: 0,
      y: "30px",
      stagger: "0.1",
      ease: "power2.out",
    })
      .to(subtitleRef.current, { opacity: 1, ease: "power2.out", duration: 0.8 })
      .to(buttonRef.current, { opacity: 1, duration: 0.8, ease: "power2.out", delay: '-0.4' });
  }, [animatedTitleRef]);

  return (
    <section className="commingSoon">
      <h3 className="commingSoon__title">
        <span ref={animatedTitleRef} style={{ fontWeight: "bold" }}>
          Xiaomi Xioai Pro
        </span>
        <br />
        <span className="commingSoon__subtitle" ref={subtitleRef}>
          comming soon
        </span>
      </h3>
      <div className="commingSoon__button" ref={buttonRef}>
        <Button link={"#notify"}>Notify me</Button>
      </div>
    </section>
  );
}
