import { motion, AnimatePresence } from "framer-motion";
import { useContext, useEffect } from 'react';
import { UserContext } from '../lib/context';
import Image from 'next/image';
import styles from '../styles/display.module.css';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';



export default function Home() {

  //scene, camera, and renderer setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
  const renderer = new THREE.WebGLRenderer();
  renderer.setClearColor( 0xC5C5C3 );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  // Orbitcontroller setup
  const controls = new OrbitControls( camera, renderer.domElement );

  //light setup
  const ambientLight = new THREE.AmbientLight( 0xcccccc );
  scene.add( ambientLight );
			
  const directionalLight = new THREE.DirectionalLight( 0xffffff );
  directionalLight.position.set( 0, 0, 0 ).normalize();
  scene.add( directionalLight );	

  //model setup
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  camera.position.z = 5;

  //animation setup & render to camera/scene setup
  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  }

  animate();
  
    return (
      <p className={styles.p}>Ship Display in Development</p>
    )
}