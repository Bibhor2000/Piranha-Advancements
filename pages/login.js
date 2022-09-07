import { auth, firestore, googleAuthProvider } from '../lib/firebase';
import { UserContext } from '../lib/context';
import { useEffect, useState, useCallback, useContext } from 'react';
import debounce from 'lodash.debounce';
import styles from '../styles/login.module.css'
import Image from 'next/image';
import Link from 'next/link';


export default function Enter(props) {
  const { user, username } = useContext(UserContext);

  return (
    <body>
      <SignInButton></SignInButton>
      <SignOutButton></SignOutButton>

      <img
      className={styles.Firstimage}
      src="/instructions_one.png"
      />

      <img
      className={styles.Secondimage}
      src="/instructions_two.png"
      />

      <img
      className={styles.Thirdimage}
      src="/instructions_three.png"
      />

    </body>
  );
}

// Sign in with Google button function
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return ( //returns the google sign in button with an image
      <button className="btn-google" onClick={signInWithGoogle}>
        <img src={'/google.png'} width="30px" /> Sign in with Google
      </button>
  );
}

// Sign out of Google button function
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}
