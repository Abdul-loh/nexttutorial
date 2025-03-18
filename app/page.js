'use client'
import styles from "./page.module.css";
import Link from "next/link";
import SlideShow from "@/components/slideShow";




export default function Home() {
  return (
    <>
      <header className={styles.foodiesHeader}>
      <div className={styles.foodies}>
        <div className={styles.slidepicture}>
          <SlideShow />

        </div>

        <div className={styles["foodhome"]}>
          <h2 className={styles["foodWords"]}>Nextlevel food for Nextlevel foodies</h2>
          <p> Taste & share food from all over the world</p>
          <div className={styles["foodMore"]}>
            <Link href="./community">Join the community</Link>
            <Link className={styles.menu} href="./meals">Explore Meals</Link>

          </div>
        </div>
      </div>

        <div className={styles.foodwork}>
          <div className={styles.foodexperience}>
            <h3>How it works</h3>
            <p>NextLevel Food is a platform for foodies to share their favorite recipe with the world. it's a place to discover new dishes, and to connect with other food lovers.</p>
          </div>

          <div>
            <p>NextLevel Food is a place to discover new dishes, favorite recipe with the world. it's a place to discover new dishes, and to connect with other food lovers.</p>
          </div>

          <div>
            <h3>Why NextLevel?</h3>
            <p>Nextlevel Food is a platform for foodies to share their favorite recipe with the world. it's a place to discover new dishes, and to connect with other food lovers.</p>
          </div>

          <div>
            <p>NextLevel Food is a place to discover new dishes, favorite recipe with the world. it's a place to discover new dishes, and to connect with other food lovers.</p>
          </div>

        </div>



      </header>


      <main></main>

    </>
  );


}
