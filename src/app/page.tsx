import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <p className={styles.text}>Hai :3</p>
      </div>
      <div className={styles.page}>
        <Image src="/cat.jpg" alt="cat" width={800} height={1000}/>
      </div>
    </div>
  );
}
