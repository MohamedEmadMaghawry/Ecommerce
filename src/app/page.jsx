import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/hero.svg"
export default function Home() {
  return (
<div className={styles.container}>
  <div className={styles.col}>
    <h1 className={styles.title}>Your Best Online Shop destination</h1>
    <p className={styles.description}>discover a world that is full of products at our online store,
    A store thats created by Mohamed Emad Fullstack react and next JS Developer. </p>
    <button className={styles.button}>Shop now!</button>
  </div>
  <div className={styles.col}>
    <Image className={styles.img} src={Hero} alt="MMR shop" />
  </div>
</div>
  );
}
