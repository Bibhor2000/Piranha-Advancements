import { auth, firestore } from '../lib/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// Custom hook to read  auth record and user profile doc when signing in
export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  // listens to any changes to "user"
  useEffect(() => {
    
    // turns off realtime subscription when its not needed for listening to any changes
    let unsubscribe;
    
    // if identified as an user a reference will be made to the firestore users collection for the user's id matching document 
    if (user) {
      const ref = firestore.collection('users').doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, username };
}