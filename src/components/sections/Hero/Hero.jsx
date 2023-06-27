import styles from "./Hero.module.scss";
import { VideoOnScroll } from "../../Video/VideoOnScroll/VideoOnScroll";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <VideoOnScroll
        className={styles.video}
        folder="/v1687899930/xiaomi/sequence-01/"
        count={90}
        extension="png"
        pad="2"
      />
    </section>
  );
}
