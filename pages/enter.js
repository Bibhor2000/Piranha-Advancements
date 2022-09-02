import { auth, firestore, googleAuthProvider } from '../lib/firebase';
import { UserContext } from '../lib/context';

import { useEffect, useState, useCallback, useContext } from 'react';
import debounce from 'lodash.debounce';

export default function Enter(props) {
  const { user, username } = useContext(UserContext);

  return (
    <main>
      <SignInButton></SignInButton>
    </main>
  );
}

// Sign in with Google button
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

// Sign out of Google button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}
