import { AnimatedTitle } from "../../AnimatedTitle/AnimatedTitle";
import DoubleImage from "../../DoubleImage/DoubleImage";
import styles from "./Introduction.module.scss";

export default function Introduction() {
  return (
    <section className={styles.introduction}>
      <div className={styles.introduction__container}>
        <AnimatedTitle>
          Unleash the power of sound with{" "}
          <span className="orange">Xiaomi Xiaoai Pro</span> - The ultimate
          speaker that will revolutionize your audio world!
        </AnimatedTitle>
      </div>
      <DoubleImage
        srcs={[
          "https://res.cloudinary.com/dvx9zz0jq/image/upload/v1687991520/xiaomi/pictures/party.png",
          "https://res.cloudinary.com/dvx9zz0jq/image/upload/v1687991520/xiaomi/pictures/controls.png",
        ]}
      />
    </section>
  );
}
