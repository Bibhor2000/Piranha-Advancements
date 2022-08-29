import styles from '../styles/Ships.module.css'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';


export default function Home() {

    return (
      
      <body>
        <Image
      className={styles.Image}
      src="/piranha_background.jpg"
      layout="fill"
      objectFit="cover"
      objectPosition="fixed"
      />

      <div className={styles.grid}>
        <div className={styles.card}>

        <video controls width="350" src="piranha_agility.mp4"/>

        </div>

        <div className={styles.card}>

        <video controls width="350" src="piranha_speed.mp4"/>
        
        </div>

        <div className={styles.card}>

        <video controls width="350" src="piranha_prototype.mp4"/>

        </div>
      </div>

      </body>

    )
  }