import '../styles/globals.css'
import { UserContext } from '../lib/context';
import Navbar from '../comps/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';
import { auth, firestore } from '../lib/firebase';
import { useUserData } from '../lib/hooks';


function MyApp({ Component, pageProps }) {

  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar/>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
  
}

export default MyApp
