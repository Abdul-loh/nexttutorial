import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import SlideImage from "@/components/mainHeader";

export default function Home() {
  return (

    <div className={styles["containerFoodie"]}>

    <div className={styles["foodies"]}>
      <div>
        <SlideImage/>
      </div>
      <div className={styles["foodhome"]}>
        <h2 className={styles["foodWords"]}>Nextlevel food for Nextlevel foodies</h2>
        <p> Taste & share food from all over the world</p>
        <div className={styles["foodMore"]}>
          <Link href="./community">Join the community</Link>
          <Link  className={styles["menu"]} href="./meals">Explore Meals</Link>
        </div>
  </div>
  </div>

  <h1>How it's work</h1>
   
    </div>  
  );
}
