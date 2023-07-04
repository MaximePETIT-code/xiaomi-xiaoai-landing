import { AnimatedTitle } from "../../AnimatedTitle/AnimatedTitle";
import DoubleImage from "../../DoubleImage/DoubleImage";
import styles from "./Introduction.module.scss";

export default function Introduction() {
  return (
    <section className={styles.introduction}>
      <div className={styles.introduction__container}>
        <AnimatedTitle>
          Unleash the power of sound with Xiaomi Xiaoai Pro - The ultimate
          speaker that will revolutionize your audio world!
        </AnimatedTitle>
      </div>
      <div className={styles.introduction__doubleImageContainer}>
        <DoubleImage
          srcs={[
            "https://res.cloudinary.com/dvx9zz0jq/image/upload/xiaomi/pictures/packshot.png",
            "https://res.cloudinary.com/dvx9zz0jq/image/upload/xiaomi/pictures/packshot2.png",
          ]}
        />
        <div className={styles.introduction__doubleImageContainer__grid} />
      </div>
    </section>
  );
}
