import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScreenSize } from "../../Hooks/useScreenSize";
import PropTypes from "prop-types";
import styles from "./DoubleImage.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function DoubleImage({ srcs = [] }) {
  const isMobile = useScreenSize(990);
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom+=300px 100%",
        scrub: true,
      },
    });

    imageRefs.current.forEach((imageRef) => {
      tl.fromTo(
        imageRef.current,
        { y: 0 },
        { y: `${!isMobile ? '-100px' : '-10px'}`, ease: 'none' },
        0
      );
    });
  }, [isMobile]);

  return (
    <div ref={containerRef} className={styles.doubleImage}>
      {srcs.map((src, key) => {
        const imageRef = useRef(null);
        imageRefs.current[key] = imageRef;

        return (
          <div key={key} className={styles.doubleImage__wrapper}>
            <img
              ref={imageRef}
              className={styles.doubleImage__image}
              src={src}
            />
          </div>
        );
      })}
    </div>
  );
}

DoubleImage.propTypes = {
  srcs: PropTypes.arrayOf(PropTypes.string),
};
