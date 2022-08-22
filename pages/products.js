import styles from '../styles/Products.module.css'
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from 'react';
import { UserContext } from '../lib/context';


export default function Home() {

  const { user, username } = useContext(UserContext)


    return (
      
      <body>

      <div className={styles.grid}>

        <div className={styles.card}>
        <img src="g63_billet.png" className={styles.img}/>
        <div class="container">
          <h4><b>G63 Billet Block</b></h4>
          <p>$4000.00</p>
          <motion.button
           className={styles.button} 
           whileHover={{ scale: 1.1 }}
           >
            Buy
            </motion.button>
        </div>
      </div>

        <div className={styles.card}>
        <img src="g63_cylinder.png" className={styles.img}/>
        <div class="container">
          <h4><b>G63 Cylinder Head</b></h4>
          <p>$2300.00</p>
          <motion.button
           className={styles.button} 
           whileHover={{ scale: 1.1 }}
           >
            Buy
            </motion.button>
        </div>
      </div>

        <div className={styles.card}>
        <img src="g63_cover.png" className={styles.img}/>
        <div class="container">
          <h4><b>G63 Valve Cover</b></h4>
          <p>$500.00</p>
          <motion.button 
          className={styles.button} 
          whileHover={{ scale: 1.1 }}
          >
            Buy
            </motion.button>
        </div>
       </div>

      </div>

      </body>

    )
  }