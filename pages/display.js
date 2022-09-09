import { motion, AnimatePresence } from "framer-motion";
import { useContext, useEffect } from 'react';
import { UserContext } from '../lib/context';
import Image from 'next/image';
import styles from '../styles/display.module.css';
import '@google/model-viewer';
import dynamic from "next/dynamic";

const Model = dynamic(
  () => import('../comps/Model'),
  { ssr: false }
)

export default function Home() {


    return (
      <Model />
    )
}