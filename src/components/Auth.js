import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

export default function Auth({ onUserChange }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      onUserChange(u);
    });
    return () => unsub();
  }, [onUserChange]);

  return (
    <div>
      {user ? (
        <>
          <p>👋 Welcome, {user.displayName}</p>
          <button onClick={() => signOut(auth)}>Logout</button>
        </>
      ) : (
        <button onClick={() => signInWithPopup(auth, provider)}>
          Sign in with Google
        </button>
      )}
    </div>
  );
}
