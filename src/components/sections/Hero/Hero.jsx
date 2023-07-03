import { useRef, useEffect } from "react";
import styles from "./Hero.module.scss";
import { VideoOnScroll } from "../../Video/VideoOnScroll/VideoOnScroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({setSmoothScroll}) {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top+=100px",
        end: "top+=250px",
        scrub: true,
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 1 },
      {
        opacity: 0,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.hero__content}>
        <h1 ref={titleRef} className={styles.hero__content__title}>
          Xiaomi Xiaoai Pro
        </h1>
      </div>
      {/* <div className={styles.hero__showProduct}></div> */}
      <VideoOnScroll
        className={styles.video}
        folder="/xiaomi/sequence-01/"
        count={90}
        extension="png"
        pad={2}
        setSmoothScroll={setSmoothScroll}
      />
    </section>
  );
}

Hero.propTypes = {
  className: PropTypes.string,
};
