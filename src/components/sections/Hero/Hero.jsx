import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";
import { useSplitTextAnimation } from "../../../Hooks/useSplitTextAnimation";
import { VideoOnScroll } from "../../Video/VideoOnScroll/VideoOnScroll";
import "./Hero.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ setSmoothScroll, isPageLoaded }) {
  const titleRef = useRef(null);
  const animatedTitleRef = useSplitTextAnimation(titleRef, true);
  const heroRef = useRef(null);
  const productAnimationRef = useRef(null);
  const videoOnScrollRef = useRef(null);
  const productWhiteRef = useRef(null);
  const productBlackRef = useRef(null);
  const productOrangeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop } = document.documentElement;

      gsap.set(videoOnScrollRef.current, { opacity: scrollTop > 1 ? 1 : 0 });
      gsap.set(productAnimationRef.current, { opacity: scrollTop > 1 ? 0 : 1 });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isPageLoaded) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
        },
      });

      tl.fromTo(
        productBlackRef.current,
        { y: "600px", scale: 0.9, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.3,
        }
      )
        .fromTo(
          [productWhiteRef.current, productOrangeRef.current],
          { opacity: 0, y: "600px", scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.2,
          },
          "-=1.3"
        )
        .from(
          animatedTitleRef.current.querySelectorAll(".character"),
          {
            opacity: 0,
            y: "30px",
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        );
    }
  }, [isPageLoaded, animatedTitleRef]);

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
    <section ref={heroRef} className="hero">
      <div className="hero__content">
        <h1 className="hero__content__title">
          <span ref={animatedTitleRef}>Xiaomi Xiaoai Pro</span>
        </h1>
      </div>
      <div ref={productAnimationRef} className="hero__productAnimation">
        <img
          ref={productWhiteRef}
          src="https://res.cloudinary.com/dvx9zz0jq/image/upload/q_auto:good,e_sharpen,w_1920,f_auto/xiaomi/pictures/product_white.png"
        />
        <img
          ref={productBlackRef}
          src="https://res.cloudinary.com/dvx9zz0jq/image/upload/q_auto:good,e_sharpen,w_1920,f_auto/xiaomi/pictures/product_black.png"
        />
        <img
          ref={productOrangeRef}
          src="https://res.cloudinary.com/dvx9zz0jq/image/upload/q_auto:good,e_sharpen,w_1920,f_auto/xiaomi/pictures/product_orange.png"
        />
        <img
          className="hero__productAnimation__background"
          src="https://res.cloudinary.com/dvx9zz0jq/image/upload/q_auto:good,e_sharpen,w_1920,f_auto/xiaomi/pictures/product_background.png"
        />
      </div>
      {/* <div className={styles.hero__showProduct}></div> */}

      <div ref={videoOnScrollRef} className="hero__videoOnScroll">
        <VideoOnScroll
          folder="/xiaomi/sequence-01/"
          count={90}
          extension="png"
          pad={2}
          setSmoothScroll={setSmoothScroll}
        />
      </div>
    </section>
  );
}

Hero.propTypes = {
  isPageLoaded: PropTypes.bool.isRequired,
  setSmoothScroll: PropTypes.func.isRequired,
};
