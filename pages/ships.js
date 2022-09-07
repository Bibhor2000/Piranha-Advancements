import styles from '../styles/Ships.module.css'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';


export default function Home() {

    return (
      
      <body>
        <h2 className={styles.h2}>
          These are the anti-gravity ships that started our racing pedigree. <br/>
          These ships were raced in the year 2048. <br/>
        </h2>
        <Image
      className={styles.Image}
      src="/piranha_background.jpg"
      layout="fill"
      objectFit="cover"
      objectPosition="fixed"
      />

      <div className={styles.grid}>
        <div className={styles.card}>
          <p className={styles.p1}>Piranha Agility</p>
        <video className={styles.video} controls width="350" src="piranha_agility.mp4"/>
        </div>

        <div className={styles.card}>
          <p className={styles.p1}>Piranha Speed</p>
        <video className={styles.video} controls width="350" src="piranha_speed.mp4"/>   
        </div>

        <div className={styles.card}>
          <p className={styles.p2}>Piranha Prototype</p>
        <video className={styles.video} controls width="350" src="piranha_prototype.mp4"/>
        </div>
      </div>

      <div className={styles.wave}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path fill= "#e60000" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>

      <div>
        <p className={styles.p3}>"Hungry for speed"</p>
      </div>

      </body>

    )
  }