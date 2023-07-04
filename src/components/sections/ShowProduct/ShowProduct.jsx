import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ShowProdcut.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function ShowProduct() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glowImage = glowRef.current;

    gsap.to(glowImage, {
      scrollTrigger: {
        trigger: glowImage,
        start: "top 80%",
        end: "bottom 30%",
        scrub: true,
      },
      width: "700px",
    });
  }, []);

  return (
    <section className={styles.showProduct}>
      <div className={styles.showProduct__product}>
        <img
          src="https://res.cloudinary.com/dvx9zz0jq/image/upload/w_400,q_auto:good,e_sharpen,f_auto/xiaomi/pictures/product.png"
          alt="Xiaomi Xiaoai Pro black"
        />

        <div className={styles.showProduct__infos}>
          <h3 className={styles.showProduct__subtitle}>
            Music. Technology. Perfected
          </h3>
          <h2 className={styles.showProduct__title}>
            Immersive Sound Experience
          </h2>
          <p className={styles.showProduct__descr}>
            Immerse yourself in a world of pure sound with our next-generation
            smart speaker.
          </p>
        </div>
      </div>

      <div className={styles.showProduct__glow}>
        <img
          src="https://res.cloudinary.com/dvx9zz0jq/image/upload/xiaomi/assets/glow3.png"
          alt="glow"
          ref={glowRef}
        />
      </div>
    </section>
  );
}
