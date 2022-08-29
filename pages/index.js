import { motion, AnimatePresence } from "framer-motion";
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import styles from '../styles/Home.module.css';
import Image from 'next/image';


export default function Home() {

  const { user, username } = useContext(UserContext)


  return (

    <body>
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
    </body>
  )
}
