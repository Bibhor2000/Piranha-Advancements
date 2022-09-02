import { motion, AnimatePresence } from "framer-motion";
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import styles from '../styles/Home.module.css';
import Image from 'next/image';


export default function Home() {

  const { user, username } = useContext(UserContext)


  return (

    <body>
      <section>
      <Image
      className={styles.Image}
      src="/piranha.gif"
      layout="fill"
      objectFit="cover"
      objectPosition="fixed"
      />

      <h1 className={styles.h1}>
        Piranha Advancements
      </h1>
      </section>

      <section>
        <p className={styles.p1}>
          What is Piranha?
        </p>

        <p className={styles.p2}>
          We are an anti-gravity racing team, based in Brazil.<br/>
          We design our ships to be the fastest in the league.<br/>
          When we design our ships we strive for nothing short of perfection.
        </p>

        <p className={styles.p3}>
          "With added Bite!!!"
        </p>
      </section>

      <section>
      <div className={styles.wave}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path fill= "#e60000" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
      </section>
    </body>
  )
}
